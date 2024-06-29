import React from "react";

export function BlurredBackground() {
  return (
    <>
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[80%] translate-y-[20%] rounded-full bg-primary-500 opacity-50 blur-[80px]" />
      </div>
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[40vw] translate-y-[10vh] rounded-full bg-orange-300/60 opacity-50 blur-[80px]" />
      </div>
    </>
  );
}
