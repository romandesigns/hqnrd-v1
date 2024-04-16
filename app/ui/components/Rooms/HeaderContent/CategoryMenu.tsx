import React from "react";
import { Select } from "./Select";
import { Locale } from "@/i18n-config";

export const CategoryMenu = ({ lang }: { lang: Locale }) => {
  return <Select lang={lang} />;
};
