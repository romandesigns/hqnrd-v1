import React from "react";
import { BiSolidBell } from "../../icons";
import cn from "classnames";

export function NotificationBell({
  notificationsCount,
  className,
}: {
  notificationsCount: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `relative flex h-12 w-12 items-center justify-center ${className}`,
      )}
    >
      <div>
        <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
          {notificationsCount}
        </div>
        <BiSolidBell className="text-3xl" />
      </div>
    </div>
  );
}
