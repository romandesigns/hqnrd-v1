import { GoBack, ShareBtn, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { shareData } from "@/public/assets/data";
import { rooms } from "@/public/assets/data/roomsList";
import { getUser } from "@/utils/supabase/queries";
import { notFound } from "next/navigation";
import {
  Amenities,
  Aside,
  BackgroundEffect,
  Description,
  Features,
  Heading,
  ImageGallery,
  Media,
  PageHeading,
  Summary,
  Trending,
} from "../../../../ui/components/site/Room";

const fetchRoom = async (roomId: string) => {
  const room = rooms.find((room) => room.roomNumber === Number(roomId));
  return room;
};

export default async function Page({
  params: { lang, roomId },
}: Readonly<{
  params: { lang: Locale; roomId: string };
}>) {
  const room = await fetchRoom(roomId);
  if (!room?.roomNumber) {
    return notFound();
  }

  //@ts-ignore
  const user: UserProfileTypes = await getUser();

  return (
    <PublicLayout lang={lang} user={user}>
      <Wrapper className="relative z-[1] p-0 pt-[57px] md:pt-[0]">
        <Header className="flex items-center justify-center p-2 md:pt-[60px]">
          <section className="h-full w-full">
            <SubHeader lang={lang} />
            <PageHeading
              unit={String(room.roomNumber)}
              title={room.category}
              metaDescription="Discover comfort in our Basic Room, offering an inviting space for relaxation and tranquility. Whether you're here for a quick getaway or an extended stay, your ideal escape awaits with all the amenities you need to unwind."
            />
            <ImageGallery />
          </section>
        </Header>
      </Wrapper>

      <BackgroundEffect />
      <main className="relative z-[1] flex flex-col items-center">
        <Wrapper className="mb-10 w-full">
          <div className="my-5 mb-8">
            <GoBack />
          </div>
          <section className="flex flex-col gap-3 lg:flex-row">
            <div className="flex-[2] rounded-md bg-white p-3 lg:p-5">
              <article className="pb-5">
                <Heading heading="Features" />
                <Features />
              </article>
              <article>
                <div className="flex items-center justify-between">
                  <Heading heading="Room Description" />
                  <ShareBtn data={shareData} />
                </div>
                <Description />
              </article>
              <article className="rounded-md border p-2">
                <Heading heading="Amenities Included" />
                <Amenities />
              </article>
              <article className="align-center grid justify-center md:grid-cols-[40%_1fr]">
                <Media />
              </article>
            </div>
            <Aside roomId={roomId} pricePerNight={room.pricePerNight} />
          </section>
        </Wrapper>
        <Wrapper>
          <Trending />
        </Wrapper>
      </main>
      <Summary />
    </PublicLayout>
  );
}
