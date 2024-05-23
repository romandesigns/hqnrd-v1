import { Locale } from "@/i18n-config";
import Link from "next/link";

export function Menu({ lang, title }: { lang: Locale; title?: string }) {
  return (
    <div className="flex w-full items-center justify-center border-b p-4">
      {title && <div className="font-bold">{title}</div>}
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <Link href={`/${lang}/portal/soporte-technico/tickets`}>Tickets</Link>
        </li>
        {/* <li>
          <Link href={`/${lang}/portal/soporte-technico/tickets/nuevo`}>
            New Issue
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
