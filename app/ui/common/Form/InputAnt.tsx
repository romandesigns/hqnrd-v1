import { Input } from "antd";

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
    <Input
      placeholder={placeholder}
      type={type}
      size="large"
      autoComplete="off"
      className="placeholder:text-xs"
      name={name}
      required
    />
  );
}
