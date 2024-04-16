import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang, roomId },
}: {
  params: { lang: Locale; roomId: string };
}) {
  console.table({ lang, roomId });
  return <div>{`Room # ${roomId}`}</div>;
}
