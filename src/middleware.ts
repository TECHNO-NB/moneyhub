import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const isAuthRoute = req.nextUrl.pathname.startsWith("/auth");
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/profile");

  const isAccessTokenValid = (() => {
    if (!accessToken) return false;
    try {
      const decoded: JwtPayload = jwtDecode(accessToken);
      return decoded.exp * 1000 > Date.now(); // check expiry
    } catch (err) {
      return false;
    }
  })();

  if (isProtectedRoute && (!accessToken || !refreshToken || !isAccessTokenValid)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (isAuthRoute && accessToken && refreshToken && isAccessTokenValid) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
