import { Locale } from "@/i18n-config";
import { format } from "@/utils/formatter/format";
import { createClient } from "@/utils/supabase/server";
import { UserMetadata } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";
import { AuthMenu } from "../AuthMenu";
import { AuthMenuList } from "./AuthMenuList";
import { NotificationList } from "./Notifications";

export async function Navigation({
  lang,
  children,
  childrenClassName,
}: Readonly<{
  lang: Locale;
  children?: React.ReactNode;
  childrenClassName?: string;
}>) {
  const supabase = createClient(); 
  const {data:{user:{user_metadata}}} = await supabase.auth.getUser() as UserMetadata;

  return (
    <nav className="w-white grid w-full grid-cols-[1fr_auto] grid-rows-1 items-center justify-between border-b bg-white p-[0.41rem] px-4 relative z-[1]">
      {children ? (
        <div className={`${childrenClassName}`}>{children}</div>
      ) : (
        <div />
      )}
      <ul className="flex h-full gap-8">
        <li className=" ml-4 flex items-center justify-center">
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
             <Image
                src="/assets/general/male-user-placeholder.png"
                alt="user avatar"
                className="aspect-square rounded-md opacity-[0.20]"
                width={45}
                height={45}
            />
            <div>
              <div className="text-sm font-bold">{`${user_metadata.name} ${user_metadata.last_name}`}</div>
              <small className="text-xs">{`${format.firstLetterToUpperCase(user_metadata.user_role)}`}</small>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
