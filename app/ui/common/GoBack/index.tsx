"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";

export function GoBack() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <IoMdArrowRoundBack size={20} className="text-neutral-500" />
    </button>
  );
}
