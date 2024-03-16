"use client";
/**
 * Renders a form for creating a new account.
 */
import React from "react";
import { Button, Input, Form } from "antd";
import { signUp } from "../actions";
import Link from "next/link";

// Form Types
type FieldType = {
  name: string;
  lastName: string;
  gender?: string;
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
        <Form.Item>
          <Input />
        </Form.Item>
        <Form.Item>
          <Input />
        </Form.Item>
        <Button formAction={signUp} htmlType="submit">
          Crear Cuenta
        </Button>
        <Link href={"/"}>Home</Link>
      </Form>
    </section>
  );
}
