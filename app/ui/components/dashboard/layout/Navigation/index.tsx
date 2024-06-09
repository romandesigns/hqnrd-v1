import { Locale } from "@/i18n-config";
import Image from "next/image";
import React from "react";
import { AuthMenu } from "../../../../features/AuthMenu";
import { AuthMenuList } from "./AuthMenuList";
import { NotificationList } from "../../../../features/Notifications";

export function Navigation({
  lang,
  children,
}: Readonly<{ lang: Locale; children?: React.ReactNode }>) {
  return (
    <nav className="w-white flex w-full items-center justify-between border-b bg-white p-[0.41rem] px-4">
      {children ? <div>{children}</div> : <div />}
      <ul className="flex h-full gap-8">
        <li className=" flex items-center justify-center  ">
          <AuthMenu
            icon="notificationMenu"
            dropDownMenuClassNames="bg-red-500 max-w-96 left-auto absolute top-[4.5rem] bg-white border-none  p-2"
          >
            <NotificationList lang={lang} />
          </AuthMenu>
        </li>
        <li className="flex transform-gpu items-center justify-center gap-8 rounded-md border p-1 px-2">
          <AuthMenu icon="profileMenu">
            <AuthMenuList lang={lang} />
          </AuthMenu>
          <div className="flex items-center justify-start gap-4">
            <span className="hoveredUI">
              <Image
                src="/assets/general/male-user-placeholder.png"
                alt="user avatar"
                className="aspect-square rounded-md opacity-[0.20]"
                width={45}
                height={45}
              />
            </span>
            <div>
              <div className="text-sm font-bold">Roman Feliz</div>
              <small className="text-xs">Developer</small>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
