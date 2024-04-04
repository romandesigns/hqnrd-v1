import { HeadingSection } from "@/app/ui/common/SectionHeading";
import { Section } from "@/app/ui/layout";
import React from "react";
import { amenities } from "./amenities";
import Image from "next/image";

export function Amenities() {
  return (
    <Section>
      <HeadingSection
        highlight="Your comfort is our priority"
        title="Providing the best amenities for your stay!"
        accent="neutral"
      />
      <div className="flex py-20 gap-4 flex-col lg:flex-row w-full">
        {/* Images */}
        <article className="lg:flex-[1]">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full transform">
            <div className="bg-white p-2 rounded-md overflow-hidden relative">
              <Image
                fill
                src="/assets/home/amenities/doble-room.jpg"
                alt="doble room image"
              />
            </div>
            <div className="bg-white p-2 rounded-md overflow-hidden relative">
              <Image
                fill
                src="/assets/home/amenities/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
                alt="doble room image"
              />
            </div>
            <div className="bg-white p-2 rounded-md overflow-hidden row-span-full  relative">
              <Image
                fill
                objectFit="cover"
                src="/assets/home/amenities/hqnrd-air-view-building.jpg"
                alt="doble room image"
              />
            </div>
          </div>
        </article>
        {/* Amenities Card */}
        <article className="bg-white flex items-center justify-center lg:flex-[1.2] flex-col">
          <ul className="py-20 px-2 grid grid-cols-2 w-full gap-4 sm:grid-cols-3 lg:px-14 rounded-md">
            {amenities.map((amenity, idx) => (
              <li key={idx} className="flex items-center justify-start">
                <span className="order-2 text-[.8rem]">{amenity.label}</span>
                <span className="order-1 w-5 h-5 mr-1">
                  <amenity.Icon size={18} color="#333333" />
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-row w-full">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-secondary-300 w-full"></div>
            <div className="h-[1px] bg-gradient-to-r from-secondary-300 to-transparent w-full"></div>
          </div>
        </article>
      </div>
    </Section>
  );
}
