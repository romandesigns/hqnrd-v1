import React from "react";
import { twMerge } from "tailwind-merge";

export function Heading({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <div className={twMerge(`flex w-full justify-between ${className}}`)}>
      <h3 className="font-bold">{heading}</h3>
    </div>
  );
}
