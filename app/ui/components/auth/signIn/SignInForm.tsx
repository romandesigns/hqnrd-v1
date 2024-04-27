"use client";
import { InputAnt } from "@/app/ui/components/Form";
/**
 * Renders a form for creating a new account.
 */
import { Locale } from "@/i18n-config";
import { signInUserAction } from "@/utils/actions";
import { Button, message } from "antd";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // @ts-ignore
  const [state, formAction] = useFormState(signInUserAction, initialState);
  const [messageApi, contextHolder] = message.useMessage();
  const { pending } = useFormStatus();
  const params = useSearchParams();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form autoComplete="off" className="w-full" action={formAction}>
        <fieldset className="mb-4 space-y-4">
          <InputAnt
            name="email"
            placeholder="E-Mail"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputAnt
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input name="lang" type="hidden" value={lang} />
          <div className="py-3 pb-2">
            <Button
              htmlType="submit"
              type="primary"
              block
              size="large"
              disabled={pending}
            >
              Sign In
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
