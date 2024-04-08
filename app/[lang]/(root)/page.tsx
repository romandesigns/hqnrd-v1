import {
  Amenities,
  CommonAreaAndEntertainment,
  Discounts,
  FrequentlyAskedQuestions,
  Testimonials,
  Trending,
  Categories,
} from "@/app/ui/components/ Home";
import { Locale } from "@/i18n-config";
import { HomeHeaderContent } from "../../ui/components/ Home/Header/HeaderComponent";
import { Header, PublicLayout, Wrapper } from "../../ui/layout";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PublicLayout lang={lang}>
      <Wrapper className="p-0 pt-[57px] md:pt-[0]">
        <Header className="flex h-[calc(100vh-57px)] items-stretch justify-stretch p-2 md:h-[calc(90vh)] md:pt-[60px]">
          <HomeHeaderContent lang={lang} />
        </Header>
      </Wrapper>
      <main className="relative flex flex-col items-center">
        <Testimonials />
        <Discounts />
        <Amenities />
        <CommonAreaAndEntertainment />
        <Categories />
        <Trending />
        <FrequentlyAskedQuestions />
      </main>
    </PublicLayout>
  );
}
