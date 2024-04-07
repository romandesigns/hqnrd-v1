import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout";
import { CardDiscount } from "./CardDiscount";

export function Discounts() {
  return (
    <Section className="w-full bg-tertiary-100/20 px-2 rounded-md relative">
      <article className="w-full h-full rounded-md z-[2]">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection
            highlightClassName="border bg-teal-500/20 border-teal-500 text-teal-800"
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
              bgColor="bg-neutral-800/90"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
