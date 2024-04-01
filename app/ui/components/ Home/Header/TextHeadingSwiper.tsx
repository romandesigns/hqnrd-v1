"use client";
import React from "react";
import type { Swiper as SwiperType } from "swiper";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactHtmlParser from "react-html-parser";

export function TextHeadingSwiper({
  setTextControlledSwipper,
  homeBillboards,
  className,
}: {
  setTextControlledSwipper: React.Dispatch<
    React.SetStateAction<SwiperType | null>
  >;
  className?: string;
  homeBillboards: { src: string; title: string; description: string }[];
}) {
  return (
    <Swiper
      modules={[Controller]}
      allowTouchMove={false}
      spaceBetween={0}
      slidesPerView={1}
      speed={2000}
      onSwiper={setTextControlledSwipper}
      className={`h-full w-full md:h-auto md:my-4 ${className}`}
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide
            key={slide.title}
            className="bg-gradient-to-b from-black/50 md:bg-none"
          >
            <h3
              className={`h-full flex items-center md:justify-start  justify-center font-bold text-white text-md md:text-3xl`}
            >
              {slide.title}
            </h3>
            <p className="hidden md:block text-white md:text-sm">
              {ReactHtmlParser(slide.description)}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
