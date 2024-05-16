"use client";

import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { Locale } from "@/i18n-config";
import cn from "classnames";
import { usePathname } from "next/navigation";
import {
  AiFillMessage,
  BiSolidBell,
  FaCalendar,
  FaDoorClosed,
  FaUserGroup,
  MdSpaceDashboard,
  RiLayout6Fill,
} from "@/app/ui/icons";

export const AsideLinks = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname();
  const links = [
    {
      label: "Dashboard",
      path: "",
      icon: <MdSpaceDashboard />,
    },
    {
      label: "Usuarios",
      path: "/usuarios",
      icon: <FaUserGroup />,
    },
    {
      label: "Messages",
      path: "/mensages",
      icon: <AiFillMessage />,
    },
    {
      label: "Reservations",
      path: "/reservaciones",
      icon: <FaCalendar />,
    },
    {
      label: "Rooms",
      path: "/habitaciones",
      icon: <FaDoorClosed />,
    },
    {
      label: "Website",
      path: "/website",
      icon: <RiLayout6Fill />,
    },
    {
      label: "Notifications",
      path: "/notificaciones",
      icon: <BiSolidBell />,
    },
  ];

  return links.map((link, i) => (
    <li className="group sm:hover:bg-neutral-200" key={i}>
      <Link
        href={`/${lang}/portal${link.path}`}
        className={cn(
          `flex w-full items-center justify-between space-x-2 p-2 group-hover:bg-neutral-100`,
          {
            "bg-primary-100/30":
              pathName === `/${lang}/portal${link.path}` ||
              link.label === link.label.toLowerCase(),
          },
        )}
      >
        <div className="flex">
          <span className="sm:mr-2">{link.icon}</span>
          <p className="hidden text-sm sm:inline-block">{link.label}</p>
        </div>

        <span
          className={cn(
            `block h-8 w-1 rounded-md transition-all delay-100 group-hover:bg-neutral-400`,
            {
              "bg-primary-500":
                pathName === `/${lang}/portal${link.path}` ||
                link.label === link.label.toLowerCase(),
            },
          )}
        />
      </Link>
    </li>
  ));
};
