"use client";
import { Image } from "antd";
import { commonAndEntertainment } from "./images";

export function CommonAreas() {
  const { PreviewGroup } = Image;
  return (
    <PreviewGroup>
      <ul className="my-10 mb-8 grid h-[32rem] grid-cols-2 grid-rows-3 gap-3 md:grid-cols-3">
        {commonAndEntertainment.map((image, index) => (
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
