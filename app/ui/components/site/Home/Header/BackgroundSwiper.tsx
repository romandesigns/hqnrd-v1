"use client";
import Image from "next/image";
import React from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/effect-fade";
import { Controller, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function BackgroundSwiper({
  homeBillboards,
  setControlledSwiper,
}: {
  homeBillboards: { src: string; title: string; description: string }[];
  setControlledSwiper: React.Dispatch<React.SetStateAction<SwiperType | null>>;
}) {
  return (
    <Swiper
      effect={"fade"}
      allowTouchMove={false}
      spaceBetween={0}
      slidesPerView={1}
      speed={1000}
      modules={[EffectFade, Controller]}
      onSwiper={setControlledSwiper}
      className="!absolute bottom-0 left-0 right-0 top-0 -z-[15] h-full w-full"
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <figure className="after:content[*] relative left-0 right-0 top-0 h-full w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:block after:h-full after:w-full after:backdrop-blur-lg after:backdrop-filter">
              <Image
                className="h-full w-full object-cover"
                src={slide.src}
                placeholder="blur"
                fill
                blurDataURL="/assets/home/billboard/hqnrd-air-view-building.jpg"
                alt={slide.title + " billoard image"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
