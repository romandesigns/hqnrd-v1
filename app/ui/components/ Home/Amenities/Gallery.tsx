"use client";
import { Image } from "antd";

export function Gallery() {
  const { PreviewGroup } = Image;
  return (
    <PreviewGroup>
      <article className="h-[27rem]  lg:flex-[1]">
        <div className="grid h-full transform grid-cols-2 grid-rows-2 gap-2">
          <div className="overflow-hidden rounded-md [&>div]:h-full [&>div]:w-full">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              src="/assets/home/amenities/doble-room.jpg"
              alt="doble room image"
              className="rounded-md"
            />
          </div>
          <div className="overflow-hidden rounded-md [&>div]:h-full [&>div]:w-full">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              src="/assets/home/amenities/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
              alt="doble room image"
              className="rounded-md"
            />
          </div>
          <div className="row-span-full overflow-hidden rounded-md  [&>div]:h-full [&>div]:w-full">
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
