import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout";
import { amenities } from "./amenities";
import { Gallery } from "./Gallery";

export function Amenities() {
  return (
    <Section>
      <div className="absolute bottom-auto left-auto right-0 top-0 -z-[1] h-[500px] w-[500px] -translate-x-[10vw] translate-y-[40%] rounded-full bg-orange-300/50 opacity-50 blur-[80px]" />
      <HeadingSection
        highlight="Your comfort is our priority"
        title="Providing the best amenities for your stay!"
      />
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        {/* Images */}
        <Gallery />
        {/* Amenities Card */}
        <article className="flex flex-col items-center justify-center rounded-md bg-white lg:flex-[1.2]">
          <ul className="grid w-full grid-cols-2 gap-4 rounded-md px-2 py-20 sm:grid-cols-3 lg:gap-6 lg:px-14 lg:py-10">
            {amenities.map((amenity, idx) => (
              <li key={idx} className="flex items-center justify-start">
                <span className="order-2 text-[.8rem]">{amenity.label}</span>
                <span className="order-1 mr-1 h-5 w-5">
                  <amenity.Icon size={18} color="#333333" />
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
