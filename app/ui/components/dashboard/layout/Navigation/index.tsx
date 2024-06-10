import { Locale } from "@/i18n-config";
import Image from "next/image";
import React from "react";
import { AuthMenu } from "../../../../features/AuthMenu";
import { AuthMenuList } from "./AuthMenuList";
import { NotificationList } from "../../../../features/Notifications";
import { Brand } from "@/app/ui/features";

export function Navigation({
  lang,
  children,
}: Readonly<{ lang: Locale; children?: React.ReactNode }>) {
  return (
    <nav className="w-white flex w-full items-center justify-between p-2 md:p-4 md:pt-6 md:pb-3">
       <Brand lang={lang} className="md:hidden"/>
       {children}
       <div>Icon</div>
    </nav>
  );
}
