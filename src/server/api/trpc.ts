// src/server/api/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import { getServerAuthSession } from '@/auth';

const t = initTRPC.context<{
	session: Awaited<ReturnType<typeof getServerAuthSession>>;
}>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

// Middleware to ensure user is authenticated
const isAuthed = t.middleware(async ({ ctx, next }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next({ ctx: { session: ctx.session } });
});

// Middleware to ensure user is admin
const isAdmin = t.middleware(async ({ ctx, next }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	const role = (ctx.session.user as any).role;
	if (role !== 'ADMIN') {
		throw new TRPCError({ code: 'FORBIDDEN' });
	}
	return next({ ctx: { session: ctx.session } });
});

export const protectedProcedure = t.procedure.use(isAuthed);
export const adminProcedure = t.procedure.use(isAdmin);
