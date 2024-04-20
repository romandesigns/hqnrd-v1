"use client";
import { Image } from "antd";
import { roofTopImages } from "./images";

export function RoofTop() {
  const { PreviewGroup } = Image;

  return (
    <PreviewGroup>
      <ul className="my-10 mb-8 grid h-[32rem] grid-cols-2 grid-rows-3 gap-3 md:grid-cols-3">
        {roofTopImages.map((image, index) => (
          <li className={image.liClassNames} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              style={{ ...image.style }}
              sizes={image.sizes}
            />
          </li>
        ))}
      </ul>
    </PreviewGroup>
  );
}
