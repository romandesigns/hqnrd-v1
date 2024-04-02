import { Drawer as DrawerComponent } from "antd";
import React from "react";

export function Drawer({
  setOpen,
  open,
  children,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <DrawerComponent
      title="Select Language"
      placement={"bottom"}
      width={500}
      height={170}
      onClose={() => setOpen(false)}
      open={open}
    >
      {children}
    </DrawerComponent>
  );
}
