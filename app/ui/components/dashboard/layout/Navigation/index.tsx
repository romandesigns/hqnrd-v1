import { Locale } from "@/i18n-config";
import Image from "next/image";
import React from "react";
import { AuthMenu } from "../../../../features/AuthMenu";
import { AuthMenuList } from "./AuthMenuList";
import { NotificationList } from "../../../../features/Notifications";
import { Brand } from "@/app/ui/features";
import { Avatar } from 'antd';
import { LuUser2 } from "@/app/ui/icons";
import { twMerge } from "tailwind-merge";

export function Navigation({
  lang,
  children,
  className='',
}: Readonly<{ lang: Locale; children?: React.ReactNode, className:string }>) {
  return (
    <nav className={twMerge(`w-white flex w-full items-center justify-between p-2 pb-0 md:pb-0 md:pt-4 ${className}`)}>
       <Brand lang={lang} className="md:hidden"/>
       {children}
       <div>
        <div className="flex items-center justify-start gap-4">
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<LuUser2 />} size="large" shape="square"/>
            <div className="flex flex-col">
              <span className="font-semibold">Roman Feliz</span>
              <span className="text-xs font-medium">Developer</span>
            </div>
          </div>
       </div>
    </nav>
  );
}
