import { Brand, ErrorMessage, GoBack, HeadingSection } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { SignInForm } from "./SignInForm";
import { Card } from "../Card";

export function Content({
  lang,
  success,
  errorMessage,
}: {
  lang: Locale;
  success: string;
  errorMessage: string;
}) {
  return (
    <Card lang={lang}>
      <article className="relative flex items-stretch justify-stretch rounded-md border p-2">
        <div className="m-auto flex max-w-lg flex-col items-center justify-center gap-3 px-3 sm:p-16">
          <ErrorMessage
            errorMessage={errorMessage}
            lang={lang}
            path="auth/iniciar-session"
          />
          {success === "true" && (
            <div>
              <p className="m-0 mb-4 rounded-md bg-primary-100/50 p-2 text-sm">
                Password successfuly changed!
                <span className="text-2xl">🎉</span>
              </p>
            </div>
          )}
          <HeadingSection
            highlight="Sign In"
            title=""
            className="relative z-[4] !my-0 flex flex-col items-center justify-center"
            highlightClassName="text-center mx-auto mt-0 px-8"
          />
          <SignInForm lang={lang} />
          <div className="my-2 flex flex-col items-center justify-center gap-6">
            <Link
              href={`/${lang}/auth/actualizar-clave`}
              className="ml-2 text-center text-xs font-medium text-primary-500 underline"
            >
              Forgot Password
            </Link>
            <p className="text-center text-xs font-medium">
              Don&#39;t have an account?
              <Link
                href={`/${lang}/auth`}
                className="ml-2 text-primary-500 underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </article>
    </Card>
  );
}
