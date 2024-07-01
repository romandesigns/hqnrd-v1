import { HeadingSection } from "@/app/ui/features";
import { FaBed, FaStar, FaSuitcase, MdFamilyRestroom } from "@/app/ui/icons";
import { Section } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";

export function Categories({ lang }: { lang: Locale }) {
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
      <article className="h-auto w-full max-w-5xl overflow-hidden rounded-md p-2">
        <div className="z-[3] mx-auto h-full">
          <ul className="grid h-full grid-cols-2 grid-rows-4 gap-2 lg:gap-4">
            <li className="relative flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <FaBed />
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Basic</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    Essential amenities for <strong>1-2</strong> guests,
                    offering a functional stay.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/basicas`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
            <li className="relative flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <FaBed className="-translate-x-1 -translate-y-1" />
                <span className="absolute left-3 top-3 opacity-50">
                  <FaBed />
                </span>
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Double Room</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    Two separate rooms with a shared bathroom, fits up to
                    <strong> 8 </strong>
                    guests.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/doble`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
            <li className="relative flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <FaStar />
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Standard</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    Comfort for <strong> 1-2 </strong> guests, equipped with
                    necessary amenitie.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/standards`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
            <li className="relative row-start-2 row-end-4 flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <span className="absolute -top-3 left-6 rounded-md border bg-white p-1 text-xs">
                  2x
                </span>
                <FaBed />
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Double Bed</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    Spacious room with two full-size beds and a twin bed,
                    suitable for up to <strong> 8 </strong> guests.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/doble-camas`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
            <li className="relative col-start-1 col-end-3 row-start-4 row-end-5 flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <MdFamilyRestroom />
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Family</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    Full apartment with separate rooms, accommodating up to
                    <strong> 10 </strong>
                    guests.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/familiares`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
            <li className="relative flex items-center justify-center overflow-hidden rounded-md bg-white p-3 pt-10 font-bold">
              <span className="absolute left-4 top-4 rounded-md border p-2">
                <FaSuitcase />
              </span>
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <span className="border-l-2 border-neutral-500 pl-2">
                  <h5 className="mb-2 text-xs">Executive</h5>
                  <p className="text-xs font-normal text-neutral-500">
                    For <strong>1-3</strong> business travelers, includes
                    premium services.
                  </p>
                </span>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/ejecutivas`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </Section>
  );
}
