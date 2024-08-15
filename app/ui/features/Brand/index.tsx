import { Locale } from "@/i18n-config";
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
  lang,
  subheading,
  headingLevel = "h1",
  className,
  logoSize = 22,
  figClassName = "",
}: {
  lang?: Locale;
  heading?: string;
  subheading?: string;
  headingLevel?: string;
  className?: string;
  figClassName?: string;
  logoSize?: number;
}) {
  return (
    <Link href={`/${lang}`} className={cn(className ? className : "")}>
      <figure className="flex gap-2">
        <Image
          src="/assets/images/brand/logo-original.svg"
          width={logoSize}
          height={logoSize}
          alt="Company logo -  Hotel Quinto Nivel RD"
        />
        <figcaption className={figClassName}>
          {headingLevel === "h1" ? (
            <h1 className="mt-1 text-[0.7rem] font-black uppercase">
              Hotel Quinto Nivel RD
            </h1>
          ) : (
            <h2 className="mt-1 text-xs font-black uppercase">
              Hotel Quinto Nivel RD
            </h2>
          )}
          <p className="text-left text-xs font-semibold">Como estar en casa!</p>
        </figcaption>
      </figure>
    </Link>
  );
}
