"use client";
import React from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { twMerge } from "tailwind-merge";

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
      className={`h-full w-full ${className}`}
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide
            key={slide.title}
            className="bg-gradient-to-b from-black/50"
          >
            <h3
              className={`h-full flex items-center justify-center font-bold text-white text-md`}
            >
              {slide.title}
            </h3>
            <p className="hidden md:block">{slide.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
