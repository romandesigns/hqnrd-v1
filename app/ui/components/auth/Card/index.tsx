import { Brand, GoBack } from "@/app/ui/features";
import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { Button } from "antd";
import { twMerge } from "tailwind-merge";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export function Card({
  children,
  lang,
  className,
  size,
}: {
  children: React.ReactNode;
  lang: string;
  className?: string;
  size?: SizeType;
}) {
  return (
    <main
      className={twMerge(
        `relative flex items-center justify-center ${className}`,
      )}
    >
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] bg-white p-4 lg:relative lg:h-auto lg:max-w-lg lg:rounded-md">
        <div className="flex items-center justify-between pb-4">
          <Brand />
          <div className="flex items-center justify-center space-x-4">
            <GoBack size={size} />
            <Link href={`/${lang}`}>
              <Button
                type="default"
                icon={<GoHomeFill className="text-neutral-500" />}
                size={size}
                className="!flex items-center justify-center"
              />
            </Link>
          </div>
        </div>
        {children}
      </section>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] rounded-md bg-black/20 backdrop-blur-xl backdrop-filter" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-cover bg-center bg-no-repeat" />
    </main>
  );
}
