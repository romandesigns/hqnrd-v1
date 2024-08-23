"use client";

import {
  NewRoomActionResponse,
  NewRoomFormDetailsProps,
  RoomCategory,
  RoomDetails,
  RoomDetailsPayload,
} from "@/types/types";
import {
  newRoomAction,
  newRoomCategoryAction,
  roomFeaturedCardImage,
  roomFeaturedCardImageAction,
} from "@/utils/actions/roomActions";
import { Button, InputRef, message, Switch } from "antd";
import { useRef, useState } from "react";
import Amenities from "./Amenities";
import Description from "./Description";
import Features from "./Features";
import MetaData from "./MetaData";
import { roomAmenities, roomFeatures } from "./NewRoomFormIcons";
import { createClient } from "@/utils/supabase/client";
import { useRoomStore } from "@/store/rooms";
import { Upload } from "antd";
import type {
  GetProp,
  UploadFile,
  UploadProps,
  GetProp,
  UploadProps,
} from "antd";
import ImgCrop from "antd-img-crop";

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
  const [fileList, setFileList] = useState<FileListProps>();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const cardImageRef = useRef<HTMLDivElement>(null);
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

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
      <section className="mt-2 grid h-full w-full grid-cols-1 items-stretch justify-stretch gap-4 p-2 lg:grid-cols-[3fr_4fr_4fr] 2xl:grid-cols-[3fr_4fr_4fr]">
        <form className="relative grid h-full grid-cols-1 gap-4 rounded-md bg-primary-100/10 p-3">
          {/* Metadata */}
          <MetaData
            handleCreateNewRoom={handleCreateNewRoom}
            handlePreview={handlePreview}
            handleInputChange={handleInputChange}
            categories={categories}
            newCategoryName={newCategoryName}
            setNewCategoryName={setNewCategoryName}
            handleNewCategory={handleNewCategory}
          />
          {/* Description */}
          <Description handleInputChange={handleInputChange} />

          {/* Features */}
          <Features
            renderFeaturesAndAmenities={renderFeaturesAndAmenities}
            roomFeatures={roomFeatures}
            handleInputChange={handleInputChange}
          />

          {/* Amenities */}
          <Amenities
            roomAmenities={roomAmenities}
            renderFeaturesAndAmenities={renderFeaturesAndAmenities}
          />
        </form>
      </section>
    </>
  );
}
