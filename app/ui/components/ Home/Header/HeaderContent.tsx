"use client";
import { useState } from "react";
// Import only used Swiper styles to reduce bundle size
import { Locale } from "@/i18n-config";
import homeBillboards from "@/public/assets/data/homeBillboard.json";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BackgroundSwiper,
  CardSwiper,
  GoogleRating,
  HeaderButtonsGroup,
  TextHeadingSwiper,
} from "."; // Assuming index.js is properly set in your components folder
import { SubHeader } from "@/app/ui/features";
export const HeaderContent = ({ lang }: { lang: Locale }) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null,
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <section className="w-full md:flex md:flex-col md:items-start md:justify-center">
      <SubHeader lang={lang} />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md md:p-4">
        <div className="z-[3] mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-md md:grid md:h-auto md:grid-cols-2 md:grid-rows-1">
          {/* Description */}
          <div className="flex-[0.14] md:self-center">
            <GoogleRating className="hidden md:mb-4 md:inline-block" />
            <TextHeadingSwiper
              className="relative !z-[3]"
              homeBillboards={homeBillboards.billboard}
              setTextControlledSwipper={setTextControlledSwipper}
            />
            <HeaderButtonsGroup
              className="relative z-[3] hidden pr-32 md:flex md:p-0 md:py-4"
              lang={lang}
            />
          </div>
          {/* Card Swipper */}
          <CardSwiper
            controlledSwiper={controlledSwiper}
            textControlledSwipper={textControlledSwipper}
            homeBillboards={homeBillboards.billboard}
            className="flex-1"
          />
          {/* Rating mobile */}
          <GoogleRating className="flex-[0.11] md:hidden" />
          {/* Buttons Group mobile */}
          <HeaderButtonsGroup
            className="relative z-[3] flex-[0.11] md:hidden"
            lang={lang}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-black/15 backdrop-blur-md backdrop-filter" />
        <BackgroundSwiper
          homeBillboards={homeBillboards.billboard}
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </section>
  );
};
