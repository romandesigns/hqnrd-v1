import { Drawer as DrawerComponent } from "antd";
import React from "react";

export function Drawer({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <DrawerComponent
      title="Select Language"
      placement={"bottom"}
      width={500}
      onClose={() => setOpen(false)}
      open={open}
    >
      <div className="grid grid-cols-1 grid-rows-3 h-full w-full gap-2">
        <div className="border flex items-center justify-between rounded-md">
          <span className="border w-full h-full flex-[2] flex items-center justify-center">
            English
          </span>
          <span className="border w-full h-full flex-[1]">Flag</span>
        </div>
        <div className="border flex items-center justify-between rounded-md">
          <span className="border w-full h-full flex-[2] flex items-center justify-center">
            Spanish
          </span>
          <span className="border w-full h-full flex-[1]">Flag</span>
        </div>
        <div className="border flex items-center justify-between rounded-md">
          <span className="border w-full h-full flex-[2] flex items-center justify-center">
            German
          </span>
          <span className="border w-full h-full flex-[1]">Flag</span>
        </div>
      </div>
    </DrawerComponent>
  );
}
