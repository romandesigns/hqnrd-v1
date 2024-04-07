"use client";
import React from "react";
import { AuthCarousel } from "./Gallery";
import { CarouselTypes } from "@/types";
import cn from "classnames";

export function SlideShow({
  images,
  className,
}: {
  images: CarouselTypes[];
  className: string;
}) {
  return (
    <article
      className={cn(
        `bg-white h-full rounded-lr-md rounded-lr-md relative rounded-tl-md rounded-bl-md overflow-hidden ${className}`
      )}
    >
      <AuthCarousel images={images} />
    </article>
  );
}
