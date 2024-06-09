
import { Locale } from "@/i18n-config";
import { Header, PublicLayout, Wrapper } from "../../ui/layout";
import { HeaderContent } from "@/app/ui/components/site/Home/Header/HeaderContent";
import { Testimonials, Discounts, CommonAreaAndEntertainment, Categories, FrequentlyAskedQuestions } from "@/app/ui/components/site/Home";
import { Amenities, Trending } from "@/app/ui/components/site/Room";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PublicLayout lang={lang}>
      <Wrapper className="p-0 pt-[57px] md:pt-[0]">
        <Header className="flex h-[calc(100vh-57px)] items-stretch justify-stretch p-2 md:h-[calc(70vh)] md:pt-[60px]">
          <HeaderContent lang={lang} />
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
