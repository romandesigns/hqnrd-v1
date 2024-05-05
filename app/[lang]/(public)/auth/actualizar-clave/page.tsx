import { Card } from "@/app/ui/components/auth/Card";
import { ErrorMessage, HeadingSection } from "@/app/ui/features";
import { IoIosWarning } from "@/app/ui/icons";
import {
  confirmPasswordChangeAction,
  passwordChangeAction,
} from "@/utils/actions";
import { format } from "@/utils/formatter/format";
import { Button, Input } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default async function Page({
  params: { lang },
  searchParams: { code, success, email, error, error_description, formType },
}: {
  params: { lang: string };
  searchParams: {
    code: string;
    success: string;
    email: string;
    error: string;
    error_description: string;
    formType: string;
  };
}) {
  return (
    <Card lang={lang}>
      <article
        className={twMerge(
          "align-center grid w-full grid-cols-1 grid-rows-1 justify-center gap-3 rounded-md border p-2 pb-10 text-center",
          classNames({
            "grid-cols-1 grid-rows-[auto] gap-0 pb-0":
              success || email || error_description || error,
          }),
        )}
      >
        {error && error_description && (
          <div className="flex w-full flex-col items-center justify-center self-start pl-2 pt-2 lg:pb-8">
            <HeadingSection
              Icon={IoIosWarning}
              highlightClassName="bg-orange-500/20 text-orange-500 [&_span]:relative [&_span]:top-auto [&_span]:right-auto [&_span]:order-1 [&_p]:order-2 gap-1 px-4"
              highlight={format.firstLetterToUpperCase(
                error.replace(/_/g, " "),
              )}
              title=""
              className="relative z-[4] my-1 sm:!my-0"
            />
            <p className="text-sm font-semibold">{error_description}</p>
            <Button className="mt-10">
              <Link href={`/${lang}/auth/actualizar-clave`}>Start over</Link>
            </Button>
          </div>
        )}

        <div
          className={twMerge(
            "flex flex-col items-center justify-center py-6 pt-9 lg:space-y-6",
            classNames({
              "sm:pb-0": success || email || error_description,
              "py-0 pt-0": success && email && !error_description && !error,
            }),
          )}
        >
          {error && (
            <ErrorMessage
              lang={lang}
              errorMessage={error}
              path="auth/actualizar-clave"
            />
          )}

          {!success && !code && (
            <HeadingSection
              highlight={
                !success && error
                  ? "Enter registered email"
                  : "Enter new password"
              }
              title=""
              className="relative z-[4] my-1 sm:!my-0"
            />
          )}

          {code && (
            <HeadingSection
              highlight={"Enter new password"}
              title=""
              className="relative z-[4] my-1 sm:!my-0"
            />
          )}

          {!code && !success && !error_description && (
            <form autoComplete="off" className="space-y-5">
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                size="large"
                required
              />
              <Input type="text" name="lang" value={lang} className="!hidden" />
              <Button
                htmlType="submit"
                type="primary"
                block
                size="large"
                formAction={confirmPasswordChangeAction}
              >
                Confirm
              </Button>
            </form>
          )}

          {success && email && !error && (
            <div className="flex flex-col items-center justify-center space-y-5 px-2 py-10">
              <HeadingSection
                highlight="Check your email"
                title={`The link to reset your password was set to ${email}`}
                className="relative z-[4] my-1 sm:!my-0"
                descriptionClassName="text-sm font-normal no-underline font-medium"
                highlightClassName="mt-0"
              />
              <p className="text-xs text-gray-500">
                If you don&apos;t see the email, check other places it might be,
                like your junk, spam, social, or other folders.
              </p>
            </div>
          )}

          {code && !error && (
            <form autoComplete="off" className="space-y-5 px-20">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                size="large"
                required
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                size="large"
                required
              />
              <Input type="text" name="lang" value={lang} className="!hidden" />
              <input type="text" name="code" value={code} className="hidden" />
              <Button
                htmlType="submit"
                type="primary"
                block
                size="large"
                formAction={passwordChangeAction}
              >
                Update Password
              </Button>
            </form>
          )}
        </div>
      </article>
    </Card>
  );
}
