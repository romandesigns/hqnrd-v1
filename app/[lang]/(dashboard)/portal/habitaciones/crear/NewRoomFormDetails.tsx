"use client";

import {
  Description,
  Media,
  Offerings,
} from "@/app/ui/components/dashboard/layout/Main/rooms/new";
import { roomInitialDetails } from "@/store/InitialStates";
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
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [mediaFilesCount, setMediaFilesCount] = useState<number>(0);

  // Zustand store
  const { newRoom: room, setCreatedRoom } = useRoomStore((state) => state);

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

  const handleCreateNewRoom = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (room.id) {
      setCurrentStep(2);
    } else {
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
      // Update selected features with the new checked state
      const updatedFeatures = selectedFeatures.map((item) =>
        item.iconName === iconName ? { ...item, value: checked } : item,
      );
      setSelectedFeatures(updatedFeatures); // Update the state for selected features

      // Update roomDetails with the latest features
      setRoomDetails((prevRoomDetails) => ({
        ...prevRoomDetails,
        features: updatedFeatures.map((feature) => ({
          iconName: feature.iconName,
          value: feature.value,
        })),
      }));
    } else {
      // Update selected amenities with the new checked state
      const updatedAmenities = selectedAmenities.map((item) =>
        item.iconName === iconName ? { ...item, value: checked } : item,
      );
      setSelectedAmenities(updatedAmenities); // Update the state for selected amenities

      // Update roomDetails with the latest amenities
      setRoomDetails((prevRoomDetails) => ({
        ...prevRoomDetails,
        amenities: updatedAmenities.map((amenity) => ({
          iconName: amenity.iconName,
          value: amenity.value,
        })),
      }));
    }
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
              ? room.features.find((f) => f.iconName === item.iconName)?.value
              : room.amenities.find((a) => a.iconName === item.iconName)?.value
          }
          onChange={(checked) =>
            handleSwitchChange(type, item.iconName, checked)
          }
        />
      </div>
    ));
  };

  const handleIncreaseStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleDecreaseStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      {contextHolder}
      {/* STEPS */}
      <ul className="relative mx-auto grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-3 py-8 pt-10">
        <li
          className={twMerge(
            `relative flex h-2 w-2 items-center justify-center rounded-full bg-primary-100/30 p-3 text-xs text-white`,
            currentStep >= 0 &&
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
            currentStep >= 1 &&
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
            currentStep === 2 &&
              "bg-primary-500/80 [&>span+span]:text-primary-500/80 [&>span]:text-white",
          )}
        >
          <span className="text-primary-500/80">3</span>
          <span className="absolute top-10 text-xs text-primary-500/30">
            Media
          </span>
        </li>
      </ul>

      <section className="mx-auto mt-2 flex h-full w-full flex-col items-center justify-center gap-4 p-2">
        <form
          onSubmit={handleCreateNewRoom}
          className={twMerge(
            `relative grid w-full max-w-xl grid-cols-1 grid-rows-[auto_auto] gap-4 rounded-md`,
            cn({
              "!max-w-xl": currentStep === 0,
              "!max-w-3xl": currentStep === 1,
              "max-w-6xl": mediaFilesCount === 0,
              "max-w-lg": mediaFilesCount === 1,
              "max-w-5xl": mediaFilesCount === 3 || mediaFilesCount === 4,
            }),
          )}
        >
          {currentStep === 0 && (
            <Description
              room={room}
              handleIncreaseStep={handleIncreaseStep}
              handleInputChange={handleInputChange}
              categories={categories}
              newCategoryName={newCategoryName}
              setNewCategoryName={setNewCategoryName}
              handleNewCategory={handleNewCategory}
            />
          )}
          {currentStep === 1 && (
            <>
              <Offerings
                room={room}
                renderFeaturesAndAmenities={renderFeaturesAndAmenities}
                handleInputChange={handleInputChange}
                handleDecreaseStep={handleDecreaseStep}
              />
            </>
          )}
          {currentStep === 2 && (
            <>
              <Media
                lang={lang}
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
