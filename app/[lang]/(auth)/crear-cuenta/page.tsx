"use client";
/**
 * Renders a form for creating a new account.
 */
import React from "react";
import { Button, Input, Form } from "antd";
import { signUp } from "../actions";

// Form Types
type FieldType = {
  name: string;
  lastName: string;
  sex?: string;
};

/**
 * Page component for creating a new account.
 * @returns JSX.Element representing the page.
 */

export default function Page() {
  return (
    <section className="p-2">
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
        <Input
          size="middle"
          id="lastName"
          name="lastName"
          type="text"
          required
        />
        <Input size="middle" id="email" name="email" type="email" required />
        <Button formAction={signUp} htmlType="submit">
          Crear Cuenta
        </Button>
      </Form>
    </section>
  );
}
