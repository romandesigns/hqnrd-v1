import { Locale } from "@/i18n-config";
import { Button } from "antd";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Button type="primary">Primary</Button>
    </main>
  );
}
