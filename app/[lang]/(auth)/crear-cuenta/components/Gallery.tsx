"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

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

const images = [
  {
    src: "/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp",
    alt: "Photograph behind plant on the table during sunset at the Hotel Quinto Nivel RD",
  },
  {
    src: "/assets/images/auth/sitting-area-hallway-hqnrd.webp",
    alt: "Photograph behind plant on the table during sunset at the Hotel Quinto Nivel RD",
  },
];

export function AuthCarousel() {
  return (
    <Carousel
      effect="fade"
      autoplay
      style={carouselStyle}
      className="[&_.slick-list]:h-full [&_.slick-track]:h-full"
    >
      {images.map((image, index) => (
        <div key={index} style={contentStyle}>
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
