import { twMerge } from "tailwind-merge";

export function HeaderButtonsGroup({ className = "" }: { className?: string }) {
  return (
    <div className={twMerge(`p-4 w-full ${className}`)}>
      <button className="flex-1 uppercase">Sign In</button>
      <button className="flex-1 uppercase">Rooms</button>
    </div>
  );
}
