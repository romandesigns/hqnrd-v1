import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">/About</Link>
      <h1>Hello World</h1>
      <Link href={"/login"} passHref>
        <Button type="primary">Button</Button>
      </Link>
    </main>
  );
}
