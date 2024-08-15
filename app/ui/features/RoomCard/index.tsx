import { Locale } from "@/i18n-config";
import { RoomTypes } from "@/types/types";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaPen, FaTrash, IoMdEye } from "../../icons";
import { ShareBtn } from "../ShareBtn";
import { amenityIcons } from "./Icons";

export const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
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
  room?: RoomTypes;
  portal?: boolean;
  roomEditPath?: string;
  roomDeletePath?: string;
}) => {
  return (
    <div
      className={twMerge(
        `grid-col-1 min-500:grid-rows-[13rem,205px] group my-8 mt-0 grid w-full grid-rows-[15rem,205px] rounded-md bg-white ${className}`,
      )}
    >
      <div className="relative h-full w-full pb-2">
        {portal && (
          <div className="absolute top-2 z-[3] flex w-full justify-center">
            <div className="flex min-w-28 justify-center gap-1 rounded-full bg-neutral-700 p-1">
              {roomEditPath && roomDeletePath && (
                <>
                  <Link
                    href={roomEditPath}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500"
                  >
                    <FaPen size={10} />
                  </Link>
                  <Link
                    href={roomDeletePath}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500"
                  >
                    <FaTrash size={10} />
                  </Link>
                  <Link
                    href={roomDeletePath}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500"
                  >
                    <IoMdEye size={15} />
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
        <figure className="relative h-full w-full overflow-hidden rounded-md shadow-[0_0.7rem_0.5rem_-0.4rem_rgba(0,0,0,0.5)]">
          <Image
            className="absolute h-full w-full object-cover transition-transform duration-300 lg:group-hover:scale-[1.05]"
            src={
              "/assets/home/trending/phtograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
            }
            alt="hero image"
            width={1920}
            height={1080}
          />
        </figure>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,auto,auto,auto] px-2 pb-4">
        <div className="my-1 flex items-end justify-between border-b border-neutral-500">
          <p className="self-center text-xs font-semibold uppercase text-neutral-800">
            Unit # 201
          </p>
          <p className="rounded-tl-md rounded-tr-md bg-neutral-800 px-2 py-1 text-sm font-semibold text-white">
            2,350 / Night
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <h3 className="text-sm font-extrabold text-neutral-800">Basica</h3>
          <ShareBtn
            data={shareData}
            className="border border-neutral-400 text-neutral-800"
          />
        </div>
        <p className="text-left text-xs font-medium leading-4 text-gray-600">
          Discover comfort in our Basic Room. An inviting space for relaxation
          and tranquility. Your ideal escape awaits!
        </p>
        <div className="my-1 flex items-center justify-start">
          <p className="text-xs font-bold">Amenities</p>
          <ul className="ml-2 flex gap-2 border-l-2 pl-2">
            {amenityIcons.map((amenity) => (
              <li
                className="flex items-center justify-start"
                key={amenity.label}
              >
                <amenity.Icon size={18} color="rgb(64,64,64)" />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/${lang}/habitacion/${room?.roomNumber}`}
          className="block w-full self-center"
        >
          <Button size="large" className="w-full !bg-neutral-800 !text-white">
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};
