"use client";

import { RoomCard } from "@/app/ui/common/RoomCard";
import { HeadingSection } from "@/app/ui/common/SectionHeading";
import { SwiperComponent } from "@/app/ui/common/Swiper";
import { Section } from "@/app/ui/layout";

type TrendingListType = Array<
  { a: number } | { b: number } | { c: number } | { d: number } | { e: number }
>;
export default function Trendings() {
  const trendingList: TrendingListType = [
    { a: 1 },
    { b: 1 },
    { c: 1 },
    { d: 1 },
    { e: 1 },
  ];
  return (
    <Section className="w-full rounded-md my-2">
      <article className="w-full h-full rounded-md sm:p-4 sm:border sm:border">
        <div className="p-2 sm:p-0 rounded-md sm:px-4 relative flex flex-col justify-center items-center">
          <HeadingSection
            highlight="Trending Now!"
            title="Discover Our Most Popular Rooms!"
            accent="neutral"
          />
          <div className="w-full md:my-10 pl-0 md:pr-3">
            <SwiperComponent
              items={trendingList}
              RenderComponent={RoomCard}
              className="testimonails-swiper !pl-0 md:!pl-3"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
