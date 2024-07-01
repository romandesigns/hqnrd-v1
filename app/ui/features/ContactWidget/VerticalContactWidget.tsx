"use client";
import { Button } from "antd";
import React from "react";
import { BsTranslate } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { WaveDot } from "..";
import {
  BUSINESS_EMAIL_FROM_VISITOR,
  BUSINESS_MAP_LOCATION,
  BUSINESS_WHATSAPP_DIRECT_CHAT,
} from "../../constants";
import { MotionVerticalContactWidget } from "../../motion/MotionVerticalContactWidget";
import { ExternalLink } from "../ExternalLink";

export function VerticalContactWidget({
  setOpen,
  scrollY,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
}) {
  return (
    <MotionVerticalContactWidget showWidget={Number(scrollY) > 80}>
      <ul
        className={twMerge(
          `fixed left-2 top-[50vh] !z-[50] hidden flex-col space-y-2 rounded-md bg-white p-2 shadow-md transition-transform duration-300 md:block`,
        )}
      >
        <li>
          <Button
            type="default"
            icon={<BsTranslate />}
            className="!flex items-center justify-center bg-white shadow-lg"
            onClick={() => setOpen(true)}
          />
        </li>
        <li>
          <ExternalLink
            href={BUSINESS_MAP_LOCATION}
            className="flex flex-col items-start justify-center"
          >
            <Button
              type="default"
              icon={<FaMapMarkerAlt />}
              className="!flex items-center justify-center bg-white shadow-lg"
            />
          </ExternalLink>
        </li>
        <li className="relative">
          <WaveDot />
          <ExternalLink
            href={BUSINESS_WHATSAPP_DIRECT_CHAT}
            className="flex flex-col items-start justify-center"
          >
            <Button
              type="default"
              icon={<IoLogoWhatsapp />}
              className="!flex items-center justify-center bg-white shadow-lg"
            />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={BUSINESS_EMAIL_FROM_VISITOR}
            className="flex flex-col items-start justify-center"
          >
            <Button
              type="default"
              icon={<MdEmail />}
              className="!flex items-center justify-center bg-white shadow-lg"
            />
          </ExternalLink>
        </li>
      </ul>
    </MotionVerticalContactWidget>
  );
}
