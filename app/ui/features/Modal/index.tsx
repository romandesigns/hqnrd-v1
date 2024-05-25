import { Modal as ModalComponent } from "antd";
import React from "react";

export const Modal = ({
  children,
  open,
  onClose,
  title,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}) => {
  return (
    <>
      <ModalComponent
        title={title}
        centered
        open={open}
        footer={null}
        onCancel={() => onClose()}
      >
        {children}
      </ModalComponent>
    </>
  );
};
