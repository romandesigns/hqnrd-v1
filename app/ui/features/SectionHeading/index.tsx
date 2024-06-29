import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export function HeadingSection({
  highlight,
  title,
  highlightClassName,
  descriptionClassName,
  Icon,
  className,
}: {
  highlight: string;
  title: string;
  highlightClassName?: string;
  descriptionClassName?: string;
  Icon?: IconType;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-10 w-full lg:my-20 ${className}`}>
      <div
        className={twMerge(
          `relative mt-4 inline-flex items-center justify-center rounded-full bg-neutral-500/20 bg-neutral-800 p-1 px-2 text-xs font-bold text-white ${highlightClassName}`,
        )}
      >
        <p>{highlight}</p>
        {Icon && (
          <span className="absolute -right-4 -top-4 animate-bounce">
            <Icon size={20} />
          </span>
        )}
      </div>
      {title && (
        <h2
          className={twMerge(
            `text-md my-2 w-full text-center font-black text-neutral-800 underline lg:text-lg ${descriptionClassName}`,
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
