"use client";
import React from "react";
import { Modal } from "antd";
import Cropper, { ReactCropperElement } from "react-cropper";

export const FileUploadModal: React.FC<{
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  loading: boolean;
  cropperRef: React.RefObject<ReactCropperElement>;
  image: string;
  aspectRatio: number;
}> = ({
  isModalOpen,
  handleOk,
  handleCancel,
  loading,
  cropperRef,
  image,
  aspectRatio,
}) => {
  return (
    <Modal
      title="Crop Image"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Crop & Upload"
      cancelText="Cancel"
      width={800}
      confirmLoading={loading}
      centered
    >
      <Cropper
        key={aspectRatio}
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
        zoomTo={0.5}
        aspectRatio={aspectRatio}
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
        className="overflow-hidden"
      />
    </Modal>
  );
};
