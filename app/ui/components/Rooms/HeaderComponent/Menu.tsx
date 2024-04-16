"use client";
import Link from "next/link";
import { MdDoorFront } from "react-icons/md";
import { Links as links } from "./MenuLinks";
import { MaxGuestQntyBadge } from "@/app/ui/features";
import { Locale } from "@/i18n-config";

export const Menu = ({
  toggleVisibility,
  lang,
}: {
  toggleVisibility: (arg: boolean) => void;
  lang: Locale;
}) => {
  return (
    <ul className="absolute mt-1 w-full space-y-2 rounded-md bg-white p-4 shadow-md">
      {links.map((item, index) => (
        <li
          className="border-charcoal/10 overflow-hidden rounded-md border"
          onClick={() => toggleVisibility(false)}
          key={index}
        >
          <Link
            className="hover:bg-charcoal/10 flex items-center justify-between p-4 py-3 text-sm"
            href={`/${lang}/habitaciones/${item.slug}`}
          >
            <span>{item.label}</span>
            {item.maxGuests && (
              <MaxGuestQntyBadge
                qnty={item.maxGuests}
                className="relative bottom-auto right-auto"
              />
            )}
            {item.maxRooms && (
              <div className="text-charcoal z-[3] flex items-center justify-center space-x-1 text-[0.6rem] md:text-[.8rem]">
                <MdDoorFront />
                <span className="text-charcoal mr-2">
                  {item.maxRooms} Total
                </span>
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
