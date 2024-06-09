import React from "react";
import { LuUser2, TbSettings } from "@/app/ui/icons";
import { Avatar } from "antd";
import { Locale } from "@/i18n-config";

export function NotificationList({ lang }: Readonly<{ lang: Locale }>) {
  return (
    <ul className="relative h-96 overflow-y-auto">
      <li className="sticky top-0 flex justify-between border-b bg-white p-2">
        <h5 className="font-bold">Notifications</h5>
        <button className="cursor-pointer">
          <TbSettings />
        </button>
      </li>
      <li className="flex items-center justify-start gap-2 p-2 py-4">
        <Avatar
          size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
          icon={<LuUser2 />}
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h6 className="text-sm font-bold">John Doe</h6>
            <span className="text-xs">3 Mins ago</span>
          </div>
          <p className="text-sm">New account created!</p>
        </div>
      </li>
    </ul>
  );
}
