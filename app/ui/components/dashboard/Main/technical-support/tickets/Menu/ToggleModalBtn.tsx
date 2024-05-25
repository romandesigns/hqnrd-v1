"use client";

import React from "react";
import { Button } from "antd";
import { MdAddCircle } from "@/app/ui/icons";
import { useModalToggle } from "@/store/modalToggle";

export const ToggleModalBtn = function () {
  const openModal = useModalToggle((state) => state.openModal);
  return (
    <Button
      type="default"
      className="!flex !items-center !bg-neutral-800 !px-4 !text-neutral-200"
      size="large"
      onClick={() => openModal()}
      icon={<MdAddCircle />}
    >
      <span className="ml-1">New</span>
    </Button>
  );
};
