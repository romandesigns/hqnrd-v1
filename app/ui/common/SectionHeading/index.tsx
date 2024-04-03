import React from "react";
import { twMerge } from "tailwind-merge";

export function HeadingSection({
  accent,
  highlight,
  title,
}: {
  accent: string;
  highlight: string;
  title: string;
}) {
  return (
    <div>
      <p
        className={twMerge(
          `mt-4 inline-flex items-center text-xs justify-center font-bold p-1 rounded-full px-2 text-${accent}-800 bg-${accent}-500/20`
        )}
      >
        {highlight}
      </p>
      <h2
        className={twMerge(
          `font-black my-2 text-${accent}-800 underline text-xl`
        )}
      >
        {title}
      </h2>
    </div>
  );
}
