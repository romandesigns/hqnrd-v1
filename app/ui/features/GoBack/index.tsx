"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "../../icons";
import { twMerge } from "tailwind-merge";

export function GoBack({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      type="default"
      icon={<IoMdArrowRoundBack className="text-neutral-500" size={20} />}
      size={"large"}
      className={twMerge(
        `!flex items-center justify-center text-neutral-500 ${className}`,
      )}
    />
  );
}
