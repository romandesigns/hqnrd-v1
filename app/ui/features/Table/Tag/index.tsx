import { format } from "@/utils/formatter/format";
import cn from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

export function TableTag({ label }: { label: string }) {
  return (
    <div
      className={twMerge(
        `inline-block rounded-md px-2 text-center`,
        cn({
          "bg-red-500 text-white": label === "high",
          "bg-green-500 text-white": label === "medium",
          "bg-blue-500 text-white": label === "low",
          "bg-neutral-500 text-white": label === "backlog",
          "bg-yellow-500 text-white": label === "in progress",
          "bg-green-400 text-white": label === "started",
          "bg-blue-400 text-white": label === "completed",
          "bg-purple-400 text-white": label === "cancelled",
          "bg-red-400 text-white": label === "deleted",
        }),
      )}
    >
      {format.firstLetterToUpperCase(label)}
    </div>
  );
}
