"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "../../icons";

export function GoBack() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <IoMdArrowRoundBack size={20} className="text-neutral-500" />
    </button>
  );
}
