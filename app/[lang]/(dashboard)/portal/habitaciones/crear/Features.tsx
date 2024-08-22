import { IconType } from "react-icons";
import { Divider, Input } from "antd";

interface RoomFeatures {
  iconName: string;
  defaultName: IconType; // Updated to IconType
  description: string;
}

export default function Features({
  renderFeaturesAndAmenities,
  roomFeatures,
  handleInputChange,
}: {
  renderFeaturesAndAmenities: (
    features: RoomFeatures[],
    type: "feature" | "amenity", // Using the union type here
  ) => JSX.Element[];
  roomFeatures: RoomFeatures[];
  handleInputChange: (key: string, value: number) => void;
}) {
  return (
    <fieldset className="w-full rounded-md">
      <legend className="text-xs font-bold uppercase underline">
        Features
      </legend>
      <div className="grid grid-cols-2 gap-[0.5rem] rounded-md bg-primary-600/5 p-2">
        {renderFeaturesAndAmenities(roomFeatures, "feature")}
        <Divider className="col-span-full" />
        <div className="col-span-full grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <p className="mr-4 text-xs">Bed Quantity</p>
            <Input
              placeholder="1.5"
              size="middle"
              type="number"
              className="flex-1"
              onChange={(e) =>
                handleInputChange("bedQuantity", Number(e.target.value))
              }
            />
          </div>
          <div className="flex items-center">
            <p className="mr-4 text-xs">Square Feet</p>
            <Input
              placeholder="250"
              size="middle"
              type="number"
              className="flex-1"
              onChange={(e) =>
                handleInputChange("squareFeet", Number(e.target.value))
              }
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
