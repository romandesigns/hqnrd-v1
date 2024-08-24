"use client";

import RoomDescriptionForm from "@/app/ui/components/dashboard/layout/Main/habitaciones/crear/RoomDescription";
import { useRoomStore } from "@/store/rooms";
import {
  NewRoomActionResponse,
  NewRoomFormDetailsProps,
  RoomCategory,
  RoomDetails,
} from "@/types/types";
import { newRoomCategoryAction } from "@/utils/actions/roomActions";
import { createClient } from "@/utils/supabase/client";
import type { GetProp, UploadProps } from "antd";
import { InputRef, message, Switch } from "antd";
import { useRef, useState } from "react";
import Amenities from "./Amenities";
import Features from "./Features";
import { roomAmenities, roomFeatures } from "./NewRoomFormIcons";

interface FileListProps {
  featuredImageCard: string;
  ogImage: string;
}

export default function NewRoomFormDetails({
  params: { lang },
  fetchedCategories,
}: NewRoomFormDetailsProps) {
  const [categories, setCategories] =
    useState<RoomCategory[]>(fetchedCategories);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const inputRef = useRef<InputRef>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [roomDetails, setRoomDetails] = useState<RoomDetails | {}>({});
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [fileList, setFileList] = useState<FileListProps>();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const cardImageRef = useRef<HTMLDivElement>(null);
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const steps = [1, 2, 3];

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [selectedFeatures, setSelectedFeatures] = useState<
    { iconName: string; value: boolean }[]
  >(
    roomFeatures.map((feature) => ({
      iconName: feature.iconName,
      defaultName: String(feature.defaultName),
      value: false,
    })),
  );

  const [selectedAmenities, setSelectedAmenities] = useState<
    { iconName: string; value: boolean }[]
  >(
    roomAmenities.map((amenity) => ({
      iconName: amenity.iconName,
      defaultName: String(amenity.defaultName),
      value: false,
    })),
  );

  const supabase = createClient();
  // type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const { setCreatedRoom, newRoom } = useRoomStore((state) => state);
  const handleNewCategory = async (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    if (!newCategoryName) {
      messageApi.error("Category name is required");
      return;
    }

    const response = await newRoomCategoryAction(newCategoryName, lang);

    if (!response) {
      messageApi.error("No response from server. Please try again.");
      return;
    }

    if (response.error) {
      messageApi.error(response.error);
      return;
    }

    if (response.data) {
      setCategories((prev) => [...prev, ...response.data]);
      setNewCategoryName("");
      inputRef.current?.focus();
    }
  };

  function isNewRoomActionResponse(
    response: any,
  ): response is NewRoomActionResponse {
    return (
      response &&
      typeof response === "object" &&
      ("error" in response || "data" in response)
    );
  }

  const handleCreateNewRoom = async (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    try {
      const finalRoomDetails = {
        ...roomDetails,
        features: selectedFeatures.map(({ iconName, value }) => ({
          iconName,
          value,
        })),
        amenities: selectedAmenities.map(({ iconName, value }) => ({
          iconName,
          value,
        })),
      };

      console.log("Final room details:", finalRoomDetails);
      // const response = await newRoomAction(finalRoomDetails, lang);

      // if (isNewRoomActionResponse(response)) {
      //   if (response.error) {
      //     messageApi.error(response.error);
      //   } else if (response.data) {
      //     setCreatedRoom(response.data[0]);
      //     messageApi.success("Room created successfully!");
      //     setRoomDetails({});
      //     setSelectedFeatures(
      //       roomFeatures.map((feature) => ({
      //         iconName: feature.iconName,
      //         value: false,
      //       })),
      //     );
      //     setSelectedAmenities(
      //       roomAmenities.map((amenity) => ({
      //         iconName: amenity.iconName,
      //         value: false,
      //       })),
      //     );
      //   }
      // } else {
      //   messageApi.error("Unexpected response format. Please try again.");
      // }
    } catch (error) {
      console.error("Error creating room:", error);
      messageApi.error("Failed to create the room. Please try again.");
    }
  };

  const handlePreview = () => {
    const finalRoomDetails = {
      ...roomDetails,
      features: selectedFeatures,
      amenities: selectedAmenities,
    };
    console.log("Preview room:", finalRoomDetails);
  };

  const handleInputChange = (key: keyof RoomDetails, value: any) => {
    setRoomDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleSwitchChange = (
    type: "feature" | "amenity",
    iconName: string,
    checked: boolean,
  ) => {
    if (type === "feature") {
      setSelectedFeatures((prev) =>
        prev.map((item) =>
          item.iconName === iconName ? { ...item, value: checked } : item,
        ),
      );
    } else {
      setSelectedAmenities((prev) =>
        prev.map((item) =>
          item.iconName === iconName ? { ...item, value: checked } : item,
        ),
      );
    }
  };
  console.log(currentStep);
  const renderFeaturesAndAmenities = (
    items: typeof roomFeatures | typeof roomAmenities,
    type: "feature" | "amenity",
  ) =>
    items.map((item, index) => (
      <div
        className="my-[0.1rem] flex items-start justify-between gap-2"
        key={index}
      >
        <div className="flex items-center justify-start gap-2">
          <item.defaultName />
          <p className="text-xs">{item.description}</p>
        </div>
        <Switch
          size="small"
          checked={
            type === "feature"
              ? selectedFeatures.find((f) => f.iconName === item.iconName)
                  ?.value
              : selectedAmenities.find((a) => a.iconName === item.iconName)
                  ?.value
          }
          onChange={(checked) =>
            handleSwitchChange(type, item.iconName, checked)
          }
        />
      </div>
    ));

  return (
    <>
      {contextHolder}
      <div>
        <ul className="relative mx-auto grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-3 py-4 pt-5">
          <li className="relative flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-4 text-xs text-white">
            <span>1</span>
            <span className="absolute top-10 text-xs text-red-500/30">
              Description
            </span>
          </li>
          <li className="h-1 w-20 bg-red-500" />
          <li className="relative flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-4 text-xs text-white">
            <span>2</span>
            <span className="absolute top-10 text-xs text-red-500/30">
              Offerings
            </span>
          </li>
          <li className="h-1 w-20 bg-red-500" />
          <li className="relative flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-4 text-xs text-white">
            <span>3</span>
            <span className="absolute top-10 text-xs text-red-500/30">
              Media
            </span>
          </li>
        </ul>
      </div>
      <section className="mx-auto mt-2 flex h-full w-full flex-col items-center justify-center gap-4 p-2">
        <form className="relative grid w-full max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-4 rounded-md">
          {currentStep === 1 && (
            <RoomDescriptionForm
              handleCreateNewRoom={handleCreateNewRoom}
              handlePreview={handlePreview}
              handleInputChange={handleInputChange}
              categories={categories}
              newCategoryName={newCategoryName}
              setNewCategoryName={setNewCategoryName}
              handleNewCategory={handleNewCategory}
              setSteps={setCurrentStep}
              steps={steps}
              currentStep={currentStep}
            />
          )}
          {currentStep === 2 && (
            <>
              <Features
                renderFeaturesAndAmenities={renderFeaturesAndAmenities}
                roomFeatures={roomFeatures}
                handleInputChange={handleInputChange}
              />
              <Amenities
                roomAmenities={roomAmenities}
                renderFeaturesAndAmenities={renderFeaturesAndAmenities}
              />
            </>
          )}

          {/* Features


         Amenities

          */}
        </form>
      </section>
    </>
  );
}
