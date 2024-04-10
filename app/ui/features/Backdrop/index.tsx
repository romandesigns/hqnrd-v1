import React from "react";
import { twMerge } from "tailwind-merge";

export function Backdrop({ backgroundImg }: { backgroundImg: string }) {
  return (
    <div
      className={twMerge(
        `absolute bottom-0 left-0 right-0 top-0 bg-cover bg-center bg-no-repeat ${backgroundImg}`,
      )}
    />
  );
}
