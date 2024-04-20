"use client";
import { Image } from "antd";

export function ImageGallery() {
  const { PreviewGroup } = Image;
  return (
    <PreviewGroup>
      <article className="grid h-full max-h-[40rem] w-full grid-cols-4 grid-rows-2 gap-1 rounded-md bg-white/50 p-2 sm:gap-3">
        <div className="col-start-1 col-end-3 h-full w-full overflow-hidden rounded-tl-md bg-red-500 [&>div]:h-full [&>div]:w-full">
          <Image
            src="/assets/home/billboard/hqnrd-basic-room.jpg"
            alt="placeholder"
            className="z-[2] h-full w-full object-cover"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="h-full w-full overflow-hidden bg-purple-500 [&>div]:h-full [&>div]:w-full">
          <Image
            src="/assets/home/categories/double-bed.jpg"
            alt="placeholder"
            className="z-[2] h-full w-full object-cover"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-3 h-full w-full overflow-hidden rounded-br-md rounded-tr-md bg-green-500 [&>div]:h-full [&>div]:w-full">
          <Image
            src="/assets/home/categories/familiar.jpg"
            alt="placeholder"
            className="z-[2] h-full w-full object-cover"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="h-full w-full overflow-hidden rounded-bl-md bg-blue-500 [&>div]:h-full [&>div]:w-full">
          <Image
            src="/assets/home/categories/double-room.jpg"
            alt="placeholder"
            className="z-[2] h-full w-full object-cover"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-start-2 col-end-4 h-full w-full overflow-hidden bg-orange-500 [&>div]:h-full [&>div]:w-full">
          <Image
            src="/assets/home/categories/double-room.jpg"
            alt="placeholder"
            className="z-[2] h-full w-full object-cover"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </article>
    </PreviewGroup>
  );
}
