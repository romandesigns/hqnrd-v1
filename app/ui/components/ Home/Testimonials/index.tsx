import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout/Section";
import { testimonials } from "@/public/assets/data/testimonials";
import TestimonialList from "./Testimonial";

export function Testimonials() {
  return (
    <Section className="relative w-full rounded-md px-2">
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[80%] translate-y-[20%] rounded-full bg-primary-500 opacity-50 blur-[80px]" />
      </div>
      <article className="h-full w-full max-w-6xl">
        <div className="relative h-full w-full rounded-md p-2 sm:px-4">
          <HeadingSection
            highlight="Google Testimonials"
            title="See what our guests have to say about us!"
            highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
          />
          <TestimonialList testimonials={testimonials} className="!pl-[2rem]" />
        </div>
      </article>
    </Section>
  );
}
