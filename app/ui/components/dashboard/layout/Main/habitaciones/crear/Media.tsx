"use client";
import { FileInput, FileUploadModal } from "@/app/ui/features";
import { FaChevronLeft } from "@/app/ui/icons";
import { useRoomStore } from "@/store/rooms";
import { createClient } from "@/utils/supabase/client"; // Import Supabase client
import { Button, message } from "antd";
import classNames from "classnames";
import React, { createRef, useRef, useState } from "react";
import { ReactCropperElement } from "react-cropper";
import { twMerge } from "tailwind-merge";

type UploadResponseTypes = {
  fullPath: string;
  id: string;
  path: string;
};

export function Media({
  handleDecreaseStep,
  handleIncreaseStep,
}: {
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
}) {
  const [mediaFilesCount, setMediaFilesCount] = useState(0);
  const [image, setImage] = useState("");
  const cropperRef = createRef<ReactCropperElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgDir, setImgDir] = useState("");
  const [imgAspectRatio, setImgAspectRatio] = useState("1.91:1");
  const [aspectRatio, setAspectRatio] = useState(1);
  const [aspectRatioUrlSegment, setAspectRatioUrlSegment] = useState("1.91-1");

  const supabase = createClient();

  // Base URL for public bucket
  const publicBucketUrl =
    "https://cknwdpehwpqvbkikbtqr.supabase.co/storage/v1/object/public";

  // Zustand store
  const { newRoom: room, updateRoom } = useRoomStore((state) => state);

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
    console.log(category);
    if (ratio && ratio.includes(":")) {
      const urlSegment = `ar-${ratio.replace(/[.:]/g, "-")}`;
      const [width, height] = ratio.split(":").map(Number);
      setAspectRatio(width / height);
      setImgDir(category);
      setAspectRatioUrlSegment(urlSegment);
    } else {
      setAspectRatio(1);
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
    aspectRatio: number,
  ) => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const croppedDataUrl = cropperRef.current?.cropper
        .getCroppedCanvas(
          aspectRatio === 1.91
            ? { width: 1200, height: 627 }
            : { width: 800, height: 600 },
        )
        .toDataURL("image/webp", 0.9);
      return croppedDataUrl;
    }
  };

  const handleOk = async () => {
    const croppedDataUrl = getCropData(cropperRef, aspectRatio);
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
      const filePath = `rooms/${room.category_name}/${room.room_number}/${imgDir.includes("gallery") ? "gallery" : imgDir}/${imgDir + "-" + aspectRatioUrlSegment}-unit-${room.room_number}.webp`;
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
          updateLocalRoomMedia(data as UploadResponseTypes);
        }
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const updateLocalRoomMedia = (data: UploadResponseTypes) => {
    const { fullPath } = data;
    const path = `${publicBucketUrl}/${fullPath}`;

    const updatedMediaFiles = imgDir.includes("gallery")
      ? {
          ...room.mediaFiles,
          gallery: [
            ...room.mediaFiles.gallery,
            {
              [imgDir
                .concat(`-${aspectRatioUrlSegment}`)
                .replace(/[-.]/g, "_")]: path,
            },
          ],
        }
      : {
          ...room.mediaFiles,
          [imgDir.replace("-", "_")]: path,
        };

    updateRoom({
      ...room,
      mediaFiles: updatedMediaFiles,
      og_img: undefined,
      featured_card_img: undefined,
      room_layout: undefined,
      room_video: undefined,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
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
      } else {
        message.success("Video uploaded successfully!");
        console.log("Upload success:", data);
        if (data.id) {
          updateLocalRoomMedia(data as UploadResponseTypes);
        }
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const getGalleryImage = (galleryItemKey: string) => {
    const transformedKeyGalleryKey = galleryItemKey.replace(/[-:]/g, "_");
    const galleryItem = room.mediaFiles.gallery.find(
      (item) => item[transformedKeyGalleryKey],
    );
    return galleryItem ? galleryItem[transformedKeyGalleryKey] : "";
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
        aspectRatio={aspectRatio}
      />
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <h3 className="text-xl font-bold leading-4">
          {aspectRatios[mediaFilesCount].title}
        </h3>
        <div
          className={twMerge(
            `grid w-full max-w-2xl grid-cols-1 grid-rows-1 gap-4 border`,
            classNames({
              "aspect-[1.91/1]": mediaFilesCount == 0,
              "aspect-[1/1]": mediaFilesCount == 1,
              "aspect-[4/3]": mediaFilesCount == 2,
              "aspect-[16/9]": mediaFilesCount == 3 || mediaFilesCount == 4,
            }),
          )}
        >
          {mediaFilesCount == 0 && (
            <FileInput
              inputRef={inputRef}
              imgUrl={room.mediaFiles.og_img}
              imgDir={imgDir}
              onChange={onChange}
              name="og-img-ar-1.91:1"
              placeholder="OG Image 1.91:1"
            />
          )}
          {mediaFilesCount == 1 && (
            <FileInput
              inputRef={inputRef}
              imgUrl={room.mediaFiles.room_layout}
              imgDir={imgDir}
              onChange={onChange}
              name="room-layout-ar-1:1"
              placeholder="Room Layout 1:1"
            />
          )}
          {mediaFilesCount == 2 && (
            <FileInput
              inputRef={inputRef}
              imgUrl={room.mediaFiles.card_img}
              imgDir={imgDir}
              onChange={onChange}
              name="card-img-ar-4:3"
              placeholder="Card Image 4:3"
            />
          )}
          {mediaFilesCount == 3 && (
            <div className="grid grid-cols-4 grid-rows-2 gap-2">
              <FileInput
                inputRef={inputRef}
                imgUrl={getGalleryImage("img-gallery-t-ar-16:9")}
                imgDir={imgDir}
                onChange={onChange}
                name="img-gallery-t-ar-16:9"
                classNames="col-span-2"
                placeholder="16:9"
              />
              <FileInput
                inputRef={inputRef}
                imgDir={imgDir}
                onChange={onChange}
                name="img-gallery-t-ar-1:1"
                placeholder="1:1"
                imgUrl={getGalleryImage("img-gallery-t-ar-1:1")}
              />
              <FileInput
                inputRef={inputRef}
                imgUrl={getGalleryImage("img-gallery-r-ar-9:16")}
                imgDir={imgDir}
                onChange={onChange}
                name="img-gallery-r-ar-9:16"
                classNames="row-span-2"
                placeholder="9:16"
              />
              <FileInput
                inputRef={inputRef}
                imgUrl={getGalleryImage("img-gallery-b-ar-1:1")}
                imgDir={imgDir}
                onChange={onChange}
                name="img-gallery-b-ar-1:1"
                placeholder="1:1"
              />
              <FileInput
                inputRef={inputRef}
                imgUrl={getGalleryImage("img-gallery-b-ar-16:9")}
                imgDir={imgDir}
                onChange={onChange}
                name="img-gallery-b-ar-16:9"
                classNames="col-span-2"
                placeholder="16:9"
              />
            </div>
          )}
          {mediaFilesCount == 4 && (
            <FileInput
              isVideo
              inputRef={inputRef}
              imgUrl={room.mediaFiles.room_layout}
              imgDir={imgDir}
              onChange={handleVideoChange}
              name="room-video"
              placeholder="Room Video 16:9"
            />
          )}
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
              onClick={() =>
                setMediaFilesCount(
                  mediaFilesCount !== aspectRatios.length
                    ? mediaFilesCount + 1
                    : mediaFilesCount,
                )
              }
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
