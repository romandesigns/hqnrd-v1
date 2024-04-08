import { HeadingSection } from "@/app/ui/features";
import { BiGroup } from "@/app/ui/icons";
import { Section } from "@/app/ui/layout";
import React from "react";

export function Categories() {
  return (
    <Section className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <HeadingSection
        highlight="Available Categories"
        title="Select your Room Type and reserve now!"
        highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
        className="relative z-[4]"
      />
      <article className="relative h-full w-full overflow-hidden rounded-md p-20">
        <div className="relative z-[3] mx-auto lg:max-w-4xl">
          <ul className="grid h-[36rem] w-full grid-cols-2 grid-rows-4 gap-2 sm:h-[40rem]">
            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-500/15 shadow-sm shadow-sky-500/20 ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-sm">Basic</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-500/15 shadow-sm shadow-sky-500/20 ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-sm">Double Room</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-100/15 shadow-sm shadow-sky-500/20 ease-out hover:cursor-pointer focus:shadow-sm md:transition  md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-sm">Standard</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="row-start-2 row-end-4 flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-100/15 shadow-sm shadow-sky-500/20 ease-out hover:cursor-pointer focus:shadow-sm md:transition  md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-sm">Double Bed</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="col-start-1 col-end-3 row-start-4 row-end-5 flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-100/15 shadow-sm shadow-sky-500/20 ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-sm">Family</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border border-sky-100/15 shadow-sm ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span>Executive</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-primary-500/80 bg-cover bg-center bg-no-repeat mix-blend-plus-darker" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-cover bg-center bg-no-repeat" />
      </article>
    </Section>
  );
}
