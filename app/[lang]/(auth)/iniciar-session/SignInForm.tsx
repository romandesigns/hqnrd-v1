"use client";
/**
 * Renders a form for creating a new account.
 */
import { InputAnt } from "@/app/ui/common/Form";
import { Button } from "antd";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Country } from "react-phone-number-input";
import { signInAction } from "./actions/signIn";

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
  locale,
  className,
}: {
  lang: string;
  locale: Country;
  className?: string;
}) {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(signInAction, initialState);
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
