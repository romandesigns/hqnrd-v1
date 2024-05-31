import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { IoTicketOutline, RiHomeLine } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { Button } from 'antd';
import Link from "next/link";

export function TechnicalSupportNavigation({
   lang,
   pageTitle
  }: Readonly<{
   lang: Locale ;
   pageTitle: string;
  }>) {
  return (
    <Navigation lang={lang}>
    <div className="flex w-full items-center justify-between">
      <div className="font-bold">{pageTitle}</div>
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <Button icon={<RiHomeLine  />} className="!flex items-center">
            <Link href={`/${lang}/portal/soporte-technico`}>
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button icon={<IoTicketOutline />} className="!flex items-center">
            <Link href={`/${lang}/portal/soporte-technico/tickets`}>
              Tickets
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  </Navigation>
  )
}
