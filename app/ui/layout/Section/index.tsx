import { SectionPropTypes } from "@/types/types";
import { twMerge } from "tailwind-merge";

export const Section = ({ children, className = "" }: SectionPropTypes) => {
  return (
    <section
      className={twMerge(
        `relative my-2 flex w-full snap-center items-center justify-center rounded-md px-2 py-14 lg:py-16 ${className}`,
      )}
    >
      <div className="flex-items max-width mx-auto flex h-full w-full flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  );
};
