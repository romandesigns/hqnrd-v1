import React from "react";
import { amenities } from "../../../../public/assets/data/amenities";

export function Amenities() {
  return (
    <ul className="grid w-full grid-cols-2 gap-4 rounded-md py-4 sm:grid-cols-5 lg:gap-6">
      {amenities.map((amenity, idx) => (
        <li key={idx} className="flex items-center justify-start">
          <span className="order-2 text-[.8rem]">{amenity.label}</span>
          <span className="order-1 mr-1 h-5 w-5">
            <amenity.Icon size={18} color="#333333" />
          </span>
        </li>
      ))}
    </ul>
  );
}
