"use client";
import { FileInput, FileUploadModal } from "@/app/ui/features";
import { FaChevronLeft } from "@/app/ui/icons";
import { useRoomStore } from "@/store/rooms";
import { FileUploadResponseTypes } from "@/types/types";
import { CONSTANTS } from "@/utils/constants";
import { createClient } from "@/utils/supabase/client"; // Import Supabase client
import { Button, message } from "antd";
import classNames from "classnames";
import React, { createRef, useRef, useState } from "react";
import { ReactCropperElement } from "react-cropper";
import { twMerge } from "tailwind-merge";
import { MediaFileInputs } from "./MediaFileInputs";

export function Media({
  handleDecreaseStep,
  handleIncreaseStep,
  setMediaFilesCount,
  mediaFilesCount,
}: {
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
  setMediaFilesCount: React.Dispatch<React.SetStateAction<number>>;
  mediaFilesCount: number;
}) {
  const [image, setImage] = useState("");
  const cropperRef = createRef<ReactCropperElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [dir, setDir] = useState("");
  const [imgAspectRatio, setImgAspectRatio] = useState("1.91:1");
  const [ar, setAr] = useState(1);
  const [arUrlSegment, setArUrlSegment] = useState("1.91-1");

  const supabase = createClient();

  // Zustand store
  const {
    newRoom: room,
    updateRoom,
    addMediaFile,
  } = useRoomStore((state) => state);

  // Aspect Ratios
  const aspectRatios = [
    { title: "OG Image", ar: "1.91:1" },
    { title: "Room Layout", ar: "1:1" },
    { title: "Featured Card Image", ar: "4:3" },
    { title: "Image Gallery", ar: "16:9" },
    { title: "Room Video", ar: "16:9" },
  ];

  // Get input ref
  const inputRef = useRef<HTMLInputElement>(null);
  // Handle image upload onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
    const [category, ratio] = inputName.split("-ar-");

    if (ratio && ratio.includes(":")) {
      const [width, height] = ratio.split(":").map(Number);
      setArUrlSegment(`ar-${ratio.replace(/[.:]/g, "-")}`);
      setAr(width / height);
      setDir(category);
    } else {
      setAr(1);
    }

    let files = e.target.files;
    if (!files || files.length === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setIsModalOpen(true);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = (
    cropperRef: React.RefObject<ReactCropperElement>,
    ar: number,
  ) => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const croppedDataUrl = cropperRef.current?.cropper
        .getCroppedCanvas(
          ar === 1.91
            ? { width: 1200, height: 627 }
            : { width: 800, height: 600 },
        )
        .toDataURL("image/webp", 0.9);
      return croppedDataUrl;
    }
  };

  console.log(room);
  const handleOk = async () => {
    const croppedDataUrl = getCropData(cropperRef, ar);
    if (!croppedDataUrl) return;

    try {
      setLoading(true);
      const response = await fetch(croppedDataUrl);
      const blob = await response.blob();
      const file = new File(
        [blob],
        `unit-${room.room_number}-${new Date().getTime()}.webp`,
        {
          type: "image/webp",
        },
      );

      // Upload to Supabase
      const filePath = `rooms/${room.category_name}/${room.room_number}/${dir.includes("gallery") ? "gallery" : dir}/${dir + "-" + arUrlSegment}-unit-${room.room_number}-${Date.now()}.webp`;
      const { data, error } = await supabase.storage
        .from("hqnrd-public")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        message.error("Upload failed.");
        console.error("Upload error:", error);
      } else {
        message.success("Image uploaded successfully!");
        console.log("Upload success:", data);
        if (data.id) {
          updateLocalRoomMedia(data as FileUploadResponseTypes);
        }
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
    setDir(inputName);
    if (!e.target.files) return;
    setLoading(true);
    const file = e.target.files[0];
    const filePath = `rooms/${room.category_name}/${room.room_number}/${inputName}/${inputName}-unit-${room.room_number}.mp4`;

    try {
      const { data, error } = await supabase.storage
        .from("hqnrd-public")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        message.error("Upload failed.");
        console.error("Upload error:", error);
        message.error("Error: " + error.message);
      } else {
        message.success("Video uploaded successfully!");
        if (data.id) {
          updateLocalRoomMedia(data as FileUploadResponseTypes);
        }
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const updateLocalRoomMedia = (data: FileUploadResponseTypes) => {
    const { fullPath } = data;
    const path = `${CONSTANTS.Services.PUBLIC_SUPABASE_URL}/${fullPath}`;

    const fileKey = path.split("/").slice(-2)[0].replace("-", "_");
    // Determine if the file is a gallery image or another media type
    const mediaFileKey = path.includes("gallery") ? "gallery" : fileKey;

    console.log("Full Path:", path);
    console.log("Media File Key:", mediaFileKey);
    console.log("Upload Data:", data);

    if (mediaFileKey === "gallery") {
      // Handle gallery image updates
      const [segmentDirection, segmentAr] =
        fullPath.split("/").pop()?.split("-ar-") || [];
      const direction = segmentDirection?.split("-").pop();
      const ratio = segmentAr?.split("-").join("_");
      const galleryImageKey = `${direction}_${ratio}`.split("_unit_")[0];

      addMediaFile({
        ...room.media_files,
        gallery: {
          ...room.media_files.gallery,
          [galleryImageKey]: path,
        },
      });
    } else if (mediaFileKey.includes("video")) {
      // Handle video files: differentiate between video and poster
      const isPoster = path.includes(".webp");
      addMediaFile({
        ...room.media_files,
        room_video: {
          ...room.media_files.room_video,
          ...(isPoster ? { poster: path } : { src: path }),
        },
      });
    } else {
      // Handle non-gallery and non-video media (e.g., card_img, og_img, etc.)
      addMediaFile({
        ...room.media_files,
        [mediaFileKey]: path,
      });
    }
  };

  const handleNextBtnClick = () => {
    setMediaFilesCount(
      mediaFilesCount !== aspectRatios.length
        ? mediaFilesCount + 1
        : mediaFilesCount,
    );

    if (mediaFilesCount === 4) {
      console.log(room);
    }
  };

  return (
    <>
      <FileUploadModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
        cropperRef={cropperRef}
        image={image}
        ar={ar}
      />
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <h3 className="text-xl font-bold leading-4">
          {aspectRatios[mediaFilesCount].title}
        </h3>
        <div
          className={twMerge(
            `grid w-full grid-cols-1 grid-rows-1 gap-4`,
            classNames({
              "aspect-[1.91/1]": mediaFilesCount == 0,
              "aspect-[1/1]": mediaFilesCount == 1,
              "aspect-[4/3]": mediaFilesCount == 2,
              "aspect-[16/9]": mediaFilesCount == 3 || mediaFilesCount == 4,
            }),
          )}
        >
          <MediaFileInputs
            onChange={onChange}
            mediaFiles={room.media_files}
            mediaFilesCount={mediaFilesCount}
            handleVideoChange={handleVideoChange}
            inputRef={inputRef}
          />
        </div>

        <div className="itesm-center flex justify-center gap-2">
          <Button
            icon={<FaChevronLeft />}
            onClick={() =>
              setMediaFilesCount(mediaFilesCount > 0 ? mediaFilesCount - 1 : 0)
            }
            size="large"
            className="!flex !h-auto w-full items-center justify-center !bg-neutral-800 !py-2 !text-white"
          />
          {mediaFilesCount === 4 ? (
            <Button
              onClick={() =>
                setMediaFilesCount(
                  mediaFilesCount === aspectRatios.length
                    ? mediaFilesCount + 1
                    : mediaFilesCount,
                )
              }
              size="large"
              className="!h-auto flex-1 !bg-neutral-800 !py-2 !text-white"
            >
              Finish
            </Button>
          ) : (
            <Button
              onClick={() => handleNextBtnClick()}
              size="large"
              className="!h-auto flex-1 !bg-neutral-800 !py-2 !text-white"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
