"use client";
import { BackgroundEffect, Brand } from "@/app/ui/features";
import { Button } from "antd";
import Link from "next/link";
import { GoHomeFill } from "@/app/ui/icons";

export default function ErrorBody({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="relative row-span-full flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12">
        <Brand className="relative z-[2]" />
        <div className="relative z-[2] flex flex-col items-center justify-center text-center">
          <h1 className="space-x-2 text-4xl font-bold text-primary-800">
            <span>Error</span> <span>:(</span>
          </h1>
          {children}
          <Button
            className="mt-8 !flex !items-center justify-center"
            icon={<GoHomeFill />}
          >
            <Link href={`/${lang}`}>Home</Link>
          </Button>
        </div>
        <BackgroundEffect />
      </div>
    </div>
  );
}
