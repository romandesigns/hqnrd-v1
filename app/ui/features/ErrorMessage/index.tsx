import React from "react";
import { IoClose } from "../../icons";
import Link from "next/link";

export function ErrorMessage({
  errorMessage,
  lang,
  path,
}: {
  errorMessage: string;
  lang: string;
  path: string;
}) {
  const origin = process.env.NEXT_PUBLIC_ORIGIN;

  return errorMessage ? (
    <p className="relative my-4 p-1 text-right">
      <Link
        href={`${origin}/${lang}/${path}`}
        className="absolute -right-1 -top-4 rounded-full border-2 border-white bg-red-500 p-1"
      >
        <IoClose color="white" />
      </Link>
      <small className="rounded-md bg-red-500/20 p-3 text-right text-xs text-red-500">
        {errorMessage}
      </small>
    </p>
  ) : null;
}
