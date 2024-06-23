"use client";
import { ShareDataPropTypes } from "@/types/types";
import { twMerge } from "tailwind-merge";
import { PiShareNetworkBold } from "../../icons";

export function ShareBtn({ data, className, iconColor }: ShareDataPropTypes) {
  const showShareScreen = async () => {
    try {
      await navigator.share(data);
      console.log("Done");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className={twMerge(`rounded-md border p-1 ${className}`)}
      onClick={() => showShareScreen()}
    >
      <PiShareNetworkBold color={iconColor} />
    </button>
  );
}
