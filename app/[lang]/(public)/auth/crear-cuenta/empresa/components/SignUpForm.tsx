"use client";
/**
 * Renders a form for creating a new account.
 */

import { InputAnt, InputPhone } from "@/app/ui/components/Form";
import { Alert, Button } from "antd";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Country } from "react-phone-number-input";
import { createUserAction } from "../actions/signUp";

type initialStateTypes = {
  path: string;
  message: string;
};

const initialState: initialStateTypes = {
  path: "",
  message: "",
};

export function SignUpForm({
  lang,
  locale,
  className,
}: {
  lang: string;
  locale: Country;
  className?: string;
}) {
  const [phone, setPhone] = React.useState<string>("");
  const [state, formAction] = useFormState(createUserAction, initialState);
  const phoneNumber = (phone: string) => {
    setPhone(phone);
  };

  const { pending } = useFormStatus();
  return (
    <>
      {state?.path && state?.message && (
        <Alert
          message={`Invalid '${state?.path}'`}
          description={`Property ${state?.message}`}
          type="error"
          showIcon
          closable
          className="!my-2 w-full"
        />
      )}

      <form autoComplete="off" className="w-full" action={formAction}>
        <fieldset className="mb-4 space-y-4">
          <InputAnt name="name" placeholder="Nombre de Empresa" type="text" />
          <InputAnt
            name="lastName"
            placeholder="Nombre Registrado de Empresa"
            type="text"
          />
          <InputAnt
            name="rnc"
            placeholder="RNC (Optional)"
            type="text"
            required={false}
          />
          <InputAnt
            name="address"
            placeholder="Dirección de Empresa"
            type="text"
          />
        </fieldset>
        <input
          type="text"
          name="accountType"
          value="company"
          className="hidden"
        />
        <fieldset className="mb-4 space-y-4">
          <InputAnt name="email" placeholder="E-Mail" type="email" />
          <InputPhone
            phone={phone}
            phoneNumber={phoneNumber}
            locale={locale}
            placeholder="Phone Number"
            className="placeholder:text-md bg-white"
          />
          <InputAnt name="password" placeholder="Password" type="password" />
          <InputAnt
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <div className="py-3 pb-2">
            <Button
              htmlType="submit"
              type="primary"
              className="!bg-neutral-800"
              block
              size="large"
              aria-disabled={pending}
            >
              Crear Cuenta
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
