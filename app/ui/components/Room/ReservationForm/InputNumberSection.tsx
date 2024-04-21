import { InputNumber } from "antd";
import React from "react";

export function InputNumberSection({
  label,
  name,
  icon,
}: {
  label: string;
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <span>
      <small className="text-xs">{label}</small>
      <InputNumber
        name={name}
        variant="filled"
        placeholder="0"
        size="large"
        style={{ width: "100%" }}
        prefix={icon}
        required
        min={name === "childrenCount" ? 0 : 1}
      />
    </span>
  );
}
