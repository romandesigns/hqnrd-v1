import React from "react";
import { twMerge } from "tailwind-merge";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={twMerge(`max-width m-auto w-full px-2 ${className}`)}>
      {children}
    </div>
  );
}
