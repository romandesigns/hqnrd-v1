import { Drawer as DrawerComponent } from "antd";
import React from "react";

export function Drawer({
  setOpen,
  open,
  children,
  title,
  placement,
  className,
  closeDrawer,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
  title: string;
  placement: "top" | "right" | "bottom" | "left";
  className?: string;
  closeDrawer?: () => void;
}) {
  return (
    <DrawerComponent
      title={title}
      placement={placement}
      width={500}
      height={170}
      onClose={() =>
        setOpen ? setOpen(false) : closeDrawer ? closeDrawer() : null
      }
      open={open}
      className={className}
    >
      {children}
    </DrawerComponent>
  );
}
