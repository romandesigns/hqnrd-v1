"use client";
import { HiMenuAlt1 } from "@/app/ui/icons";
import { useNavToggle } from "@/store/mobile-navigation";
import cn from "classnames";

export function ToggleClose({ className = "" }: { className?: string }) {
  const { openNavigation } = useNavToggle();
  return (
    <div
      className={cn(
        `flex items-center justify-end gap-2 p-4 px-2 hover:cursor-pointer ${className}`,
      )}
      onClick={() => openNavigation()}
    >
      <HiMenuAlt1 size={25} />
      {/* <span className="font-medium">MENU</span> */}
    </div>
  );
}
