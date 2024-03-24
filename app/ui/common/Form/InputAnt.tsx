import { Input } from "antd";

export function InputAnt({
  name,
  placeholder,
  type,
  required = true,
}: {
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      size="large"
      autoComplete="off"
      className="placeholder:text-xs sm:!py-2 lg:!py-1"
      name={name}
      required={required}
    />
  );
}
