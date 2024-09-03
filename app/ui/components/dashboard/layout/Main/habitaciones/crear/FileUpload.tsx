"use client";

// Reusable Upload Component
import React from "react";
import { Upload, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

interface FileUploadProps {
  loading: boolean;
  aspectRatio: number;
  setDirname: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  onChange: UploadProps["onChange"];
  dirname: string;
}

const convertToWebP = (file: File): Promise<File> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const webpFile = new File(
                [blob],
                `${file.name.split(".")[0]}.webp`,
                {
                  type: "image/webp",
                },
              );
              resolve(webpFile);
            }
          },
          "image/webp",
          1, // Quality factor from 0 to 1
        );
      };
    };
  });
};

export const FileUpload: React.FC<FileUploadProps> = ({
  loading,
  aspectRatio,
  name,
  onChange,
  setDirname,
  dirname,
}: FileUploadProps) => {
  const handleBeforeUpload = async (file: File) => {
    setDirname(name.replace("_", "-"));
  };

  return (
    <ImgCrop
      showGrid
      zoomSlider
      modalWidth={800}
      quality={1}
      rotationSlider
      aspect={aspectRatio}
      beforeCrop={() => true} // Ensure cropping happens
    >
      <Upload
        className="rounded-md"
        name={name}
        showUploadList={false}
        onChange={onChange}
        beforeUpload={handleBeforeUpload} // Handle image resizing and conversion here
        listType="picture-card"
      >
        <div
          className="relative flex h-full w-full items-center justify-center rounded-md bg-pink-500"
          style={{ backgroundColor: "#FFA500" }}
        >
          {loading && dirname === name.replace("_", "-")
            ? "...Loading"
            : "OG Image"}
        </div>
      </Upload>
    </ImgCrop>
  );
};
