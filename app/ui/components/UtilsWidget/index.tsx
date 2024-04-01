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
  );
}
