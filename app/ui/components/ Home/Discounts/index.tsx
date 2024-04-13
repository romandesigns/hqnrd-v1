import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout";
import { CardDiscount } from "./CardDiscount";

export function Discounts() {
  return (
    <Section className="bg-tertiary-100/20 relative w-full rounded-md px-2">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="absolute  bottom-auto left-auto right-0 top-0 -z-[1] h-[500px] w-[500px] -translate-x-[70vw] translate-y-[40%] rounded-full bg-orange-300/60 opacity-50 blur-[80px]" />

      <article className="z-[2] h-full w-full rounded-md">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection
            highlight="Discounts Available!"
            title="Stay Longer by Spending Less"
          />
          <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
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
