'use client';

import {
  AiFillMessage,
  BiSolidBell,
  FaAddressBook,
  FaCalendar,
  FaDoorClosed,
  FaUserGroup,
  HiMenuAlt1,
  IoSettings,
  MdConstruction,
  MdPayments,
  MdSpaceDashboard,
  RiLayout6Fill
} from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import useViewportDimensions from "@/utils/hooks/useViewPort";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

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
  const { width } = useViewportDimensions();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const links = [
    { label: "Dashboard", path: "", icon: <MdSpaceDashboard /> },
    { label: "Usuarios", path: "/usuarios", icon: <FaUserGroup /> },
    { label: "Calendar", path: "/calendario", icon: <FaCalendar /> },
    { label: "Reservations", path: "/reservaciones", icon: <FaAddressBook /> },
    { label: "Messages", path: "/mensages", icon: <AiFillMessage /> },
    { label: "Rooms", path: "/habitaciones", icon: <FaDoorClosed /> },
    { label: "Payments", path: "/payments", icon: <MdPayments /> },
    { label: "Website", path: "/website", icon: <RiLayout6Fill /> },
    { label: "Notifications", path: "/notificaciones", icon: <BiSolidBell /> },
    { label: "Soporte Technico", path: "/soporte-technico", icon: <MdConstruction /> },
    { label: "Settings", path: "/configuracion", icon: <IoSettings /> },
  ];

  const visibleLinks = width <= 640 ? links.slice(0, 5) : links;

  const handleMenuClick = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      {links.map((link, i) => (
        <Fragment key={`${link.label}-${link.path}`}>
          <li className={cn("group md:hover:bg-neutral-200 flex-1", className)}>
            <Link
              href={`/${lang}/portal${link.path}`}
              className={cn(
                "flex w-full items-center justify-between space-x-2 p-3 pl-4 group-hover:bg-neutral-100 relative",
                {
                  "bg-primary-100/30": pathName === `/${lang}/portal${link.path}`,
                  "text-primary-500": pathName === `/${lang}/portal${link.path}`,
                }
              )}
            >
              <div className="flex w-[55%]">
                <span className="flex items-center md:mr-2 text-xl">{link.icon}</span>
                <p className="hidden md:text-sm md:inline-block">{link.label}</p>
              </div>
              {["Reservations", "Messages", "Notifications"].includes(link.label) && (
                <div className="flex aspect-square h-6 items-center justify-center rounded-full bg-red-500 text-xs text-white m-0 absolute top-1 right-4 md:relative">
                  {notificationsCount}
                </div>
              )}
              <span
                className={cn(
                  "block h-8 w-1 rounded-md transition-all delay-100 group-hover:bg-neutral-400",
                  {
                    "bg-primary-500": pathName === `/${lang}/portal${link.path}`,
                  }
                )}
              />
            </Link>
          </li>

        </Fragment>
      ))}
      {/* Menu Drawer */}
      {/* <Drawer
        headerStyle={{  display: "flex", padding: "1rem"}}
        closeIcon={<IoCloseCircle size={20} className="text-neutral-700"/>}
        title="Menu"
        height={"50%"}
        placement="bottom"
        closable={true}
        onClose={handleMenuClick}
        open={drawerVisible}
        key="left"
        style={{ display: 'flex' }}
      >
        <div className="flex items-center justify-center h-full w-full">
          <ul className="grid grid-cols-3 gap-4 place-content-start">
            {links.slice(5).map((link, i) => (
              <li key={`${link.label}-${link.path}`}>
                <Link href={`/${lang}/portal${link.path}`}  className="p-8 rounded-md border flex items-center justify-center flex-col gap-2">
                  <span className="flex items-center md:mr-2 text-xl">{link.icon}</span>
                  <span className="flex items-center text-xs">{link.label === "Soporte Technico" ? "Soporte" : link.label}</span>
                </Link>
              </li>
            ))}
        </ul>
        </div>
      </Drawer> */}
      {/* Menu Icon */}
      <HiMenuAlt1 className="text-3xl fixed bottom-24 right-5 z-10 md:hidden" onClick={handleMenuClick} />
    </>
  );
};
