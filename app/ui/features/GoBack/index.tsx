"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "../../icons";
import { twMerge } from "tailwind-merge";

export function GoBack({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <IoMdArrowRoundBack
        size={20}
        className={twMerge(`text-neutral-500 ${className}`)}
      />
    </button>
  );
}
