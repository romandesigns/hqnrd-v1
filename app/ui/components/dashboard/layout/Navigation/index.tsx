import { Brand } from "@/app/ui/features";
import { BsThreeDotsVertical, LuUser2 } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { User } from "@/types";
import { format } from "@/utils/formatter/format";
import { createClient } from "@/utils/supabase/server";
import { Avatar } from "antd";
import { unstable_noStore } from "next/cache";
import React from "react";
import { twMerge } from "tailwind-merge";
export async function Navigation({
  lang,
  children,
  className = "",
}: Readonly<{ lang: Locale; children?: React.ReactNode; className: string }>) {
  unstable_noStore();
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav
      className={twMerge(
        `w-white flex w-full items-center justify-between p-2 pb-0 md:pb-0 md:pt-4 ${className}`,
      )}
    >
      <Brand lang={lang} className="md:hidden" />
      {children}
      <div>
        <div className="flex items-center justify-start gap-4">
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<LuUser2 />}
            size="large"
            shape="square"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              {user?.user_metadata.name} {user?.user_metadata.last_name}
            </span>
            <span className="text-xs font-medium">
              {format.firstLetterToUpperCase(user?.user_metadata?.user_role)}
            </span>
          </div>
          <div className="rounded-md bg-white/70 p-1 py-2">
            <BsThreeDotsVertical size={25} color="#1677ff" />
          </div>
        </div>
      </div>
    </nav>
  );
}
