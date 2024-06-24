import { SectionPropTypes } from "@/types/types";
import { twMerge } from "tailwind-merge";

export const Section = ({ children, className = "" }: SectionPropTypes) => {
  return (
    <section
      className={twMerge(
        `lg:py-15 my-2 flex w-full snap-y items-center justify-center px-2 py-10 ${className}`,
      )}
    >
      <div className="flex-items mx-auto flex h-full w-full max-w-[90rem] flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  );
};
