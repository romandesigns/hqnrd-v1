"use client";
import React from "react";
import { FileInput } from "@/app/ui/features";
import { MediaFiles } from "@/types/types";

export const MediaFileInputs = ({
  mediaFilesCount,
  inputRef,
  onChange,
  mediaFiles,
  handleVideoChange,
}: {
  mediaFilesCount: number;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mediaFiles: MediaFiles;
  handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      {mediaFilesCount == 0 && (
        <FileInput
          inputRef={inputRef}
          mediaUrl={mediaFiles.og_img}
          onChange={onChange}
          name="og-img-ar-1.91:1"
          placeholder="OG Image 1.91:1"
        />
      )}
      {mediaFilesCount == 1 && (
        <FileInput
          inputRef={inputRef}
          mediaUrl={mediaFiles.room_layout}
          onChange={onChange}
          name="room-layout-ar-1:1"
          placeholder="Room Layout 1:1"
        />
      )}
      {mediaFilesCount == 2 && (
        <FileInput
          inputRef={inputRef}
          mediaUrl={mediaFiles.card_img}
          onChange={onChange}
          name="card-img-ar-4:3"
          placeholder="Card Image 4:3"
        />
      )}
      {mediaFilesCount == 3 && (
        <div className="grid grid-cols-4 grid-rows-2 gap-2">
          <FileInput
            inputRef={inputRef}
            mediaUrl={mediaFiles.gallery.t_16_9}
            onChange={onChange}
            name="img-gallery-t-ar-16:9"
            classNames="col-span-2"
            placeholder="16:9"
          />
          <FileInput
            inputRef={inputRef}
            mediaUrl={mediaFiles.gallery.t_1_1}
            onChange={onChange}
            name="img-gallery-t-ar-1:1"
            placeholder="1:1"
          />
          <FileInput
            inputRef={inputRef}
            mediaUrl={mediaFiles.gallery.r_9_16}
            onChange={onChange}
            name="img-gallery-r-ar-9:16"
            classNames="row-span-2"
            placeholder="9:16"
          />
          <FileInput
            inputRef={inputRef}
            mediaUrl={mediaFiles.gallery.b_1_1}
            onChange={onChange}
            name="img-gallery-b-ar-1:1"
            placeholder="1:1"
          />
          <FileInput
            inputRef={inputRef}
            mediaUrl={mediaFiles.gallery.b_16_9}
            onChange={onChange}
            name="img-gallery-b-ar-16:9"
            classNames="col-span-2"
            placeholder="16:9"
          />
        </div>
      )}
      {mediaFilesCount == 4 && (
        <FileInput
          inputRef={inputRef}
          mediaUrl={mediaFiles.room_video.src}
          poster={mediaFiles.room_video.poster}
          onChange={handleVideoChange}
          name="room-video"
          placeholder="Room Video 16:9"
        />
      )}
    </>
  );
};
