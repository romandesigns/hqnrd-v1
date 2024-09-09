"use client";

import cn from "classnames";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MdOutlineCloudUpload } from "../../icons";

export function FileInput({
  imgUrl,
  imgDir,
  isVideo = false,
  placeholder = "Image Upload",
  onChange,
  inputRef,
  name,
  classNames = "",
}: {
  classNames?: string;
  imgUrl: string;
  isVideo?: boolean;
  imgDir: string;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) {
  return (
    <label
      htmlFor={name}
      className={twMerge(
        `relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-primary-500/50 bg-primary-500/10 hover:bg-primary-500/20 ${classNames}`,
        cn({
          "border-none": imgUrl,
        }),
      )}
    >
      <input
        type="file"
        name={name}
        id={name}
        className="hidden"
        onChange={onChange}
        ref={inputRef}
      />
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={name}
          fill
          priority
          className="h-auto object-cover"
          sizes="true"
        />
      ) : (
        <p className="flex flex-col items-center justify-center gap-2 text-xs font-medium">
          <MdOutlineCloudUpload size={25} />
          {placeholder}
        </p>
      )}
    </label>
  );
}
