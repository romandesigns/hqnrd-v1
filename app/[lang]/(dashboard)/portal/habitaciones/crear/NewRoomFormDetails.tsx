"use client";

import { MdAdd } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { newRoomCategoryAction } from "@/utils/actions/roomActions";
import {
  Button,
  Divider,
  Input,
  InputRef,
  message,
  Select,
  Space,
  Switch,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { roomAmenities, roomFeatures } from "./NewRoomFormIcons";

interface RoomCategory {
  id: number;
  name: string;
  slug: string;
}

interface NewRoomFormDetailsProps {
  params: { lang: Locale };
  fetchedCategories: RoomCategory[];
}

interface RoomDetails {
  categoryId?: number;
  roomNumber?: number;
  metaDescription?: string;
  title?: string;
  pricePerNight?: number;
  pageDescription?: string;
  bedQuantity?: number;
  squareFeet?: number;
  features?: { iconName: string; value: boolean }[];
  amenities?: { iconName: string; value: boolean }[];
  [key: string]: any; // Additional dynamic properties
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
  const [roomDetails, setRoomDetails] = useState<RoomDetails>({});

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

  useEffect(() => {
    console.log(roomDetails);
  }, [roomDetails]);

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

  const handleCreateNewRoom = () => {
    const finalRoomDetails = {
      ...roomDetails,
      features: selectedFeatures,
      amenities: selectedAmenities,
    };
    console.log("New room created:", finalRoomDetails);
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
      <div className="flex items-start justify-between gap-2" key={index}>
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
      <section className="mt-2 grid h-full w-full grid-cols-1 gap-4 p-2 lg:grid-cols-[3fr_4fr] 2xl:grid-cols-[2fr_4fr]">
        <form className="relative flex h-full w-full flex-col gap-3 rounded-md bg-primary-100/10 p-3">
          {/* Metadata */}
          <fieldset className="w-full">
            <div className="mb-1 flex items-center justify-between">
              <legend className="text-xs font-bold uppercase underline">
                Metadata
              </legend>
              <div className="flex items-center gap-2">
                <Button type="primary" onClick={handleCreateNewRoom}>
                  Save
                </Button>
                <Button className="md:!hidden" onClick={handlePreview}>
                  Preview
                </Button>
              </div>
            </div>
            <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
              <Select
                size="large"
                className="w-full placeholder:text-xs"
                placeholder="Select category"
                onChange={(value) => handleInputChange("categoryId", value)}
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider style={{ margin: "8px 0" }} />
                    <Space className="!grid w-full !grid-cols-[1fr_auto] items-center">
                      <Input
                        placeholder="Enter new category"
                        ref={inputRef}
                        className="flex-1 placeholder:text-xs"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                      <Button
                        type="primary"
                        icon={<MdAdd />}
                        onClick={handleNewCategory}
                      >
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
              />
              <Input
                size="large"
                type="number"
                min={0}
                placeholder="Unit Number"
                className="placeholder:text-xs"
                onChange={(e) =>
                  handleInputChange(
                    "roomNumber",
                    Number(e.target.value && e.target.value),
                  )
                }
              />
              <Input.TextArea
                size="large"
                placeholder="Meta Description"
                maxLength={160}
                autoSize={{ minRows: 3, maxRows: 5 }}
                className="placeholder:text-xs"
                onChange={(e) =>
                  handleInputChange(
                    "metaDescription",
                    e.target.value && e.target.value,
                  )
                }
              />
            </div>
          </fieldset>

          {/* Description */}
          <fieldset className="w-full">
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Description
            </legend>
            <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
              <div className="flex gap-2">
                <Input
                  size="large"
                  placeholder="Title e.g. Basic"
                  className="flex-[8] placeholder:text-xs"
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
                <Input
                  size="large"
                  type="number"
                  step={150}
                  min={0}
                  placeholder="Price e.g. 1500"
                  className="flex-[3] placeholder:text-xs"
                  onChange={(e) =>
                    handleInputChange("pricePerNight", Number(e.target.value))
                  }
                />
              </div>
              <Input.TextArea
                size="large"
                placeholder="Page Description"
                maxLength={304}
                autoSize={{ minRows: 5, maxRows: 5 }}
                className="placeholder:text-xs"
                onChange={(e) =>
                  handleInputChange("pageDescription", e.target.value)
                }
              />
            </div>
          </fieldset>

          {/* Features */}
          <fieldset className="w-full">
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Features
            </legend>
            <div className="grid grid-cols-2 gap-4 rounded-md bg-primary-600/5 p-2 py-4">
              {renderFeaturesAndAmenities(roomFeatures, "feature")}
              <Divider style={{ margin: "8px 0" }} className="col-span-full" />
              <div className="col-span-full grid grid-cols-2 gap-4">
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

          {/* Amenities */}
          <fieldset className="w-full">
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Amenities
            </legend>
            <div className="grid grid-cols-2 gap-4 rounded-md bg-primary-600/5 p-2 py-4">
              {renderFeaturesAndAmenities(roomAmenities, "amenity")}
            </div>
          </fieldset>
        </form>

        <article className="h-full w-full rounded-md border max-md:hidden">
          Content Here
        </article>
      </section>
    </>
  );
}
