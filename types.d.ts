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
export enum Gender {
  MALE = "male",
  FEMAKE = "female",
  OTHER = "other",
}

export enum Roles {
  GUEST = "huesped",
  RECEPTIONIST = "recepcionist",
  MANAGER = "manager",
  HOUSEKEEPING = "housekeeping",
  CEO = "ceo",
  DEVELOPER = "developer",
}

export type Reservation = {
  adultsCount: number;
  checkOutDate: string;
  checkInDate: string;
  checkOutTime: string;
  checkInTime: string;
  roomNumber: string;
  childrenCount: number;
  message: string;
  reservationId: string;
  totalDays: number;
  totalGuests: number;
  pricePerNight: number;
  discount: "5%" | "8%" | "0";
};

type IdentityData = {
  accountType: string;
  dob: string;
  email: string;
  email_verified: boolean;
  gender: string;
  last_name: string;
  name: string;
  phone: string;
  phone_verified: boolean;
  sub: string;
  tel_country: string;
  user_role: string;
};

type Identity = {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: IdentityData;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string;
};

type AppMetadata = {
  provider: string;
  providers: string[];
};

type UserMetadata = IdentityData;

type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
