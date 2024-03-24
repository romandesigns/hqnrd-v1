"use client";
/**
 * Renders a form for creating a new account.
 */
import { InputPhone } from "@/app/ui/common";
import { InputAnt } from "@/app/ui/common/Form";
import { Alert, Button, DatePicker, Flex, Radio } from "antd";
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
          className="w-full !my-2"
        />
      )}

      <form autoComplete="off" className="w-full" action={formAction}>
        <fieldset className="mb-4 space-y-4">
          <InputAnt name="name" placeholder="Name" type="text" />
          <InputAnt name="lastName" placeholder="Last Name" type="text" />
          <DatePicker
            variant="outlined"
            className="w-full !py-[.38rem] focus-within:!border-primary-400 focus-within:!shadow-[0_0_0_3px_rgba(5,_145,_255,_0.15)] [&_input]:sm:!py-[.2rem] [&_input]:lg:!py-[.02rem]"
            size="middle"
            format="MM/DD/YYYY"
            allowClear={true}
            needConfirm={true}
            name="dateOfBirth"
            style={{ width: "100%" }}
            placeholder="Date of Birth"
            required
          />
          <Flex vertical gap="middle" align="center">
            <span className="text-xs font-semibold">Select Gender</span>
            <Radio.Group buttonStyle="solid" name="gender">
              <Radio.Button name="gender" value="male">
                Man
              </Radio.Button>
              <Radio.Button name="gender" value="female">
                Woman
              </Radio.Button>
              <Radio.Button name="gender" value="other">
                Other
              </Radio.Button>
            </Radio.Group>
          </Flex>
        </fieldset>
        <input type="text" name="accountType" value="user" className="hidden" />
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
