"use client";
import { Locale } from "@/i18n-config";
import React from "react";
import { VerticalContactWidget } from "../../features/ContactWidget";
import { Drawer } from "../Navigation/components/Drawer";
import { FlagsList } from "../Navigation/components/FlagsList";

export function VerticalContactWidgetLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const [open, setOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <VerticalContactWidget setOpen={setOpen} scrollY={scrollY} />
      {children}
      <Drawer
        open={open}
        setOpen={setOpen}
        placement="bottom"
        title="Select Language"
      >
        <div className="m-auto grid h-full w-full max-w-96 grid-cols-[1fr_1fr_1fr] grid-rows-1 gap-6">
          <FlagsList lang={lang} />
        </div>
      </Drawer>
    </div>
  );
}
