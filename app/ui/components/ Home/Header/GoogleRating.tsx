import { FcGoogle } from "@/app/ui/icons";
import { Rate } from "antd";
import { twMerge } from "tailwind-merge";

export function GoogleRating({ className = "" }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `z-[3] flex  items-end justify-center py-2 ${className}`,
      )}
    >
      <div className="flex  items-center justify-center gap-2 rounded-full bg-black/20 p-1 px-2">
        <FcGoogle />
        <h3 className="justify-centerc flex items-center gap-2 text-sm text-white">
          Google rating
          <span>
            <Rate allowHalf value={4.5} disabled />
          </span>
        </h3>
      </div>
    </div>
  );
}
