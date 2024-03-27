"use client";
import { IoClose } from "@/app/ui/icons";
import { useNavToggle } from "@/store/mobile-navigation";

export function ToggleOpen() {
  const { closeNavigation } = useNavToggle();

  return (
    <div
      className="flex items-center p-2 px-0 w-full justify-end hover:cursor-pointer"
      onClick={() => closeNavigation()}
    >
      {/* <span className="font-medium">CLOSE</span> */}
      <IoClose size={27} />
    </div>
  );
}
