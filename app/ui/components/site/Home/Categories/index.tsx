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
        <div className="relative z-[3] mx-auto h-full">
          <ul className="grid h-full grid-cols-2 grid-rows-4 gap-2 lg:gap-4">
            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="rounded-md bg-blue-100 p-2">
                    <FaBed className="text-blue-500" />
                  </span>
                  <h5 className="text-sm">Basic</h5>
                </div>
                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  Essential amenities for <strong>1-2</strong> guests, offering
                  a functional stay.
                </p>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/basicas`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="relative rounded-md bg-blue-100 p-2">
                    <FaBed className="-translate-x-1 -translate-y-1 text-blue-500" />
                    <span className="absolute left-3 top-3 opacity-50">
                      <FaBed className="text-blue-500" />
                    </span>
                  </span>
                  <h5 className="text-sm">Double Room</h5>
                </div>

                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  Two separate rooms with a shared bathroom, fits up to
                  <strong> 8 </strong>
                  guests.
                </p>

                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/doble`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="rounded-md bg-yellow-100 p-2">
                    <FaStar className="text-yellow-500" />
                  </span>
                  <h5 className="text-sm">Standard</h5>
                </div>
                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  Comfort for <strong> 1-2 </strong> guests, equipped with
                  necessary amenitie.
                </p>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/standards`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>

            <li className="row-start-2 row-end-4 flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="relative rounded-md bg-blue-100 p-2">
                    <span className="absolute -top-3 left-6 rounded-md bg-blue-200 p-1 text-xs text-blue-500">
                      2x
                    </span>
                    <FaBed className="text-blue-500" />
                  </span>
                  <h5 className="text-sm">Double Bed</h5>
                </div>
                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  Spacious room with two full-size beds and a twin bed, suitable
                  for up to <strong> 8 </strong> guests.
                </p>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/doble-camas`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>

            <li className="col-start-1 col-end-3 row-start-4 row-end-5 flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="rounded-md bg-violet-100 p-2">
                    <MdFamilyRestroom className="text-violet-500" />
                  </span>
                  <h5 className="text-sm">Family</h5>
                </div>
                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  Full apartment with separate rooms, accommodating up to
                  <strong> 10 </strong>
                  guests.
                </p>
                <Button className="!bg-neutral-800 !text-white">
                  <Link href={`/${lang}/habitaciones/familiares`}>
                    Select Category
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex items-center justify-center overflow-hidden rounded-md bg-white p-5 font-bold">
              <div className="flex w-full flex-col items-start justify-center gap-4 py-12 pt-10 text-left md:max-w-64 md:p-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="rounded-md bg-neutral-100 p-2">
                    <FaSuitcase className="text-neutral-500" />
                  </span>
                  <h5 className="text-sm">Executive</h5>
                </div>
                <p className="text-xs font-normal leading-relaxed text-neutral-500">
                  For <strong>1-3</strong> business travelers, includes premium
                  services.
                </p>
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
