import {
  Amenities,
  Categories,
  CommonAreaAndEntertainment,
  Discounts,
  FrequentlyAskedQuestions,
  Testimonials,
  Trending,
} from "@/app/ui/components/site/Home";
import { HeaderContent } from "@/app/ui/components/site/Home/Header/HeaderContent";
import { Locale } from "@/i18n-config";
import { UserProfileTypes } from "@/types/types";
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
  //@ts-ignore
  const user: UserProfileTypes = await getUserData();

  return (
    <PublicLayout lang={lang} user={user}>
      <Wrapper className="p-0 pt-[57px] md:pt-[0]">
        <Header className="flex h-[calc(100vh-57px)] items-stretch justify-stretch p-2 md:h-[70vh] md:pt-[60px]">
          <HeaderContent lang={lang} user={user} />
        </Header>
      </Wrapper>
      <main className="relative flex flex-col items-center">
        <Testimonials />
        <Discounts />
        <Amenities />
        <Categories lang={lang} />
        <CommonAreaAndEntertainment />
        <Trending />
        <FrequentlyAskedQuestions />
      </main>
    </PublicLayout>
  );
}
