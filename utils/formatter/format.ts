import { Locale } from "@/i18n-config";
import moment from 'moment-timezone';

export const format = {
  // Format number as currency
  currency: (num: number, locale: string = 'en-US', currency: string = 'USD') => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(num);
  },

  // Convert the first letter of each word to uppercase
  firstLetterToUpperCase: (str: string) => {
    if (!str || typeof str !== 'string') return '';
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },

  // Convert all words to lowercase
  convertAllWordsToLowerCase: (str: string) => {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase();
  },

  // Convert a Unix timestamp to a formatted date string
  convertDate: (date: number, formatStr: string = "MMMM Do YYYY, h:mm:ss a") => {
    return moment.unix(date).format(formatStr);
  },

  // Shared button object for social sharing
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
      title,
      description: text,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/habitacion/${url}`,
    };
  },

  // Format and transform categories
  categories: (cat: string) => {
    if (!cat || typeof cat !== 'string') return '';
    const category = cat
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return category === "Habitaciones" ? "All Categories" : category;
  },

  // Get remaining time until a due date
  getRemainingTime: (dueDate: string | undefined) => {
    const timeZone = 'America/New_York';
    if (!dueDate) {
      return 'No due date set';
    }

    const dueDateTimeStamp = moment.tz(dueDate, timeZone);
    const now = moment.tz(timeZone);
    const diff = dueDateTimeStamp.diff(now);
    const duration = moment.duration(diff);

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const remainingTimeParts = [];
    if (days > 0) remainingTimeParts.push(`${days}d`);
    if (hours > 0) remainingTimeParts.push(`${hours}h`);
    if (minutes > 0) remainingTimeParts.push(`${minutes}m`);
    if (seconds > 0) remainingTimeParts.push(`${seconds}s`);

    return remainingTimeParts.join(':');
  },

  // Transform category names to a different format
  transformCategory: (cat: string) => {
    if (!cat || typeof cat !== 'string') return 'not-found';
    const categoriesMap: { [key: string]: string } = {
      "basicas": "basic",
      "doble-cama": "double-bed",
      "ejecutivas": "executive",
      "dobles": "double-room",
      "standards": "standard",
      "familiar": "familiar",
    };
    return categoriesMap[cat] || "not-found";
  },

  // Currency conversion formatting
  currencyConversion: (currency: number, locale: string = 'en-US') => {
    return new Intl.NumberFormat(locale).format(currency);
  },

  // Sanitize a path to remove quotes and semicolons
  sanitizePath: (path: string) => {
    if (!path || typeof path !== 'string') return '';
    return path.replace(/['"]+/g, "").replace(/;+/g, "");
  },

  // Format a date string into a readable format
  formatDate: (date: string | Date, formatStr: string = "MMMM Do YYYY") => {
    return moment(date).format(formatStr);
  },

  // Format a number with commas as thousand separators
  numberWithCommas: (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  // Truncate a string to a specified length and add ellipsis
  truncate: (str: string, length: number) => {
    if (!str || typeof str !== 'string') return '';
    return str.length > length ? str.substring(0, length) + '...' : str;
  },

  // Capitalize the first letter of a string
  capitalizeFirstLetter: (str: string) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};
