import Link from "next/link";
import { Locale } from "@/i18n-config";
import { Button } from "antd";

export function TicketNavMenu({ lang }: { lang: Locale }) {
  return (
    <ul className="flex items-center justify-start gap-2">
      <Button size="large" type="link">
        <Link className="underline" href={`/${lang}/portal/soporte`}>
          Home
        </Link>
      </Button>
      <Button size="large" type="link">
        <Link className="underline" href={`/${lang}/portal/soporte/tickets`}>
          Tickets
        </Link>
      </Button>
    </ul>
  );
}
