import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout/Section";
import { testimonials } from "@/public/assets/data/testimonials";
import TestimonialList from "./Testimonial";
import { BlurredBackground } from "./BlurredBackground";

export function Testimonials() {
  return (
    <Section>
      <BlurredBackground />
      <article className="flex h-full w-full max-w-6xl items-center justify-center">
        <div className="relative h-full w-full rounded-md">
          <HeadingSection
            highlight="Google Testimonials"
            title="See what our guests have to say about us!"
          />
          <TestimonialList testimonials={testimonials} className="!pl-[2rem]" />
        </div>
      </article>
    </Section>
  );
}
