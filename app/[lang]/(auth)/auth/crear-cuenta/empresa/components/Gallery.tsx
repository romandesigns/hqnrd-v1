"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { CarouselTypes } from "@/types";

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

export function AuthCarousel({ images }: { images: CarouselTypes[] }) {
  return (
    <Carousel
      effect="fade"
      autoplay
      speed={500}
      autoplaySpeed={3000}
      style={carouselStyle}
      className="[&_.slick-list]:h-full [&_.slick-track]:h-full"
    >
      {images.map((image, index) => (
        <div key={index} style={contentStyle}>
          <div className="absolute w-full flex items-center justify-center p-20 px-14 z-[2] bottom-0 bg-gradient-to-t from-black/60 flex-col">
            <h3 className="text-white text-[1.3rem] font-black text-center">
              {image.title}
            </h3>
            <p className="text-white text-[.94rem] text-center">
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
    </Carousel>
  );
}
