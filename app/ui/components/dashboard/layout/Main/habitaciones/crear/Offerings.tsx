import {
  roomFeatures,
  roomAmenities,
} from "@/app/[lang]/(dashboard)/portal/habitaciones/crear/NewRoomFormIcons";
import { FaChevronLeft } from "@/app/ui/icons";
import { Button, Divider, Input, InputRef } from "antd";
import { useRef } from "react";

import { IconType } from "react-icons";

type iconTypes = {
  iconName: string;
  defaultName: IconType;
  description: string;
}[];

type OfferingsPropTypes = {
  renderFeaturesAndAmenities: (
    items: iconTypes,
    type: "feature" | "amenity",
  ) => JSX.Element[];
  handleInputChange: (key: string, value: string | number) => void;
  handleDecreaseStep: () => void;
};

export default function Offerings({
  renderFeaturesAndAmenities,
  handleInputChange,
  handleDecreaseStep,
}: OfferingsPropTypes) {
  return (
    <>
      <div className="space-y-4 rounded-md bg-primary-100/10 p-3">
        <fieldset className="w-full rounded-md">
          <legend className="mb-4 flex items-center justify-start gap-2 text-xs font-bold uppercase">
            <span className="text-primary-600">{roomFeatures.length}</span>
            <span>Features</span>
          </legend>
          <div className="grid grid-cols-2 gap-4 rounded-md bg-primary-600/5 p-2">
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
                    handleInputChange("bed_quantity", Number(e.target.value))
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
                    handleInputChange("square_feet", Number(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="w-full">
          <legend className="mb-4 flex items-center justify-start gap-2 text-xs font-bold uppercase">
            <span className="text-primary-600">{roomAmenities.length}</span>
            <span>Amenities</span>
          </legend>
          <div className="grid grid-cols-2 gap-4 rounded-md bg-primary-600/5 p-2 py-3">
            {renderFeaturesAndAmenities(roomAmenities, "amenity")}
          </div>
        </fieldset>
      </div>

      <div className="itesm-center flex justify-center gap-2">
        <Button
          icon={<FaChevronLeft />}
          onClick={() => handleDecreaseStep()}
          size="large"
          className="!h-auto w-full !bg-neutral-800 !py-2 !text-white"
        />
        <Button
          htmlType="submit"
          size="large"
          className="!h-auto flex-1 !bg-neutral-800 !py-2 !text-white"
        >
          Next
        </Button>
      </div>
    </>
  );
}
