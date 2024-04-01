import { twMerge } from "tailwind-merge";
import { Rate, Flex } from "antd";
import { FcGoogle } from "@/app/ui/icons";

export function GoogleRating({ className = "" }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `z-[3] flex  items-end justify-center py-2 ${className}`
      )}
    >
      <div className="bg-black/20  flex gap-2 items-center justify-center p-1 px-2 rounded-full">
        <FcGoogle />
        <h3 className="flex gap-2 items-center justify-centerc text-white text-sm">
          Google rating
          <span>
            <Rate allowHalf value={4.5} disabled />
          </span>
        </h3>
      </div>
    </div>
  );
}
