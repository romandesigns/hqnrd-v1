"use client";

import {
  AiFillMessage,
  BiSolidBell,
  FaAddressBook,
  FaCalendar,
  FaDoorClosed,
  FaUserGroup,
  HiTicket,
  IoSettings,
  MdPayments,
  MdSpaceDashboard,
  RiLayout6Fill,
} from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { Divider } from "antd";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Fragment} from "react";

export const AsideLinks = ({
  lang,
  className,
  notificationsCount,
}: {
  lang: Locale;
  className: string;
  notificationsCount: number;
}) => {
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
      label: "Calendar",
      path: "/calendario",
      icon: <FaCalendar />,
    },
    {
      label: "Reservations",
      path: "/reservaciones",
      icon: <FaAddressBook />,
    },
    {
      label: "Messages",
      path: "/mensages",
      icon: <AiFillMessage />,
    },
    {
      label: "Rooms",
      path: "/habitaciones",
      icon: <FaDoorClosed />,
    },
    {
      label: "Payments",
      path: "/payments",
      icon: <MdPayments />,
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
    {
      label: "Tickets",
      path: "/soporte-technico/tickets",
      icon: <HiTicket />,
    },
    {
      label: "Settings",
      path: "/configuraciones",
      icon: <IoSettings />,
    },
  ];

  return (
    <>
      {links.map((link, i) => (
        <Fragment key={link.label + link.path}>
          <li
            className={cn(`group sm:hover:bg-neutral-200 ${className}`)}
          >
            <Link
              href={`/${lang}/portal${link.path}`}
              className={cn(
                `flex w-full items-center justify-between space-x-2 p-3 pl-4 group-hover:bg-neutral-100`,
                {
                  "bg-primary-100/30":
                    pathName === `/${lang}/portal${link.path}` ||
                    link.label === link.label.toLowerCase(),
                },
              )}
            >
              <div
                className={cn(`flex w-[50%]`, {
                  "font-semibold text-primary-500":
                    pathName === `/${lang}/portal${link.path}` ||
                    link.label === link.label.toLowerCase(),
                })}
              >
                <span className="flex items-center sm:mr-2">{link.icon}</span>
                <p className="hidden text-sm sm:inline-block">{link.label}</p>
              </div>
              {["Reservations", "Messages", "Notifications"].includes(link.label) && (
                <div className="flex aspect-square h-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {notificationsCount}
                </div>
              )}
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
          {i === 4 && (
            <Divider orientation="left" className="my-4">
              <span className="rounded-full border p-1 px-3">Management</span>
            </Divider>
          )}
        </Fragment>
      ))}
    </>
  );
};
