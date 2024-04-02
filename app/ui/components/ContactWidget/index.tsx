"use client";
import {
  BsTranslate,
  FaMapMarkerAlt,
  IoLogoWhatsapp,
  MdEmail,
} from "@/app/ui/icons";
import { Button, Divider, Flex } from "antd";
import React from "react";
import { ExternalLink } from "../../common";
import {
  BUSINESS_EMAIL_FROM_VISITOR,
  BUSINESS_MAP_LOCATION,
  BUSINESS_WHATSAPP_DIRECT_CHAT,
} from "../../constants";
import { Drawer } from "../../layout/Navigation/components/Drawer";
import { FlagsList } from "../../layout/Navigation/components/FlagsList";
import { Modal } from "../Modal";

export function ContactWidget({
  setOpen,
  open,
  lang,
  component,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  lang: string;
  component: string;
}) {
  return (
    <>
      <div>
        <Divider>
          <Flex gap="large">
            <Button
              type="default"
              icon={<BsTranslate />}
              className="!flex items-center justify-center shadow-lg bg-white"
              onClick={() => setOpen(true)}
            />
            <ExternalLink
              href={BUSINESS_MAP_LOCATION}
              className="flex flex-col items-start justify-center"
            >
              <Button
                type="default"
                icon={<FaMapMarkerAlt />}
                className="!flex items-center justify-center shadow-lg bg-white"
              />
            </ExternalLink>
            <ExternalLink
              href={BUSINESS_WHATSAPP_DIRECT_CHAT}
              className="flex flex-col items-start justify-center"
            >
              <Button
                type="default"
                icon={<IoLogoWhatsapp />}
                className="!flex items-center justify-center shadow-lg bg-white"
              />
            </ExternalLink>
            <ExternalLink
              href={BUSINESS_EMAIL_FROM_VISITOR}
              className="flex flex-col items-start justify-center"
            >
              <Button
                type="default"
                icon={<MdEmail />}
                className="!flex items-center justify-center shadow-lg bg-white"
              />
            </ExternalLink>
          </Flex>
        </Divider>
      </div>
      {component === "drawer" ? (
        <Drawer open={open} setOpen={setOpen}>
          <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-1 h-full w-full gap-6">
            <FlagsList lang={lang} />
          </div>
        </Drawer>
      ) : (
        <Modal open={open} setOpen={setOpen} title="Select Language">
          <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-1 w-full gap-6 h-32 my-8 px-2">
            <FlagsList lang={lang} />
          </div>
        </Modal>
      )}
    </>
  );
}
