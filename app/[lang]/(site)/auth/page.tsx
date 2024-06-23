import { Card } from "@/app/ui/components/site/auth/Card";
import { HeadingSection } from "@/app/ui/features";
import { FaRegBuilding, HiOutlineUser } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { CONSTANTS } from "@/utils/constants";
import Link from "next/link";

export default function Page({
  params: { lang },
  searchParams: { success },
}: Readonly<{ params: { lang: Locale }; searchParams: { success: string } }>) {
  return (
    <Card lang={lang} className="min-h-dvh">
      <article className="flex h-full flex-col items-center justify-center gap-10 rounded-md border p-2 py-10">
        <HeadingSection
          highlight={CONSTANTS.Heading.CREATE_ACCOUNT}
          title=""
          className="relative z-[4] !my-0 flex flex-col items-center justify-center"
          highlightClassName="text-center mx-auto mt-0 px-8"
        />
        <div className="flex items-center justify-center gap-4">
          <Link
            href={`/auth/crear-cuenta/usuario`}
            className="flex flex-col items-center justify-center"
          >
            <div className="h-36 w-36 rounded-md border border-primary-100 bg-primary-50 p-1 sm:hover:cursor-pointer sm:hover:bg-primary-100">
              <span className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-md bg-primary-100/15 p-2">
                <HiOutlineUser size={25} className="text-primary-500" />
                <h3 className="text-[0.65rem] font-bold uppercase text-primary-800">
                  Guest
                </h3>
              </span>
            </div>
          </Link>
          <Link
            href={`/auth/crear-cuenta/empresa`}
            className="flex flex-col items-center justify-center"
          >
            <div className="h-36 w-36 gap-1 rounded-md border border-neutral-200 bg-neutral-50 p-1 sm:hover:cursor-pointer sm:hover:bg-neutral-100">
              <span className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-md bg-neutral-100 p-2">
                <FaRegBuilding size={25} className="text-neutral-800" />
                <h3 className="text-[0.65rem] font-bold uppercase text-neutral-800">
                  Company
                </h3>
              </span>
            </div>
          </Link>
        </div>
        <p className="text-center text-xs font-bold">
          <span className="block pb-2">{CONSTANTS.Contact.PHONE_CTA}</span>
          <span className="block font-bold text-primary-500 underline">
            {CONSTANTS.Contact.PHONE_NUMBER}
          </span>
        </p>
      </article>
    </Card>
  );
}
