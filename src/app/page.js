// Server Component for Project Loading
import { prisma } from '@/lib/db';
import ClientHomePage from '@/components/ClientHomePage';

export default async function Home() {
  // Load projects on the server - faster than tRPC for initial load
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Pass to client component
  return <ClientHomePage initialProjects={projects} />;
}
