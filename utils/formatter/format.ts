import moment from "moment";
import { Locale } from "@/i18n-config";

export const format = {
  currency: (num: number) => {
    return `$${num.toLocaleString()}`;
  },
  firstLetterToUpperCase: (str: string) => {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  },
  convertDate: (date: number) => {
    return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
  },
  sharedBtObj: ({
    title,
    text,
    lang,
    url,
  }: {
    title: string;
    text: string;
    lang: Locale;
    url: string;
  }) => {
    return {
      title: "",
      description: "",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/habitacion/${url}`,
    };
  },
  categories: (cat: string) => {
    const category = cat
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    return category === "Habitaciones" ? "All Categories" : category;
  },
  transformCategory: (cat: string) => {
    switch (cat) {
      case "basicas":
        return "basic";
      case "doble-cama":
        return "double-bed";
      case "ejecutivas":
        return "executive";
      case "dobles":
        return "double-room";
      case "standards":
        return "standard";
      case "familiar":
        return "familiar";
      default:
        return "not-found";
    }
  },
  currencyConversion: (currency: number, locale: string) => {
    return currency.toLocaleString();
  },
  sanitizePath: (path: string) => {
    return path?.replace(/['"]+/g, "").replace(/;+/g, "");
  },
};
