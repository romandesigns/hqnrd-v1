"use client";
import { Upload, UploadFile } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadChangeParam } from "antd/es/upload";
import { FileUpload } from "./FileUpload";

export function FileUploadFiles({
  loading,
  setDirname,
  handleFileChange,
  handleVideoUpload,
  uploadedFiles,
  filesToUpload,
  dirname,
}: {
  loading: boolean;
  setDirname: React.Dispatch<React.SetStateAction<string>>;
  handleVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (info: UploadChangeParam<UploadFile<any>>) => void;
  filesToUpload: string[];
  uploadedFiles: Set<string>;
  dirname: string;
}) {
  return (
    <article className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-md bg-primary-100/10 p-3">
      {/* Top Row */}
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[auto] gap-4 [&_.ant-upload]:!h-52 [&_.ant-upload]:!w-full [&_span]:block [&_span]:w-full">
        <FileUpload
          loading={loading}
          aspectRatio={16 / 9}
          name={filesToUpload[0]}
          onChange={handleFileChange}
          setDirname={setDirname}
          dirname={dirname}
        />
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
            name={filesToUpload[1]}
            showUploadList={false}
            onChange={handleFileChange}
            beforeUpload={(file) => {
              setDirname(filesToUpload[1].replace("_", "-"));
              return true;
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-md bg-pink-500"
              style={{ backgroundColor: "#AFF590" }}
            >
              {loading && dirname === filesToUpload[1].replace("_", "-")
                ? "...Loading"
                : "Featured Card Image"}
            </div>
          </Upload>
        </ImgCrop>
        {/* Middle Row */}
        {/* Bottom Row */}
      </div>
    </article>
  );
}
