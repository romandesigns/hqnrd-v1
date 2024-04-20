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
import { twMerge } from "tailwind-merge";

export function Features() {
  const featuresList = [
    {
      id: 1,
      color: "primary",
      icon: <MdOutlineBathtub />,
      text: "Private",
    },
    {
      id: 2,
      color: "green",
      icon: <MdBalcony />,
      text: "Balcony",
    },
    {
      id: 3,
      color: "cyan",
      icon: <TbRulerMeasure />,
      text: "258 Sqf",
    },
    {
      id: 4,
      color: "sky",
      icon: <TbTrafficCone />,
      text: "Parking",
    },
    {
      id: 5,
      color: "violet",
      icon: <FaPeopleRoof />,
      text: "Rooftop",
    },
    {
      id: 6,
      color: "lime",
      icon: <LiaBedSolid />,
      text: "1.5 Beds",
    },
    {
      id: 7,
      color: "emerald",
      icon: <BsCameraReels />,
      text: "Surveillance",
    },
    {
      id: 8,
      color: "amber",
      icon: <TbBrandIntercom />,
      text: "Intercom",
    },
  ];

  return (
    <ul className="my-3 flex grid-cols-4 grid-rows-2 flex-wrap items-center justify-start gap-2 sm:grid">
      {featuresList.map((feature) => (
        <li
          key={feature.id}
          className={twMerge(
            `rin flex flex-1 items-center gap-1 rounded-md border bg-neutral-100/20 p-1`,
          )}
        >
          <span
            className={twMerge(
              `flex bg-${feature.color}-100 h-8 w-8 items-center justify-center rounded-md`,
            )}
          >
            {feature.icon}
          </span>
          <span className="md:text-md text-sm">{feature.text}</span>
        </li>
      ))}
    </ul>
  );
}
