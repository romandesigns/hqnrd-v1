import { Locale } from "@/i18n-config";
import { CSSProperties } from "react";
import {IconType} from "react-icons";

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
  role: string;
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
  dob: string;
  age: number;
  email: string;
  phone: string;
  accountType: string;
  accountStatus: string;
  identification: string;
};

export enum IssuesTypes {
  DEVELOPMENT = "Development",
  ADMINISTRATIVE = "Administrative",
}

export type DataSource = {
  key: React.Key;
  title: string;
  type: string;
  assignee: string;
  priority: string;
  page: string;
  component: string;
  status: string;
  description: string;
}[];

export type StaffMember = {
  id: string;
  role: string;
  name: string;
};

export type UserSignUpTypes = {
  id: string;
  name: string;
};


export type SupportTableProps = {
  lang: Locale;
  className?: string;
  dataSource?: TicketTableDataTypes[]; // dataSource can now be undefined
  user: UserSignUpTypes;
  staffMembers: StaffMember[];
};

// export type TicketTableDataTypes = {
//   key: React.Key;
//   title: string;
//   assignee: string;
//   type: string;
//   priority: string;
//   page: string;
//   component: string;
//   status: string;
//   description: string;
//   actions: React.ReactNode | React.ReactNode[] | undefined;
// };

export enum DevTaskTypes {
  FIX = "fix",
  NEW_IMPLEMENTATION = "new implementation",
  OPTIMIZATION = "optimization",
  NA = "n/a",
}

export type TicketFormTypes = {
  title: string;
  type: string;
  priority: string;
  developmentType?: string;
  page?: string;
  component?: string;
  description?: string;
  due: string;
  lang?: Locale;
  status: string;
  dev_task: DevTaskTypes;
  assigned: boolean;
  assignee_id: string;
  author_id: string;
  assignee_name: string;
  author_name: string;
};

export type TicketTableDataTypes = {
  id: React.Key;
  title: string;
  type: "development" | "administrative";
  priority: "high" | "medium" | "low";
  devtask: "new implementation" | "fix" | "optimization";
  page: string;
  component: string;
  description: string;
  due: string;
  status: "backlog" | "in progress" | "done" | "cancelled";
  created_at: string;
  assignee: string;
  author: string;
  author: string;
  assigned: boolean;
  assignee: string;
  assignee_id: string;
  author_id: string;
  userId: string;
};

export type UserSignUpPayloadTypes = {
  name: string;
  lastName: string;
  dob: string;
  gender: string;
  email: string;
  phone_country: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export type StaffMemberTypes = {
  id: string;
  role: string;
  name: string;
  last_name: string;
}

export type TicketTypes = {
  key?: React.Key,
  id: string,
  created_at: string,
  title: string,
  author_name: string,
  assigned: boolean,
  assignee_name: string,
  component: string,
  description: string,
  dev_task: "new implementation" | "fix" | "optimization",
  due: string,
  page:string,
  priority: "high" | "medium" | "low",
  status:"backlog" | "in progress" | "done" | "cancelled",
  type: "development" | "administrative",
  assignee_id:string,
  author_id: string,
  ticket_duration: string
}

export type TicketResponseTypes = {
  error:any,
  data:TicketTypes
  count: any,
  status: number,
  statusText: string
}

export type UserProfileTypes = {
  authenticated: string | undefined,
  dob: string,
  email: string,
  email_verified: boolean,
  gender: string,
  id: string,
  last_name: string,
  name: string,
  phone: string,
  phone_country: string,
  phone_verified: boolean,
  role: string,
  sub: string
}

export type closeTicketPayloadTypes = {
  status: string;
  resolution: string;
  ticketId: string;
  lang: string;
  taskCompletionDuration: string;
}

export type NewRoomCategoryTypes = {
  name: string;
  slug: string;
  lang: string;
}

export type RoomCategory = {
  id: string;
  name: string;
  slug: string;
}

export type NewRoomFormDetailsProps = {
  params: { lang: Locale };
  fetchedCategories: RoomCategory[];
}

export type NewRoomActionResponse = {
  error?: string;
  data?: any; // Adjust 'any' to the actual data type expected if known
}

export type RoomDetails  ={
  category_id: string;
  room_number: number;
  meta_description: string;
  title: string;
  price_per_night: number;
  page_description: string;
  bed_quantity: number;
  square_feet: number;
  features: { iconName: string; value: boolean }[];
  amenities: { iconName: string; value: boolean }[];
  [key: string]: any; // Additional dynamic properties
}
export type MediaFileTypes = {
  ogImg: string;
  cardImg: string;
  roomLayout: string;
  roomVideo: string;
  gallery: string[];
}

export type RoomDetailsPayload  ={
  category_id: string;
  room_number: number;
  meta_description: string;
  title: string;
  price_per_night: number;
  page_description: string;
  bed_quantity: number;
  square_feet: number;
  features: { iconName: string; value: boolean }[];
  amenities: { iconName: string; value: boolean }[];
  mediaFiles: MediaFileTypes;
  [key: string]: any; // Additional dynamic properties
}

export interface RooomMetaDataProps {
  handleIncreaseStep: () => void;
  categories: { id: string; name: string }[];
  newCategoryName: string;
  setNewCategoryName: (value: string) => void;
  handleNewCategory: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => Promise<void>;
  handleInputChange: (key: string, value: string | number) => void;

  handlePreview: () => void;
}

export interface RoomOfferings {
  handleIncreaseStep: () => void;
  handleDecreaseStep: () => void;
  renderFeaturesAndAmenities:(items: typeof roomFeatures | typeof roomAmenities, type: "feature" | "amenity") => JSX.Element[];
  currentStep: number;
  handleInputChange: (key: string, value: string | number) => void;
  roomFeatures: { iconName: string; defaultName:IconType, value: boolean }[];
  roomAmenities: { iconName: string; defaultName:IconType, value: boolean }[];
  setCurrentStep:Dispatch<SetStateAction<number>>;
  steps:number[]
}