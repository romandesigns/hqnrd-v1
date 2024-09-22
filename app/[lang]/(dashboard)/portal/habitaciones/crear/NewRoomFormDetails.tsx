"use client";

import { Media } from "@/app/ui/components/dashboard/layout/Main/habitaciones/crear/Media";
import Offerings from "@/app/ui/components/dashboard/layout/Main/habitaciones/crear/Offerings";
import RoomDescriptionForm from "@/app/ui/components/dashboard/layout/Main/habitaciones/crear/RoomDescription";
import { useRoomStore } from "@/store/rooms";
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
} from "@/utils/actions/roomActions";
import { InputRef, message, Switch } from "antd";
import cn from "classnames";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { roomAmenities, roomFeatures } from "./NewRoomFormIcons";

interface FileListProps {
  featuredImageCard: string;
  ogImage: string;
}

const roomInitialDetails: RoomDetailsPayload = {
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

export default function NewRoomFormDetails({
  params: { lang },
  fetchedCategories,
}: NewRoomFormDetailsProps) {
  const [categories, setCategories] =
    useState<RoomCategory[]>(fetchedCategories);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const inputRef = useRef<InputRef>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [roomDetails, setRoomDetails] =
    useState<RoomDetailsPayload>(roomInitialDetails);
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [mediaFilesCount, setMediaFilesCount] = useState(0);

  const [selectedFeatures, setSelectedFeatures] = useState<
    { iconName: string; value: boolean }[]
  >(
    roomFeatures.map((feature) => ({
      iconName: feature.iconName,
      value: false,
    })),
  );

  const [selectedAmenities, setSelectedAmenities] = useState<
    { iconName: string; value: boolean }[]
  >(
    roomAmenities.map((amenity) => ({
      iconName: amenity.iconName,
      value: false,
    })),
  );

  // Zustand store
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
  console.log(roomDetails);
  const handleCreateNewRoom = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await newRoomAction(roomDetails, lang);
      if (isNewRoomActionResponse(response)) {
        if (response.error) {
          messageApi.error(response.error);
        } else if (response.data) {
          messageApi.success("Room created successfully!");
          if (response.data[0].id) {
            setCreatedRoom(response.data[0]);
            setCurrentStep(3);
          }
        }
      } else {
        messageApi.error("Unexpected response format. Please try again.");
      }
    } catch (error) {
      console.error("Error creating room:", error);
      messageApi.error("Failed to create the room. Please try again.");
    }
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
      setRoomDetails({
        ...roomDetails,
        features: selectedFeatures.map((feature) => ({
          iconName: feature.iconName,
          value: feature.value,
        })),
      });
    } else {
      setSelectedAmenities((prev) =>
        prev.map((item) =>
          item.iconName === iconName ? { ...item, value: checked } : item,
        ),
      );
      setRoomDetails({
        ...roomDetails,
        amenities: selectedAmenities.map((amenity) => ({
          iconName: amenity.iconName,
          value: amenity.value,
        })),
      });
    }
  };

  const handleIncreaseStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleDecreaseStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderFeaturesAndAmenities = (
    items: typeof roomFeatures | typeof roomAmenities,
    type: "feature" | "amenity",
  ) => {
    return items.map((item, index) => (
      <div className="my-[0.1rem] flex items-start justify-between" key={index}>
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
  };

  return (
    <>
      {contextHolder}
      <div>
        <ul className="relative mx-auto grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-3 py-8 pt-10">
          <li
            className={twMerge(
              `relative flex h-2 w-2 items-center justify-center rounded-full bg-primary-100/30 p-3 text-xs text-white`,
              currentStep >= 1 &&
                "bg-primary-500/80 [&>span+span]:text-primary-500/80 [&>span]:text-white",
            )}
          >
            <span className="text-primary-500/80">1</span>
            <span className="absolute top-10 text-xs text-primary-500/30">
              Description
            </span>
          </li>
          <li className="h-1 w-20 bg-primary-100/30" />
          <li
            className={twMerge(
              `relative flex h-2 w-2 items-center justify-center rounded-full bg-primary-100/30 p-3 text-xs text-white`,
              currentStep >= 2 &&
                "bg-primary-500/80 [&>span+span]:text-primary-500/80 [&>span]:text-white",
            )}
          >
            <span className="text-primary-500/80">2</span>
            <span className="absolute top-10 text-xs text-primary-500/30">
              Offerings
            </span>
          </li>
          <li className="h-1 w-20 bg-primary-100/30" />
          <li
            className={twMerge(
              `relative flex h-2 w-2 items-center justify-center rounded-full bg-primary-100/30 p-3 text-xs text-white`,
              currentStep === 3 &&
                "bg-primary-500/80 [&>span+span]:text-primary-500/80 [&>span]:text-white",
            )}
          >
            <span className="text-primary-500/80">3</span>
            <span className="absolute top-10 text-xs text-primary-500/30">
              Media
            </span>
          </li>
        </ul>
      </div>
      <section className="mx-auto mt-2 flex h-full w-full flex-col items-center justify-center gap-4 p-2">
        <form
          onSubmit={handleCreateNewRoom}
          className={twMerge(
            `relative grid w-full max-w-xl grid-cols-1 grid-rows-[auto_auto] gap-4 rounded-md`,
            cn({
              "!max-w-xl": currentStep === 1,
              "!max-w-3xl": currentStep === 2,
              "max-w-6xl": mediaFilesCount === 0,
              "max-w-lg": mediaFilesCount === 1,
              "max-w-5xl": mediaFilesCount === 3 || mediaFilesCount === 4,
            }),
          )}
        >
          {currentStep === 1 && (
            <RoomDescriptionForm
              handleIncreaseStep={handleIncreaseStep}
              handleInputChange={handleInputChange}
              categories={categories}
              newCategoryName={newCategoryName}
              setNewCategoryName={setNewCategoryName}
              handleNewCategory={handleNewCategory}
            />
          )}
          {currentStep === 2 && (
            <>
              <Offerings
                renderFeaturesAndAmenities={renderFeaturesAndAmenities}
                handleInputChange={handleInputChange}
                handleDecreaseStep={handleDecreaseStep}
              />
            </>
          )}
          {currentStep === 3 && (
            <>
              <Media
                setMediaFilesCount={setMediaFilesCount}
                mediaFilesCount={mediaFilesCount}
                handleDecreaseStep={handleDecreaseStep}
                handleIncreaseStep={handleIncreaseStep}
              />
            </>
          )}
        </form>
      </section>
    </>
  );
}
