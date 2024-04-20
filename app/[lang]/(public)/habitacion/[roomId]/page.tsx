import { GoBack, ShareBtn, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { rooms } from "@/public/assets/data/roomsList";
import React from "react";
import { notFound } from "next/navigation";
import { shareData } from "@/public/assets/data";
import { Divider } from "antd";
import {
  Amenities,
  Media,
  Description,
  Heading,
  BackgroundEffect,
  Features,
  ImageGallery,
  PageHeading,
  ServicesAndAttractions,
} from "../../../../ui/components/Room";
import { ReservationForm } from "@/app/ui/components/Room/ReservationForm";
import { TbMapSearch } from "@/app/ui/icons";

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
              <article className="rounded-md border  p-2">
                <Heading heading="Amenities Included" />
                <Amenities />
              </article>
              <article className="grid grid-cols-[1fr] grid-rows-1  gap-2 lg:grid-cols-[20rem_1fr]">
                <Media />
              </article>
            </div>
            <article className="flex-[1] rounded-md bg-white p-4">
              <div className="grid grid-cols-2 border-b border-neutral-200">
                <Heading heading="Reservation Form" className="flex-1" />
                <p className="flex-1 justify-self-end rounded-tl-md rounded-tr-md border-none bg-neutral-800 p-2 px-4 font-bold text-white">
                  1,350$ / 1 Night
                </p>
              </div>
              <ReservationForm roomNumber={roomId} />
              {/* <Divider plain>
                <div className="flex items-center justify-center gap-2">
                  <span>Surrounding Services & Attractions</span>
                  <TbMapSearch size={15} />
                </div>
              </Divider>
              <ServicesAndAttractions /> */}
            </article>
          </section>
        </Wrapper>
      </main>
    </PublicLayout>
  );
}