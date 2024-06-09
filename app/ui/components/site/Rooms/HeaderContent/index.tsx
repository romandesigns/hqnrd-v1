import {
  SubHeader,
  HeadingSection,
  Backdrop,
  Blurdrop,
} from "@/app/ui/features";
import { Section } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { CategoryMenu } from "./CategoryMenu";
import Image from "next/image";

export function HeaderContent({
  lang,
  billboards,
}: {
  lang: Locale;
  billboards: string[];
}) {
  const randomImage = billboards[Math.floor(Math.random() * billboards.length)];

  return (
    <article className="w-full ">
      <SubHeader lang={lang} />
      <div className="relative flex h-full rounded-md px-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="z-[3] flex h-full w-full flex-col items-center justify-center space-y-4">
          <span className="inline-block w-full max-w-2xl rounded-lg bg-black/5 p-3 shadow-lg  backdrop-blur-lg backdrop-filter sm:p-10">
            <CategoryMenu lang={lang} />
          </span>
        </div>

        <Blurdrop blurLevel="md" />
        <Image
          src={randomImage}
          height={1080}
          width={1920}
          alt="hero Image"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full rounded-md object-cover"
        />
        {/* <Backdrop backgroundImg="bg-[url('/assets/home/billboard/hqnrd-air-view-building.jpg')]" /> */}
      </div>
    </article>
  );
}
