"use client";
import { useState } from "react";
// Import only used Swiper styles to reduce bundle size
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Locale } from "@/i18n-config";
import type { Swiper as SwiperType } from "swiper";
import {
  BackgroundSwiper,
  CardSwiper,
  GoogleRating,
  HeaderButtonsGroup,
  TextHeadingSwiper,
} from "./"; // Assuming index.js is properly set in your components folder
import homeBillboards from "@/public/assets/data/homeBillboard.json";

export const HomeHeaderContent = ({ lang }: { lang: Locale }) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <div className="w-full h-full rounded-md grid grid-cols-1 grid-rows-[1fr_auto_auto] md:grid-rows-1fr items-center justify-center overflow-hidden transition-background relative">
      <div className="z-3 h-full flex flex-col md:grid-cols-2 md:grid-rows-1  w-full max-w-6xl mx-auto overflow-hidden rounded-md md:z-[3]">
        {/* Description */}
        <div className="flex-[0.14]">
          <GoogleRating className="hidden md:block md:mb-4" />
          <TextHeadingSwiper
            className="relative !z-[3]"
            homeBillboards={homeBillboards.billboard}
            setTextControlledSwipper={setTextControlledSwipper}
          />
          <HeaderButtonsGroup
            className="hidden relative z-[3] md:flex pr-32"
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
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-filter backdrop-blur-md w-full h-full" />
      <BackgroundSwiper
        homeBillboards={homeBillboards.billboard}
        setControlledSwiper={setControlledSwiper}
      />
    </div>
  );
};
