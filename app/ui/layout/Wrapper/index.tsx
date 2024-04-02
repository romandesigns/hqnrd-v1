import React from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={twMerge(`w-full max-w-[90rem] m-auto px-2 ${className}`)}>
      {children}
    </div>
  );
}
