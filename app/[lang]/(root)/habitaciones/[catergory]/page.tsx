import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang, catergory },
}: {
  params: { lang: Locale; catergory: string };
}) {
  return <>{catergory}</>;
}
