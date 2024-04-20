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
      color: "bg-primary-100",
      icon: <MdOutlineBathtub />,
      text: "Private",
    },
    {
      id: 2,
      color: "bg-green-100",
      icon: <MdBalcony />,
      text: "Balcony",
    },
    {
      id: 3,
      color: "bg-cyan-100",
      icon: <TbRulerMeasure />,
      text: "258 Sqf",
    },
    {
      id: 4,
      color: "bg-sky-100",
      icon: <TbTrafficCone />,
      text: "Parking",
    },
    {
      id: 5,
      color: "bg-violet-100",
      icon: <FaPeopleRoof />,
      text: "Rooftop",
    },
    {
      id: 6,
      color: "bg-lime-100",
      icon: <LiaBedSolid />,
      text: "1.5 Beds",
    },
    {
      id: 7,
      color: "bg-emerald-100",
      icon: <BsCameraReels />,
      text: "Surveillance",
    },
    {
      id: 8,
      color: "bg-amber-100",
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
              `flex ${feature.color} h-8 w-8 items-center justify-center rounded-md`,
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
