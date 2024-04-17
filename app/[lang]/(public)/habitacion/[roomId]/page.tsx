import { GoBack, SubHeader } from "@/app/ui/features";
import { Header, PublicLayout, Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { rooms } from "@/public/assets/data/roomsList";
import React from "react";

export default function Page({
  params: { lang, roomId },
}: Readonly<{
  params: { lang: Locale; roomId: string };
}>) {
  const room = rooms.find((room) => room.roomNumber === Number(roomId));
  return (
    <PublicLayout lang={lang}>
      <Wrapper className="p-0 pt-[57px] md:pt-[0]">
        <Header className="relative z-[1] flex h-[calc(100vh-60vh)] items-stretch justify-stretch p-2 md:h-[calc(100vh-30vh)] md:pt-[60px]">
          <section className="h-full w-full">
            <SubHeader lang={lang} />
            <div className="py-10 text-center sm:pt-0">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
                  {room?.category}
                </h1>
                <div className="relative !m-0 mt-4 inline-flex items-center justify-center rounded-full bg-neutral-800 p-1 px-8 text-xs font-bold text-white">
                  <p className="font-semibold">Unit #{room?.roomNumber}</p>
                </div>
              </div>
            </div>
            <article className="grid h-full w-full grid-cols-4 grid-rows-2 gap-1 rounded-md bg-white/20 p-2">
              <div className="col-start-1 col-end-3 h-full w-full rounded-tl-md bg-red-500" />
              <div className="h-full w-full bg-purple-500" />
              <div className="col-start-4 col-end-5 row-start-1 row-end-3 h-full w-full rounded-br-md rounded-tr-md bg-green-500" />
              <div className="h-full w-full rounded-bl-md bg-blue-500" />
              <div className="col-start-2 col-end-4 h-full w-full bg-orange-500" />
            </article>
          </section>
        </Header>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
        <div className="bg-trasparent absolute right-[50vw] top-0 -z-10 h-full w-full">
          <div className="absolute bottom-auto left-auto right-0 top-[10vh] h-[500px] w-[500px] -translate-x-[80%] translate-y-[20%] rounded-full bg-primary-500 opacity-50 blur-[80px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
          <div className="absolute h-full w-full bg-[radial-gradient(#b7bdc8,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>
        </div>
      </Wrapper>
      <main className="flex flex-col items-center py-36">
        <p>Hello world</p>
      </main>
    </PublicLayout>
  );
}
