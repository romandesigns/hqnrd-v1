import { twMerge } from "tailwind-merge";

export function GoogleRating({ className = "" }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `z-[3] flex items-center justify-center py-2 ${className}`
      )}
    >
      <h3 className="flex items-center justify-centerc text-white text-sm">
        <span className="mx-2">Google rating 4.5</span>
      </h3>
    </div>
  );
}
