import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export function CardDiscount({
  imgSrc,
  eligibleDays,
  borderColor,
  bgColor,
}: {
  imgSrc: string;
  eligibleDays: string;
  borderColor: string;
  bgColor: string;
}): React.JSX.Element {
  return (
    <div className="relative h-full w-full rounded-md">
      <div className="rounded-md bg-white p-6 shadow-sm">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-10">
          <h4 className="text-lg font-bold">{eligibleDays}</h4>
          <figure className="my-10">
            <Image
              width={300}
              height={300}
              src={imgSrc}
              alt={`${eligibleDays} image`}
              style={{ height: "auto" }}
            />
          </figure>
          <div
            className={twMerge(
              `relative w-full rounded-md border p-3  ${borderColor}`,
            )}
          >
            <span className="relative z-[2] font-bold uppercase text-white ">
              Special Offer
            </span>
            <span
              className={twMerge(
                `absolute -left-2 top-2 block h-full  w-full rounded-md ${bgColor}`,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
