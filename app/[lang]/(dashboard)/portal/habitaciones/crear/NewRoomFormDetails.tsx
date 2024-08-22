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
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

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
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const cardImageRef = useRef<HTMLDivElement>(null);

  const [selectedFeatures, setSelectedFeatures] = useState<
    { iconName: string; defaultName: string; value: boolean }[]
  >(
    roomFeatures.map((feature) => ({
      iconName: feature.iconName,
      defaultName: String(feature.defaultName),
      value: false,
    })),
  );

  const [selectedAmenities, setSelectedAmenities] = useState<
    { iconName: string; defaultName: string; value: boolean }[]
  >(
    roomAmenities.map((amenity) => ({
      iconName: amenity.iconName,
      defaultName: String(amenity.defaultName),
      value: false,
    })),
  );

  const supabase = createClient();
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

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
        features: selectedFeatures.map(({ iconName, defaultName, value }) => ({
          iconName,
          defaultName,
          value,
        })),
        amenities: selectedAmenities.map(
          ({ iconName, defaultName, value }) => ({
            iconName,
            defaultName,
            value,
          }),
        ),
      };

      const response = await newRoomAction(finalRoomDetails, lang);

      if (isNewRoomActionResponse(response)) {
        if (response.error) {
          messageApi.error(response.error);
        } else if (response.data) {
          setCreatedRoom(response.data[0]);
          messageApi.success("Room created successfully!");
          // Reset the form if needed
          setRoomDetails({});
          setSelectedFeatures(
            roomFeatures.map((feature) => ({
              iconName: feature.iconName,
              defaultName: String(feature.defaultName),
              value: false,
            })),
          );
          setSelectedAmenities(
            roomAmenities.map((amenity) => ({
              iconName: amenity.iconName,
              defaultName: String(amenity.defaultName),
              value: false,
            })),
          );
        }
      } else {
        messageApi.error("Unexpected response format. Please try again.");
      }
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

  const handleFileUpload = async (
    newRoom: RoomDetailsPayload | {},
    file: UploadFile<any>[],
  ) => {
    try {
      const { slug: roomCategory } = categories.filter(
        (category) =>
          category.id === (newRoom as RoomDetailsPayload).category_id,
      )[0];
      const { room_number } = newRoom as RoomDetailsPayload;
      const imageFile = file[0].originFileObj as File;

      // Read the file into a buffer
      const buffer = await imageFile.arrayBuffer();

      // Define the path for the image
      const path = `rooms/${roomCategory}/${String(room_number)}/image.webp`;

      // Call the API route
      const response = await fetch(`/${lang}/api/image-upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path,
          fileBuffer: Array.from(new Uint8Array(buffer)), // Convert buffer to Array
          lang,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Uploaded optimized WebP file to path:", data.path);
        message.success("Image uploaded successfully");
      } else {
        throw new Error(data.error || "Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      message.error("Failed to upload the image. Please try again.");
    }
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    handleFileUpload(newRoom, newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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

        <article className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-md bg-primary-100/10 p-3">
          <div>
            <div className="grid grid-cols-[1.4fr_1fr] grid-rows-1 gap-4">
              {/* Open Graph Image */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase underline">
                  Open Graph Image
                </h3>
                <div className="rounded-md bg-primary-600/5 p-2">
                  <div className="w-full">
                    <span className="mb-4 block">
                      <figure className="aspect-og flex items-center justify-center bg-neutral-400">
                        OG IMAGE
                      </figure>
                    </span>
                    <Button type="primary">Save OG Image</Button>
                  </div>
                </div>
              </div>

              {/* Open Graph Image */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase underline">
                  Open Graph Image
                </h3>
                <div className="rounded-md bg-primary-600/5 p-2">
                  <div className="w-full">
                    <span className="mb-4 block">
                      <ImgCrop rotationSlider aspect={4 / 3}>
                        <Upload
                          name="feature_image"
                          listType="picture-card"
                          fileList={fileList}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 1 && (
                            <Button type="primary">Save OG Image</Button>
                          )}
                        </Upload>
                      </ImgCrop>
                      <figure
                        className="flex aspect-[4/3] items-center justify-center bg-neutral-400"
                        ref={cardImageRef}
                      >
                        OG IMAGE
                      </figure>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="h-full w-full rounded-md bg-primary-100/10">
          Preview
        </article>
      </section>
    </>
  );
}
