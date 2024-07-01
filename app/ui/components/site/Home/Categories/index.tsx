import { HeadingSection } from "@/app/ui/features";
import { BiGroup } from "@/app/ui/icons";
import { Section } from "@/app/ui/layout";

export function Categories() {
  return (
    <Section>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <HeadingSection
        highlight="Available Categories"
        title="Select your Room Type and reserve now!"
        className="relative z-[4]"
      />
      <article className="relative h-full w-full overflow-hidden rounded-md p-2 md:p-40">
        <div className="relative z-[3] mx-auto lg:max-w-3xl">
          <ul className="grid h-[36rem] w-full grid-cols-2 grid-rows-4 gap-2 sm:h-[40rem] lg:gap-4">
            <li className="flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Basic</span>
                <p className="absolute bottom-1 right-1 flex items-center justify-center rounded-full bg-neutral-100/10 p-2 py-1 md:bottom-2 md:right-2 md:bg-neutral-200/40">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="translate-t-4 ml-1 text-[.6rem] text-xs font-semibold md:text-[.7rem]">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:row-start-2 md:row-end-4 md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Double Room</span>
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
            <li className="flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:delay-75">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border ease-out hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Standard</span>
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
            <li className="row-start-2 row-end-4 flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:delay-75">
              <div className="bor/15 shadow-sky--pointer relative flex h-full w-full flex-col items-center justify-center rounded-md border shadow-sm focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Double Bed</span>
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
            <li className="col-start-1 col-end-3 row-start-4 row-end-5 flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:col-start-1 md:col-end-2 md:delay-75">
              <div className="shadow-ky-500/20 hover:sm relative flex h-full w-full flex-col items-center justify-center rounded-md border ease-out md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Family</span>
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
            <li className="flex items-center justify-center overflow-hidden rounded-md border bg-white p-3 font-bold md:row-start-4 md:row-end-5 md:delay-75">
              <div className="relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md border focus:shadow-sm md:transition md:duration-150 md:hover:shadow-lg md:hover:ease-in">
                <span className="text-xs">Executive</span>
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
      </article>
    </Section>
  );
}
