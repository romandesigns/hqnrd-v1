import { Locale } from "@/i18n-config";
import React from "react";

export default function Page(
  props: Readonly<{
    params: { lang: Locale; category: string; unidad: string };
  }>,
) {
  return <div>Page</div>;
}
