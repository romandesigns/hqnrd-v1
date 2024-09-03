"use client";
import React, { useState, createRef } from "react";
import { message } from "antd";
import { createClient } from "@/utils/supabase/client"; // Import Supabase client
import { ReactCropperElement } from "react-cropper";
import { useRoomStore } from "@/store/rooms";
import { FileInput, FileUploadModal } from "@/app/ui/features";

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
  const [image, setImage] = useState("");
  const cropperRef = createRef<ReactCropperElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgDir, setImgDir] = useState("");
  const [aspectRatio, setAspectRatio] = useState(1); // Default to 1:1
  const supabase = createClient();

  const publicBucketUrl =
    "https://cknwdpehwpqvbkikbtqr.supabase.co/storage/v1/object/public";

  // Zustand store
  const { newRoom: room, updateRoom } = useRoomStore((state) => state);
  console.log("room", room);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
    const [category, ar] = inputName.split("-ar-");

    // Extract aspect ratio from name value
    if (ar && ar.includes(":")) {
      const [width, height] = ar.split(":").map(Number);
      const numericAspectRatio = width / height;
      setAspectRatio(numericAspectRatio);
    } else {
      setAspectRatio(1); // Default to 1:1 if not specified
    }

    setImgDir(category);

    let files = e.target.files;
    if (!files || files.length === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setIsModalOpen(true); // Open the modal after setting the image
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (cropperRef.current?.cropper) {
      const croppedDataUrl = cropperRef.current.cropper
        .getCroppedCanvas()
        .toDataURL();
      return croppedDataUrl;
    }
    return null;
  };

  const handleOk = async () => {
    const croppedDataUrl = getCropData();
    if (!croppedDataUrl) return;

    try {
      setLoading(true);
      const response = await fetch(croppedDataUrl);
      const blob = await response.blob();
      const file = new File(
        [blob],
        `cropped-image-${new Date().getTime()}.webp`,
        {
          type: "image/webp",
        },
      );

      // Upload to Supabase
      const filePath = `rooms/${room.category_name}/${room.room_number}/${imgDir}/${room.room_number}-${new Date().getTime()}.webp`;
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
          updateRoomMedia(data as UploadResponseTypes);
        }
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const updateRoomMedia = async (data: UploadResponseTypes) => {
    const { data: roomData, error } = await supabase
      .from("rooms")
      .update({
        [imgDir]: data.fullPath,
      })
      .eq("id", room.id)
      .single();

    if (error) {
      console.error("Error updating room media:", error);
      message.error("Error updating room media.");
    } else {
      console.log("Room media updated successfully:", roomData);
      updateRoom(roomData);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <FileUploadModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
        cropperRef={cropperRef}
        image={image}
        aspectRatio={aspectRatio}
      />
      <div className="grid w-full max-w-4xl grid-cols-[2fr_1fr] grid-rows-1 gap-4">
        <FileInput
          image={image}
          imgDir={imgDir}
          onChange={onChange}
          name="og-img-ar-16:9"
        />
        <FileInput
          image={image}
          imgDir={imgDir}
          onChange={onChange}
          name="featured-card-img-ar-4:3"
        />
      </div>
    </div>
  );
}
