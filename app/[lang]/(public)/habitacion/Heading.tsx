import React from "react";

export function Heading({ heading }: { heading: string }) {
  return (
    <div className="flex w-full justify-between">
      <h3 className="font-bold">{heading}</h3>
    </div>
  );
}
