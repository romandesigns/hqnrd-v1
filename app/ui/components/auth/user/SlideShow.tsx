import { CarouselTypes } from "@/types";
import cn from "classnames";
import { AuthCarousel } from "./Gallery";

export function SlideShow({
  images,
  className,
}: {
  images: CarouselTypes[];
  className: string;
}) {
  return (
    <article
      className={cn(
        `rounded-lr-md rounded-lr-md relative h-full overflow-hidden rounded-bl-md rounded-tl-md bg-white ${className}`,
      )}
    >
      <AuthCarousel images={images} />
    </article>
  );
}
