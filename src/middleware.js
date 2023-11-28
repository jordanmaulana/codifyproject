import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  // Verifikasi TOKEN
  // Ada atau Tidak

  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  const token = request.cookies.get("token")?.value;

  /// Ini buat ngcek apakah token yang dimiliki user valid / nggak.
  /// kalo gak valid, dia akan diarahkan ke halaman login.
  if (token) {
    try {
      const secretKey = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_SECRET_KEY
      );
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
