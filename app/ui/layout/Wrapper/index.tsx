import React from "react";
import cn from "classnames";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn(`w-full max-w-7xl m-auto px-2 ${className}`)}>
      {children}
    </div>
  );
}
