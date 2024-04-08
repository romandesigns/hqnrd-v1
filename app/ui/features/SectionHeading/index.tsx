import React from "react";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

export function HeadingSection({
  highlight,
  title,
  highlightClassName,
  descriptionClassName,
  Icon,
  className,
}: {
  highlight: string;
  title: string;
  highlightClassName?: string;
  descriptionClassName?: string;
  Icon?: IconType;
  className?: string;
}) {
  return (
    <div className={`my-15 lg:my-20 ${className}`}>
      <div
        className={twMerge(
          `mt-4 inline-flex items-center text-xs justify-center font-bold p-1 rounded-full px-2 text-neutral-800 bg-neutral-500/20 relative ${highlightClassName}`
        )}
      >
        <p>{highlight}</p>
        {Icon && (
          <span className="absolute -top-4 -right-4 animate-bounce">
            <Icon size={20} />
          </span>
        )}
      </div>
      <h2
        className={twMerge(
          `font-black my-2 text-neutral-800 underline text-xl ${descriptionClassName}`
        )}
      >
        {title}
      </h2>
    </div>
  );
}
