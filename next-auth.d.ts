import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    role?: 'USER' | 'ADMIN';
  }
  interface Session {
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: 'USER' | 'ADMIN';
    };
  }
}
