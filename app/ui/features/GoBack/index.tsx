"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "../../icons";
import { twMerge } from "tailwind-merge";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export function GoBack({
  className,
  size,
}: {
  className?: string;
  size?: SizeType;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      type="default"
      icon={<IoMdArrowRoundBack className="text-neutral-500" size={20} />}
      size={size}
      className={twMerge(
        `!flex items-center justify-center text-neutral-500 ${className}`,
      )}
    />
  );
}
