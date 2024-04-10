import React from "react";
import { twMerge } from "tailwind-merge";

export function Blurdrop({ blurLevel }: { blurLevel: string }) {
  return (
    <div
      className={twMerge(
        `absolute bottom-0 left-0 right-0 top-0 z-[1] rounded-md bg-black/20 backdrop-blur-${blurLevel} backdrop-filter`,
      )}
    />
  );
}
