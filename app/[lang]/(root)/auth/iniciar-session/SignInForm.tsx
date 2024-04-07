"use client";
/**
 * Renders a form for creating a new account.
 */
import { InputAnt } from "@/app/ui/features/Form";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import { useFormStatus } from "react-dom";

type initialStateTypes = {
  path: string;
  message: string;
};

const initialState: initialStateTypes = {
  path: "",
  message: "",
};

export function SignInForm({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      <form autoComplete="off" className="w-full">
        <fieldset className="mb-4 space-y-4">
          <InputAnt name="email" placeholder="E-Mail" type="email" />
          <InputAnt name="password" placeholder="Password" type="password" />
          <div className="py-3 pb-2">
            <Button
              htmlType="submit"
              type="primary"
              block
              size="large"
              aria-disabled={pending}
            >
              Sign In
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
