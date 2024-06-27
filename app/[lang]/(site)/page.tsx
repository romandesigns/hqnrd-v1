import {
  Categories,
  CommonAreaAndEntertainment,
  Discounts,
  FrequentlyAskedQuestions,
  Testimonials,
} from "@/app/ui/components/site/Home";
import { HeaderContent } from "@/app/ui/components/site/Home/Header/HeaderContent";
import { Amenities, Trending } from "@/app/ui/components/site/Room";
import { Locale } from "@/i18n-config";
import { getUser } from "@/utils/supabase/queries";
import { User } from "@supabase/supabase-js";
import { Header, PublicLayout, Wrapper } from "../../ui/layout";

const getUserData = async () => {
  const userData: User | null = await getUser();
  return {
    authenticated: userData?.role,
    id: userData?.user_metadata.sub,
    ...userData?.user_metadata,
  };
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const user = await getUserData();

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
