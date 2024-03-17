/**
 * Renders a form for creating a new account.
 */
import React from "react";
import { SignUpForm } from "./components/SignUpForm";
import { Locale } from "@/i18n-config";
import { headers } from "next/headers";
import { Country } from "react-phone-number-input";
import Link from "next/link";

/**
 * Page component for creating a new account.
 * @returns JSX.Element representing the page.
 */

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  const headersList = headers();
  const locales = headersList.get("Accept-Language");
  const locale = locales?.split(",")[0].split("-")[1];

  return (
    <main className="p-4">
      <SignUpForm lang={lang} locale={locale as Country} />
      <div className="my-4">
        <p className="text-xs font-medium text-center">
          Already have an account?{" "}
          <Link
            href={`/${lang}/iniciar-session`}
            className="ml-2 underline text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
