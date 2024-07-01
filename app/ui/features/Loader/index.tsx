"use client";
import React from "react";
import { BackgroundEffect, Brand } from "@/app/ui/features";
import { PulseLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="justify-strech relative row-span-full flex items-stretch overflow-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col gap-4">
          <Brand className="relative z-[2]" />
          <div className="relative z-[2] flex items-center justify-center">
            <PulseLoader color="#1a73b2 " />
          </div>
        </div>
      </div>
      <BackgroundEffect />
    </div>
  );
}
