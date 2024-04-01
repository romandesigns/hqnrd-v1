"use client";
import React, { useState } from "react";
import {
  BsTranslate,
  FaMapMarkerAlt,
  IoLogoWhatsapp,
  MdEmail,
} from "@/app/ui/icons";
import { Button, Divider, Flex, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";

export function UtilsWidget({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <div>
      <Divider className="">
        <Flex gap="large">
          <Button
            type="default"
            icon={<BsTranslate />}
            className="!flex items-center justify-center shadow-lg bg-white"
            onClick={() => setOpen(true)}
          />
          <Button
            type="default"
            icon={<FaMapMarkerAlt />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
          <Button
            type="default"
            icon={<IoLogoWhatsapp />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
          <Button
            type="default"
            icon={<MdEmail />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
        </Flex>
      </Divider>
    </div>
  );
}
