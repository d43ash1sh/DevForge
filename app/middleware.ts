import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // List of protected routes that require authentication
  const protectedRoutes = ["/playground", "/components", "/ide", "/account"];

  // Check if the requested path matches any protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to home page with return URL
    const returnUrl = encodeURIComponent(request.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/?returnUrl=${returnUrl}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/playground/:path*",
    "/components/:path*",
    "/ide/:path*",
    "/account/:path*",
  ],
};