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
        `rounded-lr-md rounded-lr-md relative h-full overflow-hidden rounded-bl-md rounded-tl-md bg-white ${className}`,
      )}
    >
      <AuthCarousel images={images} />
    </article>
  );
}
