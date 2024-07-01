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
    <div className={`my-12 ${className}`}>
      <div
        className={twMerge(
          `relative mt-4 inline-flex items-center justify-center rounded-full bg-neutral-500/20 bg-neutral-800 p-1 px-2 text-xs font-bold text-white ${highlightClassName}`,
        )}
      >
        {highlight && (
          <>
            <p>{highlight}</p>
            {Icon && (
              <span className="absolute -right-4 -top-4 animate-bounce">
                <Icon size={20} />
              </span>
            )}
          </>
        )}
      </div>
      {title && (
        <h2
          className={twMerge(
            `my-2 w-full text-center text-sm font-extrabold text-neutral-800 lg:text-lg ${descriptionClassName}`,
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
