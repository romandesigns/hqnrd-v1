import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";
import { i18n } from "./i18n-config";
import { updateSession } from "@/utils/supabase/middleware";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request: NextRequest) {
  await updateSession(request);
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // matcher: [
  //   "/((?!_next/static|_next/image|favicon.ico|assets|auth/confirm|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)","/",
  // ],
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets|auth/confirm|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/[lang]",
  ],
};
