// src/app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/api/root';
import { getServerAuthSession } from '@/auth';

const handler = async (req: Request) => {
  const session = await getServerAuthSession();
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({ session }),
  });
};

export { handler as GET, handler as POST };
