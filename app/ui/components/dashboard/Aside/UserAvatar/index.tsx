"use client";

import { createClient } from "@/utils/supabase/client";
import type { GetProp, UploadProps } from "antd";
import { Upload } from "antd";
import ImgCrop from 'antd-img-crop';
import classNames from "classnames";
import Image from "next/image";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const placeholderImaage = "/assets/general/male-user-placeholder.png"


export function UserAvatar() {
  const supabase = createClient();

  const handleChange: UploadProps["onChange"] = async ({file}) => {
    console.log(file);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
    <ImgCrop rotationSlider>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader ![&>div]:ml-0 z-[3] mx-auto !w-auto [&>div]:mr-0 right-2 bottom-[10px] absolute"
        showUploadList={false}
        onChange={handleChange}
        maxCount={1}
        multiple={false}
      >
          {uploadButton}
      </Upload>
    </ImgCrop>
    <Image
      src={placeholderImaage}
      alt="user avatar"
      className={classNames(`aspect-square rounded-md opacity-[0.20]`)}
      fill
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
    </>
  );
}
