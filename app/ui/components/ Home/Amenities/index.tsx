import { HeadingSection } from "@/app/ui/features/SectionHeading";
import { Section } from "@/app/ui/layout";
import { amenities } from "./amenities";
import { Gallery } from "./Gallery";

export function Amenities() {
  return (
    <Section>
      <HeadingSection
        highlight="Your comfort is our priority"
        title="Providing the best amenities for your stay!"
        highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
      />
      <div className="flex gap-4 flex-col lg:flex-row w-full">
        {/* Images */}
        <Gallery />
        {/* Amenities Card */}
        <article className="bg-white flex items-center justify-center lg:flex-[1.2] flex-col rounded-md">
          <ul className="py-20 lg:py-10 px-2 grid grid-cols-2 w-full gap-4 lg:gap-6 sm:grid-cols-3 lg:px-14 rounded-md">
            {amenities.map((amenity, idx) => (
              <li key={idx} className="flex items-center justify-start">
                <span className="order-2 text-[.8rem]">{amenity.label}</span>
                <span className="order-1 w-5 h-5 mr-1">
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
