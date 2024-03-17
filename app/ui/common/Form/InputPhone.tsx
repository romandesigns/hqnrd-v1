import PhoneInput, { Country } from "react-phone-number-input";
import { twMerge } from "tailwind-merge";

export function InputPhone({
  phoneNumber,
  phone,
  locale,
  placeholder,
  className,
}: {
  phoneNumber: (phone: string) => void;
  phone: string;
  locale: Country;
  placeholder: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `border-neutral-300 focus-within:ring-[.18rem] focus-within:border-primary-500 focus-within:ring-primary-500/10 inline-block w-full border rounded-md py-[.3rem] px-[.4rem] ${
          className ? className : ""
        }`
      )}
    >
      <PhoneInput
        rules={[{ required: true, message: "Please input your phone number!" }]}
        placeholder={placeholder}
        onChange={phoneNumber}
        value={phone}
        defaultCountry={locale as Country}
        name="tel"
        required
        className="focus:outline-none focus:ring-primary-100 flex [&_input]:focus:outline-none [&_input]:hover:outline-none [&_input]:outline-none [&_input]:placeholder:text-xs [&_input]:placeholder:font-normal [&_input]:placeholder:text-neutral-300"
      />
    </div>
  );
}
