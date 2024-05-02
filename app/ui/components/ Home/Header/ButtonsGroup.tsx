import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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
        `flex w-full items-center justify-center gap-2 p-2 px-2 ${className}`,
      )}
    >
      <Link
        href={`/${lang}/auth/iniciar-session`}
        className="w-full flex-1 md:max-w-80"
      >
        <Button
          type="primary"
          className="w-full !border-none font-semibold uppercase md:max-w-80"
          size="large"
        >
          Sign In
        </Button>
      </Link>
      <Link
        href={`/${lang}/habitaciones`}
        className="w-full flex-1 md:max-w-80"
      >
        <Button
          className="w-full !border-none !bg-neutral-800 font-semibold uppercase !text-neutral-100"
          size="large"
        >
          Rooms
        </Button>
      </Link>
    </div>
  );
}
