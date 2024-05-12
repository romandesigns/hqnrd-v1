"use client";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import type { Swiper as SwiperType } from "swiper";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      className={`h-full w-full md:my-4 md:h-auto ${className}`}
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide key={slide.title}>
            <h3
              className={`text-md flex h-full items-center  justify-center font-bold text-white md:mb-4 md:justify-start md:text-3xl`}
            >
              {slide.title}
            </h3>
            <p className="hidden text-white md:block md:text-sm">
              {ReactHtmlParser(slide.description)}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
