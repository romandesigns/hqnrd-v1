import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
/**
 * Component for rendering the brand logo.
 * @param heading - The heading to display.
 * @param subheading - The subheading to display.
 * @param headingLevel - The level of the heading.
 * @returns JSX.Element representing the brand logo.
 */
export function Brand({
  heading,
  subheading,
  headingLevel = "h1",
  className,
}: {
  heading?: string;
  subheading?: string;
  headingLevel?: string;
  className?: string;
}) {
  return (
    <Link href="/" className={cn(className ? className : "")}>
      <figure className="flex gap-2">
        <Image
          src="/assets/images/brand/logo-original.svg"
          width={25}
          height={25}
          alt="Company logo -  Hotel Quinto Nivel RD"
        />
        <figcaption>
          {headingLevel === "h1" ? (
            <h1 className="text-sm mt-1 uppercase font-black">
              Hotel Quinto Nivel RD
            </h1>
          ) : (
            <h2 className="font-bold text-sm mt-1">Hotel Quinto Nivel RD</h2>
          )}
          <p className="font-semibold text-xs">Como estar en casa!</p>
        </figcaption>
      </figure>
    </Link>
  );
}
