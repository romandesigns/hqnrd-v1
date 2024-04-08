import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout/Section";
import { testimonials } from "@/public/assets/data/testimonials";
import TestimonialList from "./Testimonial";

export function Testimonials() {
  return (
    <Section className="w-full px-2 rounded-md relative">
      <article className="w-full h-full max-w-6xl">
        <div className="w-full h-full p-2 rounded-md sm:px-4 relative">
          <HeadingSection
            highlight="Google Testimonials"
            title="See what our guests have to say about us!"
            highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
          />
          <TestimonialList testimonials={testimonials} />
        </div>
      </article>
    </Section>
  );
}
