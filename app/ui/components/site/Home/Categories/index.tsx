import { Section } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import Link from "next/link";

import { Button } from "antd";
import { HeadingSection } from "@/app/ui/features";
import { FaBed, FaStar, FaSuitcase, MdFamilyRestroom } from "@/app/ui/icons";

export function Categories({ lang }: { lang: Locale }) {
  return (
    <Section>
      <article className="flex h-full w-full flex-col items-center justify-center rounded-md bg-neutral-900 pb-10 lg:p-20 lg:py-10 lg:pb-20">
        <HeadingSection
          highlight="Available Categories"
          title="Select your Room Type and reserve now!"
          className="relative z-[4]"
          highlightClassName="bg-white/10 px-10"
          descriptionClassName="text-white font-semibold"
        />
        <ul className="grid gap-3 px-4 sm:grid-cols-2 sm:grid-rows-3 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="rounded-md bg-neutral-100 p-2">
                <FaBed className="text-neutral-500" />
              </span>
              <h5 className="text-sm font-bold text-white">Basic</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              Essential amenities for <strong>1-2</strong> guests, offering a
              functional stay.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/basicas`}>SELECT</Link>
            </Button>
          </li>

          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="relative rounded-md bg-neutral-100 p-2">
                <FaBed className="-translate-x-1 -translate-y-1 text-neutral-500" />
                <span className="absolute left-3 top-3 opacity-50">
                  <FaBed className="text-neutral-500" />
                </span>
              </span>
              <h5 className="text-sm font-bold text-white">Double Room</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              Two separate rooms with a shared bathroom, fits up to
              <strong> 8 </strong>
              guests.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/doble`}>SELECT</Link>
            </Button>
          </li>

          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="rounded-md bg-neutral-100 p-2">
                <FaStar className="text-neutral-500" />
              </span>
              <h5 className="text-sm font-bold text-white">Standard</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              Comfort for <strong> 1-2 </strong> guests, equipped with necessary
              amenitie.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/standards`}>SELECT</Link>
            </Button>
          </li>

          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="relative rounded-md bg-neutral-100 p-2">
                <span className="absolute -top-3 left-6 rounded-md bg-neutral-200 p-1 text-xs font-semibold text-neutral-500">
                  2x
                </span>
                <FaBed className="text-neutral-500" />
              </span>
              <h5 className="text-sm font-bold text-white">Double Bed</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              Comfort for <strong> 1-2 </strong> guests, equipped with necessary
              amenitie.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/doble-camas`}>SELECT</Link>
            </Button>
          </li>

          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="rounded-md bg-neutral-100 p-2">
                <MdFamilyRestroom className="text-neutral-500" />
              </span>
              <h5 className="text-sm font-bold text-white">Family</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              Full apartment with separate rooms, accommodating up to
              <strong> 10 </strong>
              guests.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/familiares`}>SELECT</Link>
            </Button>
          </li>

          <li className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-white/5 p-10 text-left sm:max-w-xs">
            <div className="flex items-center justify-start gap-4">
              <span className="rounded-md bg-neutral-100 p-2">
                <FaSuitcase className="text-neutral-500" />
              </span>
              <h5 className="text-sm font-bold text-white">Executive</h5>
            </div>
            <p className="text-xs font-normal leading-relaxed text-neutral-200">
              For <strong>1-3</strong> business travelers, includes premium
              services.
            </p>
            <Button className="block w-full !bg-neutral-800 !text-white">
              <Link href={`/${lang}/habitaciones/ejecutivas`}>SELECT</Link>
            </Button>
          </li>
        </ul>
      </article>
    </Section>
  );
}
