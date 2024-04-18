import { GoBack, ShareBtn, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { rooms } from "@/public/assets/data/roomsList";
import React from "react";
import { ImageGallery } from "./ImageGallery";

import { shareData } from "@/public/assets/data";
import { Features } from "./Features";

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
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <div className="bg-trasparent absolute right-[50vw] top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-[10vh] h-[500px] w-[500px] -translate-x-[80%] translate-y-[20%] rounded-full bg-primary-500 opacity-50 blur-[80px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#b7bdc8,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20vw] translate-y-[50vh] rounded-full bg-orange-300/60 opacity-50 blur-[80px]" />
      </div>
      <main className="relative z-[1] flex flex-col items-center">
        <Wrapper className="p-2 py-10">
          <section className="mx-auto flex w-full max-w-4xl">
            <div className="w-full">
              <div className="flex w-full justify-between">
                <h3 className="font-bold">Features</h3>
                <p className="rounded-md border border-neutral-800 bg-neutral-800/80 p-1 px-2 text-sm font-bold text-white">
                  2,350$ / 1 Day
                </p>
              </div>
              <Features />
            </div>
          </section>
          <section className="mx-auto w-full max-w-4xl rounded-md bg-white p-2">
            <div className="px-2">
              <div className="flex items-center justify-between">
                <h3 className="py-4 font-bold">Description</h3>
                <ShareBtn data={shareData} />
              </div>
              <div className="[&>p]:mb-2 [&>p]:text-sm">
                <p>
                  The Basic Room is a cozy space for relaxation and tranquility.
                  The room is equipped with a comfortable bed, a private
                  bathroom, and a balcony.
                </p>
                <p>
                  The room is ideal for couples or solo travelers looking for a
                  peaceful escape.
                </p>
              </div>
            </div>
            <div></div>
          </section>
        </Wrapper>
      </main>
    </PublicLayout>
  );
}
