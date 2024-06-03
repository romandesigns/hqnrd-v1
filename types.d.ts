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

export enum AccountStatusEnum {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}
export enum IdentificationEnum {
  CEDULA = "Cedula",
  PASSPORT = "Passport",
}
export enum GenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

type Guest = {
  key: string;
  verified: striong;
  name: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  email: string;
  phone: string;
  accountType: string;
  accountStatus: string;
  identification: string;
};

// Define the type for the ticket form state
export type TicketFormTypes = {
  title: string;
  priority: string;
  dueDate: Dayjs;
  issueType: string;
  developmentType: string
  location: string;
  description: string;
  assignee: string;
};

// Define the type for the Select component options
export type TicketOption = {
  value: string;
  label: string | JSX.Element;
};

// Types
export type SupabaseUser = {
  dob: string;
  email: string;
  email_verified: boolean;
  gender: string;
  last_name: string;
  name: string;
  phone: string;
  phone_country: string;
  phone_verified: boolean;
  sub: string;
  user_role: string;
};

export type Staff = {
  assignee: { id:string, name: string, last_name: string },
  author: { id:string,name: string, last_name: string }
}

export type Ticket = {
  id: string;
  status: string;
  created_at: string; // ISO 8601 datetime
  title: string;
  author_id: string;
  assignee: string;
  description: string;
  dueDate: string; // ISO 8601 datetime
  implementationType: string;
  issueType: string;
  location: string;
  pageComponent: string;
  pageLocation: string;
  priority: string;
  staff: Staff;
};

export type TicketStaff = {
  id: string;
  name: string;
  last_name: string;
  user_role: string;
}