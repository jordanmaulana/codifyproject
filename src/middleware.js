import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  /// kalo punya token
  if (token) {
    try {
      /// cek apa token valid
      const secretKey = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_SECRET_KEY
      );
      await jose.jwtVerify(token, secretKey);

      /// cek kalo pathname = /
      /// kalo punya token trus ke halaman utama, dia bakal nampilin halaman event
      if (request.nextUrl.pathname === "/") {
        return NextResponse.rewrite(new URL("/events", request.url));
      }

      /// by default, lanjutkan ke route yang diinginkan
      return NextResponse.next();
    } catch (error) {
      /// kalo [token] gak valid, redirect ke login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  /// kalo ga punya token, redirect ke login page
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
