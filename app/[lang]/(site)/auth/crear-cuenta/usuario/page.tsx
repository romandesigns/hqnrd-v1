import { Content } from "@/app/ui/components/site/auth/user/Content";
import { Locale } from "@/i18n-config";
import { headers } from "next/headers";
import { Country } from "react-phone-number-input";

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  const headersList = headers();
  const locales = headersList.get("Accept-Language");
  const locale = locales?.split(",")[0].split("-")[1];
  return <Content lang={lang} locale={locale as Country} />;
}
