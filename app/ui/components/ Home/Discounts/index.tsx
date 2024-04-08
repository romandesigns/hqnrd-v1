import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout";
import { CardDiscount } from "./CardDiscount";

export function Discounts() {
  return (
    <Section className="bg-tertiary-100/20 relative w-full rounded-md px-2">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <article className="z-[2] h-full w-full rounded-md">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection
            highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
            highlight="Discounts Available!"
            title="Stay Longer by Spending Less"
          />
          <div className="flex w-full flex-col items-center justify-center gap-20 md:flex-row">
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
