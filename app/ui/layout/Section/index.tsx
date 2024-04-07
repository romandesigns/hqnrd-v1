import { SectionPropTypes } from "@/types";
import { twMerge } from "tailwind-merge";

export const Section = ({ children, className = "" }: SectionPropTypes) => {
  return (
    <section
      className={twMerge(
        `w-full my-2 px-2 py-10 lg:py-15 snap-y flex items-center justify-center ${className}`
      )}
    >
      <div className="w-full mx-auto max-w-[90rem] text-center flex flex-items justify-center items-center flex-col h-full">
        {children}
      </div>
    </section>
  );
};
