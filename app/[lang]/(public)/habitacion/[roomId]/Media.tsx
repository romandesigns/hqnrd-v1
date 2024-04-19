import React from "react";
import Image from "next/image";

export function Media() {
  return (
    <>
      <div className="rounded-md bg-white">
        <h3 className="py-4 font-bold">Room Diagram</h3>
        <div className="p-4">
          <Image
            width={200}
            height={200}
            src="/assets/home/diagram/01.png"
            alt="Image diagram"
          />
        </div>
      </div>

      <div className="rounded-md bg-white">
        <h3 className="py-4 font-bold">Walkaround</h3>
        <div className="p-4">
          <Image
            width={200}
            height={200}
            src="/assets/home/diagram/01.png"
            alt="Image diagram"
          />
        </div>
      </div>
    </>
  );
}
