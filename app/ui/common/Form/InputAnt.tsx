import React from "react";
import { Input, Form } from "antd";

export function InputAnt({
  name,
  placeholder,
  type,
}: {
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <Input placeholder={placeholder} name={name} type={type} size="large" />
  );
}
