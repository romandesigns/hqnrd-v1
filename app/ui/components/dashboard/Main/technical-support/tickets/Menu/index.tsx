import { Locale } from "@/i18n-config";
import { TicketForm } from "../Form";
import { ToggleModalBtn } from "./ToggleModalBtn";

export function Menu({ lang, title }: { lang: Locale; title?: string }) {
  return (
    <>
      <TicketForm />
      <div className="flex w-full items-center justify-end  p-4">
        {title && <div className="font-bold">{title}</div>}
        <ul className="flex items-center justify-end space-x-4">
          <li>
            <ToggleModalBtn />
          </li>
        </ul>
      </div>
    </>
  );
}
