import {
  BsTranslate,
  FaMapMarkerAlt,
  IoLogoWhatsapp,
  MdEmail,
} from "@/app/ui/icons";
import { Button, Divider, Flex } from "antd";
import React from "react";
import {
  BUSINESS_EMAIL_FROM_VISITOR,
  BUSINESS_MAP_LOCATION,
  BUSINESS_WHATSAPP_DIRECT_CHAT,
} from "../../constants";
import { Drawer } from "../../layout/Navigation/components/Drawer";
import { FlagsList } from "../../layout/Navigation/components/FlagsList";
import { ExternalLink, Modal, WaveDot } from "..";

export function HorizontalContactWidget({
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
              className="relative !flex items-center justify-center bg-white shadow-lg"
              onClick={() => setOpen(true)}
            />

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
            <ExternalLink
              href={BUSINESS_WHATSAPP_DIRECT_CHAT}
              className="relative flex flex-col items-start justify-center"
            >
              <Button
                type="default"
                icon={<IoLogoWhatsapp />}
                className="!flex items-center justify-center bg-white shadow-lg"
              />
              <WaveDot />
            </ExternalLink>
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
          </Flex>
        </Divider>
      </div>
      {component === "drawer" ? (
        <Drawer open={open} setOpen={setOpen}>
          <div className="grid h-full w-full grid-cols-[1fr_1fr_1fr] grid-rows-1 gap-6">
            <FlagsList lang={lang} />
          </div>
        </Drawer>
      ) : (
        <Modal open={open} setOpen={setOpen} title="Select Language">
          <div className="my-8 grid h-32 w-full grid-cols-[1fr_1fr_1fr] grid-rows-1 gap-6 px-2">
            <FlagsList lang={lang} />
          </div>
        </Modal>
      )}
    </>
  );
}
