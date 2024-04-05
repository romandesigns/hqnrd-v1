import { Section } from "@/app/ui/layout";
import React from "react";
import { CardDiscount } from "./CardDiscount";
import { HeadingSection } from "@/app/ui/common/SectionHeading";

export function Discounts() {
  return (
    <Section className="w-full bg-tertiary-100/20 px-2 rounded-md sm:py-10 relative">
      <article className="w-full h-full rounded-md z-[2]">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection
            accent="text-tertiary-500 bg-tertiary-100/50"
            highlight="Discounts Available!"
            title="Stay Longer by Spending Less"
          />
          <div className="flex items-center justify-center w-full flex-col md:flex-row">
            <CardDiscount
              imgSrc="/assets/general/five-percent.svg"
              eligibleDays="Applicable When Booking 5 days"
              borderColor="border-primary-500"
              bgColor="bg-primary-500/90"
            />
            <CardDiscount
              imgSrc="/assets/general/eight-percent.svg"
              eligibleDays="Applicable When Booking 8 days"
              borderColor="border-neutral-500"
              bgColor="bg-neutral-500/90"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
