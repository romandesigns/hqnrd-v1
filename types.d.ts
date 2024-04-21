import { CSSProperties } from "react";

export type CarouselTypes = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type ShareDataPropTypes = {
  className?: string;
  iconColor?: string;
  data: {
    title: string;
    text: string;
    url: string;
  };
};

export type SectionPropTypes = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export type TestimonialPropTypes = {
  reviewerName: string;
  description: string;
  rating: string;
  review: { rooms: number; service: number; location: number }[];
};

export type FlagsTypes = {
  name: string;
  icon: string;
  locale: Locale;
};

export type HomeImageGallery = {
  liClassNames: string;
  src: string;
  alt: string;
  style: CSSProperties;
  sizes: string;
};

export type RoomTypes = {
  id: number;
  roomNumber: number;
  slug: string;
  category: string;
};

export type Reservation = {
  adultsCount: number;
  checkOutDate: string;
  checkInDate: string;
  checkOutTime: string;
  checkInTime: string;
  roomNumber: string;
  childrenCount?: number;
  message?: string;
  reservationId: string;
  totalDays: number;
  totalGuests: number;
  discount: "5%" | "8%" | "0";
};
