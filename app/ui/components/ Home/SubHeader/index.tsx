import React, { useState } from "react";
import { ContactWidget } from "../../../features/ContactWidget";
import { WeatherWidget } from "../../../features/WeatherWidget";

export function SubHeader({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="items-center justify-between w-full hidden sm:flex py-4">
      <ContactWidget
        setOpen={setOpen}
        open={open}
        lang={lang}
        component="modal"
      />
      <WeatherWidget />
    </div>
  );
}
