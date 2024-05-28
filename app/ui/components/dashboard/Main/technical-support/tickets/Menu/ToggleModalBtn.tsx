"use client";

import { MdAddCircle } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import React from "react";
import { TicketForm } from "../Form";

export const ToggleModalBtn = function ({lang}: {lang: Locale}) {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Button
        type="default"
        className="!flex !items-center !bg-neutral-800 !px-4 !text-neutral-200"
        size="large"
        onClick={() => setOpenModal(!openModal)}
        icon={<MdAddCircle />}
      >
        <span className="ml-1">New</span>
      </Button>
      <TicketForm openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  );
};
