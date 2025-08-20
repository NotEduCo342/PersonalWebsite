// src/server/api/routers/project.ts
import { publicProcedure, router } from '../trpc';
import { prisma } from '@/lib/db';

export const projectRouter = router({
  getAll: publicProcedure.query(async () => {
    return await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }),
});
