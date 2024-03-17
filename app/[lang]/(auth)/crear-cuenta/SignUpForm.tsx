"use client";
/**
 * Renders a form for creating a new account.
 */
import React from "react";
import { Button, Input, Form, Radio, Flex, DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
import { signUp } from "../actions";
import Link from "next/link";
import { InputPhone } from "@/app/ui/common";
import { useFormState } from "react-dom";
import { Country } from "react-phone-number-input";
import { InputAnt } from "@/app/ui/common/Form";
import { Locale } from "@/i18n-config";

// Form Types
type FieldType = {
  name: string;
  lastName: string;
  gender?: string;
};

// Initial State Types
type InitialStateType = {
  message: string;
};

/**
 * Page component for creating a new account.
 * @returns JSX.Element representing the page.
 */

const initialState: InitialStateType = {
  message: "",
};

export function SignUpForm({
  lang,
  locale,
}: {
  lang: string;
  locale: Country;
}) {
  const [phone, setPhone] = React.useState<string>("");
  const [guestUserDate, setUserBirthDate] = React.useState<Date | null>(null);

  const phoneNumber = (phone: string) => {
    console.log(phone);
    setPhone(phone);
  };

  return (
    <section className="p-4 flex items-center justify-center">
      <form autoComplete="off" className="w-full">
        {/* 
        ========================================
        Profile Details 
        ========================================
        */}
        <InputAnt name="name" placeholder="Name" type="text" />
        <InputAnt name="lastName" placeholder="Last Name" type="text" />
        <DatePicker size="large" format="MM/DD/YYYY" />
        <Flex vertical gap="middle" align="center">
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
        {/* 
        ========================================
        Account Details 
        ========================================
        */}
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
          name="confirm_password"
          placeholder="Confirm Password"
          type="password"
        />
        <Button
          formAction={signUp}
          htmlType="submit"
          type="primary"
          block
          size="large"
        >
          Crear Cuenta
        </Button>
      </form>
    </section>
  );
}
