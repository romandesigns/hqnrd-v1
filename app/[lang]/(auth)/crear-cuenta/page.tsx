/**
 * Renders a form for creating a new account.
 */
import React from "react";
import { SignUpForm } from "./components/SignUpForm";
import { Locale } from "@/i18n-config";
import { headers } from "next/headers";
import { Country } from "react-phone-number-input";
import Link from "next/link";
import { Brand } from "@/app/ui/components";

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
    <main className="min-h-dvh">
      <section className="p-2 flex items-center justify-center bg-green-500 min-h-dvh">
        <article className="bg-white p-2 pt-5 rounded-md">
          <div className="p-2 shadow-md rounded-md flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col my-3">
              <Brand className="my-3" />
              <p className="text-xs font-medium text-center w-4/5 my-3 text-neutral-500">
                Register and manage your reservations, payments, history and
                more!
              </p>
            </div>
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
          </div>
        </article>
      </section>
    </main>
  );
}
