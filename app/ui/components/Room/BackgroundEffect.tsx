import React from "react";

export function BackgroundEffect() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <div className="bg-trasparent absolute right-[50vw] top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-[10vh] h-[500px] w-[500px] -translate-x-[80%] translate-y-[20%] rounded-full bg-primary-500 opacity-50 blur-[80px]" />
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#b7bdc8,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div> */}
      <div className="bg-trasparent absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20vw] translate-y-[50vh] rounded-full bg-orange-300/60 opacity-50 blur-[80px]" />
      </div>
    </>
  );
}
