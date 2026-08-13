import { NextRequest, NextResponse } from "next/server";

const locales = ["it", "de", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/it${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static assets and Next internals
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
