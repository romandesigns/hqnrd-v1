import { Modal as ModalComponent } from "antd";
import React from "react";

export const Modal = ({
  children,
  open,
  setOpen,
  title,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {
  return (
    <>
      <ModalComponent
        title={title}
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        {children}
      </ModalComponent>
    </>
  );
};
