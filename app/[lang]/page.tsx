import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { Navigation } from "../ui/components";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <Navigation lang={lang} />
      <main className="flex min-h-dvh flex-col items-center justify-between">
        <h1>Hello World</h1>
        <Link href={"/crear-cuenta"}>
          <Button type="primary">Button</Button>
        </Link>
      </main>
    </>
  );
}
