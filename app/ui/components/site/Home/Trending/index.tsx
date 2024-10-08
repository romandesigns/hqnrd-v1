"use client";

import { RoomCard } from "@/app/ui/features";
import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { SwiperComponent } from "@/app/ui/features/Swiper";
import { Section } from "@/app/ui/layout";
import { BsStars } from "react-icons/bs";

type TrendingListType = Array<
  { a: number } | { b: number } | { c: number } | { d: number } | { e: number }
>;
export function Trending({ trendingList }) {
  return (
    <Section className="my-2">
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[50vh] w-[50vw] -translate-x-[80%] translate-y-[100%] rounded-full bg-primary-500/50 opacity-50 blur-[80px]" />
      </div>
      <article className="h-full w-full rounded-md sm:p-4">
        <div className="relative flex flex-col items-center justify-center rounded-md p-2 sm:p-0 sm:px-4">
          <HeadingSection
            highlight="Trending Now!"
            title="Discover Our Most Popular Rooms!"
            Icon={BsStars}
          />
          <div className="w-full pl-0 md:my-10 md:pr-3">
            <SwiperComponent
              items={trendingList}
              // @ts-ignore
              RenderComponent={RoomCard}
              className="testimonails-swiper !pl-0 md:!pl-3"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
