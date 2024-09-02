"use client";
import { FaChevronLeft } from "@/app/ui/icons";
import { MediaFiles } from "@/types/types";
import { Button, Modal, Upload, UploadFile } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadChangeParam } from "antd/es/upload";

export function FileUploadFiles({
  loading,
  setDirname,
  handleDecreaseStep,
  handleIncreaseStep,
  handleFileChange,
  handleVideoUpload,
  mediaFiles,
}: {
  loading: boolean;
  setDirname: React.Dispatch<React.SetStateAction<string>>;
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
  handleVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (info: UploadChangeParam<UploadFile<any>>) => void;
  mediaFiles: MediaFiles;
}) {
  return (
    <article className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-md bg-primary-100/10 p-3">
      {/* Top Row */}
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[auto] gap-4 [&_.ant-upload]:!h-52 [&_.ant-upload]:!w-full [&_span]:block [&_span]:w-full">
        <ImgCrop
          showGrid
          zoomSlider
          modalWidth={800}
          quality={1}
          rotationSlider
          aspect={16 / 9}
        >
          <Upload
            className="rounded-md"
            name={mediaFiles.og_img}
            showUploadList={false}
            onChange={handleFileChange}
            beforeUpload={(file) => {
              setDirname(mediaFiles.og_img.replace("_", "-"));
              return true;
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-md bg-pink-500"
              style={{ backgroundColor: "#FFA500" }}
            >
              OG Image
            </div>
          </Upload>
        </ImgCrop>
        <ImgCrop
          showGrid
          zoomSlider
          modalWidth={800}
          quality={1}
          rotationSlider
          aspect={4 / 3}
        >
          <Upload
            className="rounded-md"
            name={mediaFiles.featured_card_img}
            showUploadList={false}
            onChange={handleFileChange}
            beforeUpload={(file) => {
              setDirname(mediaFiles.featured_card_img.replace("_", "-"));
              return true;
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-md bg-pink-500"
              style={{ backgroundColor: "#AFF590" }}
            >
              Featured Card Image
            </div>
          </Upload>
        </ImgCrop>
        {/* Middle Row */}
        {/* Bottom Row */}
      </div>
    </article>
  );
}
