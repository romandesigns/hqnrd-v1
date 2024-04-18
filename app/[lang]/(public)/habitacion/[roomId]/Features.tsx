import React from "react";
import {
  BsCameraReels,
  FaPeopleRoof,
  LiaBedSolid,
  MdBalcony,
  MdOutlineBathtub,
  TbBrandIntercom,
  TbRulerMeasure,
  TbTrafficCone,
} from "@/app/ui/icons";

export function Features() {
  return (
    <ul className="my-3 flex grid-cols-4 grid-rows-2 flex-wrap items-center justify-start gap-2 sm:grid">
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <MdOutlineBathtub />
        </span>
        <span className="text-xs md:text-sm">Private</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <MdBalcony />
        </span>
        <span className="text-xs md:text-sm">Balcony</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <TbRulerMeasure />
        </span>
        <span className="text-xs md:text-sm">258 Sqf</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <TbTrafficCone />
        </span>
        <span className="text-xs md:text-sm">Parking</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <FaPeopleRoof />
        </span>
        <span className="text-xs md:text-sm">Rooftop</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <LiaBedSolid />
        </span>
        <p className="text-xs md:text-sm">
          1.5 <span className="hidden sm:inline-block">Beds</span>
        </p>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <BsCameraReels />
        </span>
        <span className="text-xs md:text-sm">Surveillance</span>
      </li>
      <li className="flex flex-1 gap-1 rounded-md border bg-white/80 p-1 md:p-4">
        <span>
          <TbBrandIntercom />
        </span>
        <span className="text-xs md:text-sm">Intercom</span>
      </li>
    </ul>
  );
}
