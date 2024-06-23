"use client";
/**
 * Renders a form for creating a new account.
 */

import { InputAnt, InputPhone } from "@/app/ui/features/Form";
import { createUserAction } from "@/utils/actions";
import { Button, DatePicker, Flex, Input, Radio, message } from "antd";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Country } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";

type initialStateTypes = {
  path: string;
  errors: string;
};

const initialState: initialStateTypes = {
  path: "",
  errors: "",
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
  const [phone, setPhone] = React.useState<E164Number>();
  const [state, formAction] = useFormState(createUserAction, initialState);
  const [messageApi, contextHolder] = message.useMessage();
  const phoneNumber = (value?: E164Number | undefined) => {
    setPhone(value);
  };

  const { pending } = useFormStatus();

  const error = () => {
    messageApi.open({
      type: "warning",
      content: state?.errors,
    });
  };

  return (
    <>
      {state?.errors && error()}
      {contextHolder}

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
        </fieldset>
        <input type="text" name="role" value="company" className="hidden" />
        <fieldset className="my-8 space-y-4">
          <InputAnt
            name="address"
            placeholder="Dirección de Empresa"
            type="text"
          />
          <InputAnt name="email" placeholder="E-Mail" type="email" />
          <InputPhone
            phone={phone}
            phoneNumber={phoneNumber}
            locale={locale}
            placeholder="Phone Number"
            className="placeholder:text-md bg-white"
          />
        </fieldset>
        <fieldset className="my-8 space-y-4">
          <InputAnt name="password" placeholder="Password" type="password" />
          <InputAnt
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
        </fieldset>
        <div className="py-3 pb-2">
          <Button
            htmlType="submit"
            type="primary"
            className="!bg-neutral-800"
            block
            size="large"
            aria-disabled={pending}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
}
