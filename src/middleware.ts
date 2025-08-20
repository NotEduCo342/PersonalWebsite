import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple rate limiting map (use Redis in production)
const rateLimit = new Map();

export function middleware(request: NextRequest) {
  // Only apply rate limiting to auth endpoints
  if (request.nextUrl.pathname.startsWith('/api/auth/')) {
    // Get IP address from headers (Next.js doesn't have request.ip)
    const ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              request.headers.get('cf-connecting-ip') || // Cloudflare
              'unknown';
    
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 10; // max 10 auth requests per 15 minutes

    const key = `${ip}:auth`;
    const requests = rateLimit.get(key) || [];
    
    // Clean old requests
    const recentRequests = requests.filter((time: number) => now - time < windowMs);
    
    if (recentRequests.length >= maxRequests) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
    
    recentRequests.push(now);
    rateLimit.set(key, recentRequests);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/auth/:path*',
};
