import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { Header, PublicLayout } from "../ui/layout";
import { HomeHeader } from "../ui/components/ Home/Header/HeaderComponent";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PublicLayout lang={lang}>
      <Header className="h-[calc(100vh-57px)] flex items-stretch justify-stretch p-2 header-height mt-[57px]">
        <HomeHeader />
      </Header>
      <main className="flex flex-col items-center">
        <h1>Hello World</h1>
        <Link href={"/crear-cuenta"}>
          <Button type="primary">Button</Button>
        </Link>
      </main>
    </PublicLayout>
  );
}
