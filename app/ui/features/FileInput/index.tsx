"use client";

import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import "video.js/dist/video-js.css";
import { MdOutlineCloudUpload } from "../../icons";
import { VideoPlayer } from "../VideoPlayer";

export function FileInput({
  mediaUrl,
  placeholder = "Image Upload",
  onChange,
  inputRef,
  name,
  classNames = "",
  poster,
}: {
  classNames?: string;
  mediaUrl: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  poster?: string;
}) {
  const isValidVideoUrl = mediaUrl && mediaUrl.includes(".mp4");
  const isValidImageUrl = mediaUrl && mediaUrl.includes(".webp");
  const videoRef = useRef(null);
  return (
    <div
      className={twMerge(
        `relative flex flex-col items-center justify-center border-4`,
        classNames,
      )}
    >
      {/* File Input */}
      {!isValidVideoUrl && !isValidImageUrl && (
        <label
          htmlFor={name}
          className={`flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-primary-500/50 bg-primary-500/10 hover:bg-primary-500/20`}
        >
          <input
            type="file"
            name={name}
            id={name}
            className="hidden"
            onChange={onChange}
            ref={inputRef}
          />
          {!mediaUrl && (
            <p className="flex flex-col items-center justify-center gap-2 text-xs font-medium">
              <MdOutlineCloudUpload size={25} />
              {placeholder}
            </p>
          )}
        </label>
      )}

      {/* Media Display */}
      {isValidVideoUrl && (
        <>
          <div className="border-black-800 absolute right-4 top-4 z-[4] flex aspect-[16/9] w-1/4 items-center justify-center rounded-md bg-black/50">
            {!poster ? (
              <label
                htmlFor="room-video-poster"
                className="flex h-full w-full items-center justify-center"
              >
                <input
                  type="file"
                  name="room-video-poster"
                  id="room-video-poster"
                  className="hidden"
                  onChange={onChange}
                  ref={inputRef}
                />
                <p className="text-sm text-neutral-400">Add Poster</p>
              </label>
            ) : (
              <Image
                unoptimized
                src={poster}
                alt={name}
                fill
                priority
                className="h-auto rounded-md object-cover"
                sizes="true"
              />
            )}
          </div>
          <video
            muted
            controlsList="nodownload noremoteplayback novolume"
            controls
            poster={poster}
          >
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}

      {isValidImageUrl && (
        <Image
          src={mediaUrl}
          alt={name}
          fill
          priority
          className="h-auto rounded-md object-cover"
          sizes="true"
        />
      )}
    </div>
  );
}
