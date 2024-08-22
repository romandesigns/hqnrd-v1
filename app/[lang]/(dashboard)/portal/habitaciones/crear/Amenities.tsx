import { IconType } from "react-icons";

interface RoomFeatures {
  iconName: string;
  defaultName: IconType; // Updated to IconType
  description: string;
}

export default function Amenities({
  roomAmenities,
  renderFeaturesAndAmenities,
}: {
  roomAmenities: RoomFeatures[];
  renderFeaturesAndAmenities: (
    features: RoomFeatures[],
    type: "feature" | "amenity", // Using the union type here
  ) => JSX.Element[];
}) {
  return (
    <fieldset className="w-full">
      <legend className="text-xs font-bold uppercase underline">
        Amenities
      </legend>
      <div className="grid grid-cols-2 gap-[0.5rem] rounded-md bg-primary-600/5 p-2 py-3">
        {renderFeaturesAndAmenities(roomAmenities, "amenity")}
      </div>
    </fieldset>
  );
}
