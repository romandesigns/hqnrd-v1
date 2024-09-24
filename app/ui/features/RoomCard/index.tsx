import { Locale } from "@/i18n-config";
import { RoomDetailsPayload, RoomTypes } from "@/types/types";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaPen, FaTrash, IoMdEye } from "../../icons";
import { ShareBtn } from "../ShareBtn";
import { ameneties, features } from "./features";

export const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const transformTitle = (title: string) => {
  const [category, characteristic] = title.split("-");
  // const [adjective, businessName] = characteristic.split("at");
  return <h3 className="mr-4 text-sm text-neutral-700"></h3>;
};

export const RoomCard = ({
  className,
  lang,
  room,
  portal,
  roomEditPath,
  roomDeletePath,
}: {
  className?: string;
  lang?: Locale;
  room?: RoomDetailsPayload;
  portal?: boolean;
  roomEditPath?: string;
  roomDeletePath?: string;
}) => {
  console.log(room);
  return (
    <div
      className={twMerge(
        `grid-col-1 min-500:grid-rows-[14rem_auto] group my-8 mt-0 grid w-full grid-rows-[16rem_auto] rounded-md bg-white ${className}`,
      )}
    >
      <div className="relative h-full w-full pb-2">
        {portal && (
          <div className="absolute top-2 z-[3] flex w-full justify-center">
            <div className="flex min-w-28 justify-center gap-1 rounded-md bg-neutral-700 p-1">
              {roomEditPath && roomDeletePath && (
                <>
                  <Link
                    href={roomEditPath}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-yellow-500"
                  >
                    <FaPen size={10} />
                  </Link>
                  <Link
                    href={roomDeletePath}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-red-500"
                  >
                    <FaTrash size={10} />
                  </Link>
                  <Link
                    href={roomDeletePath}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500"
                  >
                    <IoMdEye size={15} />
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
        <figure className="relative h-full w-full overflow-hidden rounded-md shadow-[0_0.7rem_0.6rem_-0.5rem_rgba(0,0,0,0.4)] transition-[transform_shadow] delay-75 group-hover:scale-[1.04] group-hover:shadow-[0_0.7rem_0.8rem_-0.6rem_rgba(0,0,0,0.5)]">
          <Image
            className="absolute h-full w-full object-cover transition-transform duration-300 lg:group-hover:scale-[1.05]"
            src={
              "https://cknwdpehwpqvbkikbtqr.supabase.co/storage/v1/object/public/hqnrd-public/rooms/basicas/205/card-img/card-img-ar-4-3-unit-205-1726988783343.webp"
            }
            alt="hero image"
            width={1920}
            height={1080}
          />
        </figure>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto,auto] px-2 pb-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center">
            <h3 className="mr-4 py-2 text-xs text-neutral-700">
              <span className="block text-left">Basic Room</span>
              <span className="block font-bold">Comfort and Affordability</span>
            </h3>
            <ShareBtn data={shareData} className="rounded-md border" />
          </span>
          <span className="rounded-md border border-neutral-500/50 px-4 py-1 text-xs font-bold text-neutral-800">
            2,350 / Night
          </span>
        </div>

        <div className="flex flex-col items-start justify-center py-2">
          <div className="my-1 flex items-center justify-start">
            <p className="pr-[.535rem] text-[0.7rem] font-semibold">Features</p>
            <ul className="ml-2 flex gap-1 border-l-2 pl-2">
              {features.map((feature, index) => (
                <li
                  className="rounded-md bg-neutral-200 px-2 text-[0.7rem]"
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-1 flex items-center justify-start">
            <p className="text-[0.7rem] font-semibold">Amenities</p>
            <ul className="ml-2 flex gap-2 border-l-2 pl-2">
              {ameneties.map((amenity) => (
                <li
                  className="flex items-center justify-start"
                  key={amenity.label}
                >
                  <amenity.Icon size={14} color="rgb(64,64,64)" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href={`/${lang}/habitacion/${room?.roomNumber}`}
          className="block w-full self-center"
        >
          <Button
            size="large"
            className="!h-auto w-full !bg-neutral-800 !py-2 !text-white"
          >
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};
