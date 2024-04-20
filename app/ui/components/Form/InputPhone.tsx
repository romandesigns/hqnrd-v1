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
        `inline-block w-full rounded-md border border-neutral-300 px-[.4rem] py-[.3rem] transition-all focus-within:!border-primary-400 focus-within:!shadow-[0_0_0_3px_rgba(5,_145,_255,_0.15)] ${
          className ? className : ""
        }`,
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
        className="flex focus:outline-none focus:ring-primary-100 [&_input]:outline-none [&_input]:placeholder:text-xs [&_input]:placeholder:font-normal [&_input]:placeholder:text-neutral-300 [&_input]:hover:outline-none [&_input]:focus:outline-none [&_input]:sm:!py-[.2rem] [&_input]:lg:!py-[.03rem]"
      />
    </div>
  );
}
