import { testimonials } from "@/public/assets/data/testimonials";
import TestimonialList from "./Testimonial";
import { Section } from "@/app/ui/layout/Section";
import { HeadingSection } from "@/app/ui/common/SectionHeading";

export default function Testimonials() {
  return (
    <Section className="w-full px-2 rounded-md sm:py-0 sm:px-10 relative">
      <article className="w-full h-full max-w-6xl bg-white">
        <div className="w-full h-full py-10 p-2 rounded-md sm:px-4 relative">
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
      <div className="bg-[url('/assets/general/quotes-icon.svg')] bg-no-repeat bg-[right_0rem_bottom] lg:bg-[length:30%] bg-[length:70%] absolute top-0 left-0 right-0 bottom-0 opacity-[0.08] -z-[2]" />
    </Section>
  );
}
