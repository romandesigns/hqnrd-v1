"use client";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Menu } from "../HeaderComponent/Menu";
import { MotionSelect } from "@/app/ui/motion";
import { FaCircleArrowDown } from "@/app/ui/icons";
import { format } from "@/utils/formatter/format";
import { HeadingSection } from "@/app/ui/features";
import { Locale } from "@/i18n-config";

export const Select = ({ lang }: { lang: Locale }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cat, setCat] = useState("All Rooms");
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((segment) => segment !== "");
  const category = pathSegments[pathSegments.length - 1] || "All Rooms";

  useEffect(() => {
    const selectedCategory = format.categories(category);
    setCat(selectedCategory);
  }, [category]);

  return (
    <div className="relative  z-[1] w-full">
      <HeadingSection
        title="The quality and service you deserve!"
        descriptionClassName="text-md font-bold md:text-2xl text-white hidden m-0"
        highlight="Your peace of mind is our priority"
        highlightClassName="!m-0"
        className="mx-auto !mb-0 !mt-0  flex flex-col items-center justify-center p-0 lg:my-0"
      />
      <div className="relative m-auto my-6 h-auto w-full rounded-md bg-white">
        <div
          className="active:bg-primary/20 active:ring-primary/50 ring-charcoal/20 relative flex items-center justify-between rounded-md border-2 px-2 py-2 shadow-md ring-4 hover:cursor-pointer active:border-white active:ring-[0.2rem] md:py-1 lg:p-4 lg:py-3"
          onClick={() => setIsVisible(!isVisible)}
        >
          <span className="text-charcoal p-2 pl-0 text-sm font-bold">
            {cat}
          </span>
          <span
            className={twMerge(
              cn("transform transition-transform duration-200 ease-in-out", {
                "rotate-180": isVisible,
              }),
            )}
          >
            <FaCircleArrowDown size={20} color="#646464" />
          </span>
        </div>
        <MotionSelect toggle={isVisible}>
          <Menu toggleVisibility={setIsVisible} lang={lang} />
        </MotionSelect>
      </div>
      <HeadingSection
        title="The quality and service you deserve!"
        descriptionClassName="text-md font-bold md:text-xl text-white !my-0 !mx-auto flex justify-center w-full text-sm sm:text-md"
        highlight="Your peace of mind is our priority"
        highlightClassName="hidden"
        className="!m-0 mx-auto !mb-0  !mt-0 flex flex-col items-center justify-center p-0 lg:my-0"
      />
    </div>
  );
};
