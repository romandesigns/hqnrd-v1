import { GoBack, ShareBtn, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { rooms } from "@/public/assets/data/roomsList";
import React from "react";
import { ImageGallery } from "./ImageGallery";

import { Features } from "./Features";
import { BackgroundEffect } from "./BackgroundEffect";
import { Heading } from "../Heading";
import { Description } from "./Description";
import { shareData } from "@/public/assets/data";
import { Amenities } from "./Amenities";
import { Media } from "./Media";

export default function Page({
  params: { lang, roomId },
}: Readonly<{
  params: { lang: Locale; roomId: string };
}>) {
  const room = rooms.find((room) => room.roomNumber === Number(roomId));
  return (
    <PublicLayout lang={lang}>
      <Wrapper className="relative z-[1] p-0 pt-[57px] md:pt-[0]">
        <Header className="flex items-center justify-center p-2 md:pt-[60px]">
          <section className="h-full w-full">
            <SubHeader lang={lang} />
            <div className="py-10 text-center sm:pt-0">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl">
                  {room?.category}
                </h1>
                <div className="relative !m-0 mt-4 inline-flex items-center justify-center rounded-full bg-neutral-800 p-1 px-8 text-xs font-bold text-white">
                  <p className="font-semibold">Unit #{room?.roomNumber}</p>
                </div>
                <p className="text-xs lg:text-sm">
                  Discover comfort in our Basic Room. An inviting space for
                  relaxation and tranquility. Your ideal escape awaits!
                </p>
              </div>
            </div>
            <ImageGallery />
          </section>
        </Header>
      </Wrapper>
      <BackgroundEffect />
      <main className="relative z-[1] flex flex-col items-center">
        <Wrapper className="my-10 w-full">
          <section className="flex flex-col gap-3 md:flex-row">
            <div className="flex-[2] rounded-md bg-white p-5">
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
              <article className="flex">
                <Media />
              </article>
            </div>

            {/* */}

            <article className="flex-[1] rounded-md bg-white p-4">
              <Heading heading="Reservation Form" />
            </article>
          </section>
        </Wrapper>
      </main>
    </PublicLayout>
  );
}
