import NextAuth, { type NextAuthOptions, getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import type { Role } from '@prisma/client';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'database' },
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(creds) {
        if (!creds?.email || !creds.password) return null;
        const user = await prisma.user.findUnique({ where: { email: creds.email } });
        const dummyHash = '$2a$10$wq8Qplu0o1y9cQ1y9cQ1yuX9YwL5mX3pZbYJtF0pqkTQhQnJtF0pq';
        const hash = user?.passwordHash || dummyHash;
        const valid = await bcrypt.compare(creds.password, hash);
        if (!user || !valid) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role } as any;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // For OAuth providers, we need to handle first user promotion differently
      if (account && (account.provider === 'github' || account.provider === 'google')) {
        try {
          // Check if this is the first user (no admins exist)
          const adminCount = await prisma.user.count({ where: { role: 'ADMIN' } });
          
          if (adminCount === 0) {
            // Since this callback runs before user creation, we'll set a flag
            // and handle the promotion in the session callback
            return true;
          }
        } catch (error) {
          console.error('Error checking admin count:', error);
        }
      }
      return true;
    },
    async session({ session, user }) {
      if (session.user) {
        // Get the most up-to-date user data
        const dbUser = await prisma.user.findUnique({ 
          where: { id: user.id },
          select: { id: true, role: true }
        });
        
        // If this is the first user and no admin exists, promote them
        if (dbUser) {
          const adminCount = await prisma.user.count({ where: { role: 'ADMIN' } });
          if (adminCount === 0 && dbUser.role !== 'ADMIN') {
            try {
              await prisma.user.update({
                where: { id: user.id },
                data: { role: 'ADMIN' }
              });
              dbUser.role = 'ADMIN';
            } catch (error) {
              console.error('Error promoting first user to admin:', error);
            }
          }
        }
        
        (session.user as any).id = user.id;
        (session.user as any).role = dbUser?.role || 'USER';
      }
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
