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
import { SubHeader } from "../../SubHeader";
import {
  BackgroundSwiper,
  CardSwiper,
  GoogleRating,
  HeaderButtonsGroup,
  TextHeadingSwiper,
} from "./"; // Assuming index.js is properly set in your components folder
export const HomeHeaderContent = ({ lang }: { lang: Locale }) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <section className="md:flex md:flex-col md:items-start md:justify-center w-full space-y-4">
      <SubHeader lang={lang} />
      <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden relative md:p-4">
        <div className="h-full md:h-auto flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 w-full max-w-6xl mx-auto overflow-hidden rounded-md z-[3]">
          {/* Description */}
          <div className="flex-[0.14] md:self-center">
            <GoogleRating className="hidden md:inline-block md:mb-4" />

            <TextHeadingSwiper
              className="relative !z-[3]"
              homeBillboards={homeBillboards.billboard}
              setTextControlledSwipper={setTextControlledSwipper}
            />
            <HeaderButtonsGroup
              className="hidden relative z-[3] md:flex pr-32 md:p-0 md:py-4"
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
            className="relative flex-[0.11] z-[3] md:hidden"
            lang={lang}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/15 backdrop-filter backdrop-blur-md w-full h-full z-[2]" />
        <BackgroundSwiper
          homeBillboards={homeBillboards.billboard}
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </section>
  );
};
