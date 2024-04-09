import React, { useState } from "react";
import { WeatherWidget } from "../../../features/WeatherWidget";
import { HorizontalContactWidget } from "@/app/ui/features";

export function SubHeader({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden w-full items-center justify-between py-4 sm:flex">
      <HorizontalContactWidget
        setOpen={setOpen}
        open={open}
        lang={lang}
        component="modal"
      />
      <WeatherWidget />
    </div>
  );
}
