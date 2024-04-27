import { Content } from "@/app/ui/components/auth/signIn/Content";
import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  return <Content lang={lang} />;
}
