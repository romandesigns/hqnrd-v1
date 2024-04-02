import React, { useState } from "react";
import { ContactWidget } from "../ContactWidget";
import { WeatherWidget } from "../WeatherWidget";

export function SubHeader({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="items-center justify-between w-full hidden md:flex">
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
