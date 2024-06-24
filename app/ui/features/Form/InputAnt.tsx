import { Input } from "antd";

type InputAntProps = {
  name: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export function InputAnt({
  name,
  placeholder,
  type,
  value,
  onChange,
  required = true,
}: InputAntProps) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      size="large"
      autoComplete="off"
      className="placeholder:text-xs sm:!py-2 lg:!py-1"
      name={name}
      required={required}
      value={value} // Added to support controlled input
      onChange={onChange} // Added to handle changes
    />
  );
}
