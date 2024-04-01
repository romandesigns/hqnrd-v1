import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { HomeHeaderContent } from "../ui/components/ Home/Header/HeaderComponent";
import { Header, PublicLayout } from "../ui/layout";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PublicLayout lang={lang}>
      <Header className="h-[calc(100vh-57px)] md:h-[calc(80vh)] md:pt-24 md:w-full md:max-w-[80.2rem] md:m-auto flex items-stretch justify-stretch p-2 header-height mt-[57px]">
        <HomeHeaderContent lang={lang} />
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
