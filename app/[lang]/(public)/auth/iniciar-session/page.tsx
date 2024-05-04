import { Content } from "@/app/ui/components/auth/signIn/Content";
import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang },
  searchParams: { success },
}: Readonly<{ params: { lang: Locale }; searchParams: { success: string } }>) {
  return <Content lang={lang} success={success} />;
}
