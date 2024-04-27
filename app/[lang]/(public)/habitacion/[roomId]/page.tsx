import { GoBack, ShareBtn, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { shareData } from "@/public/assets/data";
import { rooms } from "@/public/assets/data/roomsList";
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
} from "../../../../ui/components/Room";

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

  return (
    <PublicLayout lang={lang}>
      <Wrapper className="relative z-[1] p-0 pt-[57px] md:pt-[0]">
        <Header className="flex items-center justify-center p-2 md:pt-[60px]">
          <section className="h-full w-full">
            <SubHeader lang={lang} />
            <PageHeading
              unit={String(room.roomNumber)}
              title={room.category}
              metaDescription="Discover comfort in our Basic Room. An inviting space for relaxation
          and tranquility. Your ideal escape awaits!"
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
              <article className="grid grid-cols-[1fr] grid-rows-1  gap-2 lg:grid-cols-[20rem_1fr]">
                <Media />
              </article>
            </div>
            <Aside roomId={roomId} pricePerNight={room.pricePerNight} />
          </section>
        </Wrapper>
      </main>
      <Summary />
    </PublicLayout>
  );
}
