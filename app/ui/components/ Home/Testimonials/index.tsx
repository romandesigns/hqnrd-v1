import { testimonials } from "@/public/assets/data/testimonials";
import TestimonialList from "./Testimonial";
import { Section } from "@/app/ui/layout/Section";
import { HeadingSection } from "@/app/ui/common/SectionHeading";

export default function Testimonials() {
  return (
    <Section className="w-full px-2 rounded-md sm:py-0 sm:px-10 relative">
      <article className="w-full h-full max-w-6xl">
        <div className="w-full h-full p-2 rounded-md sm:px-4 relative">
          <HeadingSection
            highlight="Google Testimonials"
            title="See what our guests have to say about us!"
            accent="neutral"
          />
          <div className="my-20 ">
            <TestimonialList testimonials={testimonials} />
          </div>
        </div>
      </article>
    </Section>
  );
}
