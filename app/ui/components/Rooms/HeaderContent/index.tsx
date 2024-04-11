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

export function HeaderContent({ lang }: { lang: Locale }) {
  return (
    <article className="w-full">
      <SubHeader lang={lang} />
      <div className="relative flex h-full overflow-hidden rounded-md px-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="z-[2] flex h-full w-full flex-col items-center justify-center space-y-4">
          <HeadingSection
            title="The quality and service you deserve!"
            descriptionClassName="text-sm font-bold md:text-xl text-white"
            highlightClassName="text-xs bg-white/50 border border-white mt-0"
            highlight="Your peace of mind is our priority"
            className="mx-auto !mb-0 !mt-0  flex flex-col items-center justify-center p-0 lg:my-0"
          />
          <span
            className="inline-block rounded-lg bg-black/5 p-2"
            style={{ width: "100%", maxWidth: "25rem" }}
          >
            <CategoryMenu lang={lang} />
          </span>
        </div>

        <Blurdrop blurLevel="md" />
        <Backdrop backgroundImg="bg-[url('/assets/home/billboard/hqnrd-air-view-building.jpg')]" />
      </div>
    </article>
  );
}
