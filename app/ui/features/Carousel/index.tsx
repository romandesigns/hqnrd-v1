"use client";
import { CarouselTypes } from "@/types/types";
import { Carousel as CarouselComponent } from "antd";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const contentStyle: React.CSSProperties = {
  height: "32rem",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  position: "relative",
};

const carouselStyle: React.CSSProperties = {
  position: "absolute",
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
  borderRadius: ".25rem",
  overflow: "hidden",
};

export function Carousel({
  images,
  className,
}: {
  images: CarouselTypes[];
  className: string;
}) {
  return (
    <article
      className={twMerge(
        `rounded-lr-md rounded-lr-md relative h-full overflow-hidden rounded-bl-md rounded-tl-md bg-white ${className}`,
      )}
    >
      <CarouselComponent
        effect="fade"
        autoplay
        speed={500}
        autoplaySpeed={3000}
        style={carouselStyle}
        className="[&_.slick-list]:h-full [&_.slick-track]:h-full"
      >
        {images.map((image, index) => (
          <div key={index} style={contentStyle}>
            <div className="absolute bottom-0 z-[2] flex w-full flex-col items-center justify-center bg-gradient-to-t from-black/60 p-20 px-14">
              <h3 className="text-center text-[1.3rem] font-black text-white">
                {image.title}
              </h3>
              <p className="text-center text-[.94rem] text-white">
                {image.description}
              </p>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </CarouselComponent>
    </article>
  );
}
