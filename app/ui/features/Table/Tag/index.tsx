import { format } from "@/utils/formatter/format";
import cn from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

export function TableTag({ label }: { label: string }) {
  return (
    <div
      className={twMerge(
        ` inline-block rounded-md border px-1 text-center`,
        cn({
          "border-red-500 bg-red-100 text-red-800": label === "high",
          "border-green-500 bg-green-100 text-green-800":
            label === "medium" || label === "done",
          "border-blue-500 bg-blue-100 text-blue-800": label === "low",
          "border-neutral-500 bg-neutral-200 text-neutral-800":
            label === "backlog",
          "border-yellow-500 bg-yellow-100 text-yellow-800":
            label === "in progress",
        }),
      )}
    >
      {format.firstLetterToUpperCase(label)}
    </div>
  );
}
