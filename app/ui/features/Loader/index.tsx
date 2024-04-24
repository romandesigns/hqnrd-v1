"use client";
import React from "react";
import { BackgroundEffect, Brand } from "@/app/ui/features";
import { PulseLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="relative row-span-full flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12">
        <Brand className="relative z-[2]" />
        <div className="relative z-[2]">
          <PulseLoader color="#1a73b2 " />
        </div>
        <BackgroundEffect />
      </div>
    </div>
  );
}
