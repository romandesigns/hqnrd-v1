"use client";
import React from "react";
import { Image } from "antd";

export function Gallery() {
  const { PreviewGroup } = Image;
  return (
    <PreviewGroup>
      <article className="lg:flex-[1]  h-[27rem]">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full transform">
          <div className="rounded-md overflow-hidden [&>div]:h-full [&>div]:w-full">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              src="/assets/home/amenities/doble-room.jpg"
              alt="doble room image"
              className="rounded-md"
            />
          </div>
          <div className="rounded-md overflow-hidden [&>div]:h-full [&>div]:w-full">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              src="/assets/home/amenities/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
              alt="doble room image"
              className="rounded-md"
            />
          </div>
          <div className="rounded-md overflow-hidden row-span-full  [&>div]:h-full [&>div]:w-full">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              src="/assets/home/amenities/hqnrd-air-view-building.jpg"
              alt="doble room image"
              className="rounded-md"
            />
          </div>
        </div>
      </article>
    </PreviewGroup>
  );
}
