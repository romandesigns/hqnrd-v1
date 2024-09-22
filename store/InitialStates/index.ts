import {RoomDetailsPayload} from "@/types/types";


export const roomInitialDetails: RoomDetailsPayload = {
    category_id: "",
    room_number: 0,
    meta_description: "",
    title: "",
    price_per_night: 0,
    page_description: "",
    bed_quantity: 0,
    square_feet: 0,
    features: [],
    amenities: [],
    media_files: {
      og_img: "",
      card_img: "",
      room_layout: "",
      room_video: {
        src: "",
        poster: "",
      },
      gallery: {
        t_16_9: "",
        t_1_1: "",
        r_9_16: "",
        b_1_1: "",
        b_16_9: "",
      },
    },
  };