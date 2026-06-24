import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const role = session?.user?.role;

  const pathName = request.nextUrl.pathname;

  if (
    !session &&
    (pathName.startsWith("/dashboard") || pathName.startsWith("/checkout"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    session &&
    (pathName.startsWith("/login") || pathName.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    session && role !== "lawyer" && pathName.startsWith("/dashboard/lawyer")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    session && role !== "client" && pathName.startsWith("/dashboard/user")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    session && role !== "admin" && pathName.startsWith("/dashboard/admin")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: [
    "/login", // not-logged-in
    "/register", // not-logged-in
    "/dashboard", // logged-in
    "/dashboard/admin/analytics", // admin
    "/dashboard/admin/transactions", // admin
    "/dashboard/admin/user-list", // admin
    "/dashboard/lawyer/hiring-history", // lawyer
    "/dashboard/lawyer/legal-profile", // lawyer
    "/dashboard/user/comments", // user
    "/dashboard/user/hiring-history", // user
    "/dashboard/user/update-profile", // user
    "/checkout/cancel", // logged-in
    "/checkout/success", // logged-in
  ],
};
