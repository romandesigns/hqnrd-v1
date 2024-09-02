"use client";
import { FaChevronLeft } from "@/app/ui/icons";
import { MediaFiles } from "@/types/types";
import { createClient } from "@/utils/supabase/client";
import { Button, UploadProps } from "antd";
import { useState } from "react";
import { FileUploadFiles } from "./FileUploadFiles";

export function Media({
  handleDecreaseStep,
  handleIncreaseStep,
}: {
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
}) {
  // States
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [dirname, setDirname] = useState<string>("");

  const publicBucketUrl =
    "https://cknwdpehwpqvbkikbtqr.supabase.co/storage/v1/object/public";

  const [mediaFiles, setMediaFiles] = useState<MediaFiles>({
    og_img: "",
    featured_card_img: "",
    room_layout: "",
    room_video: "",
    gallery: [],
  });

  const handleFileChange: UploadProps["onChange"] = async (foo) => {
    console.log(foo);
  };

  const handleVideoUpload = async () => {};

  return (
    <>
      <FileUploadFiles
        setDirname={setDirname}
        loading={loading}
        handleDecreaseStep={handleDecreaseStep}
        handleIncreaseStep={handleIncreaseStep}
        handleVideoUpload={handleVideoUpload}
        handleFileChange={handleFileChange}
        mediaFiles={mediaFiles}
      />
      <div className="itesm-center my-8 flex justify-center gap-2">
        <Button
          icon={<FaChevronLeft />}
          onClick={() => handleDecreaseStep()}
          size="large"
          className="!h-auto w-full !bg-neutral-800 !py-2 !text-white"
        />
        <Button
          onClick={() => handleIncreaseStep()}
          size="large"
          className="!h-auto flex-1 !bg-neutral-800 !py-2 !text-white"
        >
          Next
        </Button>
      </div>
    </>
  );
}
