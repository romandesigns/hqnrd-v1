"use client";
import { IoClose } from "@/app/ui/icons";
import { useNavToggle } from "@/store/mobile-navigation";

export function ToggleOpen() {
  const { closeNavigation } = useNavToggle();

  return (
    <div
      className="flex w-full items-center justify-end p-2 px-0 hover:cursor-pointer"
      onClick={() => closeNavigation()}
    >
      {/* <span className="font-medium">CLOSE</span> */}
      <IoClose size={27} />
    </div>
  );
}
