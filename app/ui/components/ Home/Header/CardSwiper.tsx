"use client";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Controller, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

export function CardSwiper({
  controlledSwiper,
  textControlledSwipper,
  homeBillboards,
  className = "",
}: {
  controlledSwiper: SwiperType | null;
  textControlledSwipper: SwiperType | null;
  homeBillboards: { src: string; title: string; description: string }[];
  className?: string;
}) {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay, Pagination, Controller]}
      className={twMerge(
        `relative !z-[3] aspect-[9/16] h-[60vh] w-[70vw] place-self-center shadow-lg md:max-h-[45vh] md:w-[22rem] md:place-content-start ${className}`,
      )}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      //@ts-ignore
      controller={{ control: [controlledSwiper, textControlledSwipper] }}
    >
      {homeBillboards.map((item, idx) => (
        <SwiperSlide className="relative overflow-hidden rounded-md" key={idx}>
          <Image
            src={item.src}
            alt="front building airview image"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
