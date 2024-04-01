import { Button } from "antd";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Locale } from "@/i18n-config";

export function HeaderButtonsGroup({
  className = "",
  lang,
}: {
  className?: string;
  lang: Locale;
}) {
  return (
    <div
      className={twMerge(
        `p-2 px-2 flex items-center justify-center gap-2 w-full ${className}`
      )}
    >
      <Link
        href={`/${lang}/iniciar-session`}
        className="flex-1 w-full md:max-w-80"
      >
        <Button
          type="primary"
          className="font-semibold uppercase !border-none w-full md:max-w-80"
          size="large"
        >
          Sign In
        </Button>
      </Link>
      <Link
        href={`/${lang}/habitaciones`}
        className="flex-1 w-full md:max-w-80"
      >
        <Button
          className="font-semibold uppercase !bg-neutral-800 !border-none !text-neutral-100 w-full"
          size="large"
        >
          Rooms
        </Button>
      </Link>
    </div>
  );
}
