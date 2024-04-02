import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { HomeHeaderContent } from "../ui/components/ Home/Header/HeaderComponent";
import { Header, PublicLayout, Wrapper } from "../ui/layout";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PublicLayout lang={lang}>
      <Wrapper className="p-0 pt-[57px] md:pt-[0]">
        <Header className="h-[calc(100vh-57px)] md:h-[calc(90vh)] md:pt-[60px] flex items-stretch justify-stretch p-2">
          <HomeHeaderContent lang={lang} />
        </Header>
      </Wrapper>
      <main className="flex flex-col items-center">
        <h1>Hello World</h1>
        <Link href={"/crear-cuenta"}>
          <Button type="primary">Button</Button>
        </Link>
      </main>
    </PublicLayout>
  );
}
