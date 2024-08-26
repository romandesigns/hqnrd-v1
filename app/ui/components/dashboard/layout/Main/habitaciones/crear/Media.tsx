"use client";
import { FaChevronLeft } from "@/app/ui/icons";
import { Button } from "antd";
import Cropper from "cropperjs";
import { useRef, useState } from "react";

export function Media({
  handleDecreaseStep,
  handleIncreaseStep,
}: {
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
}) {
  // States
  const [mediaFiles, setMediaFiles] = useState<FileList | null>(null);
  const [cropper, setCropper] = useState<Cropper | null>(null);
  // Refs
  const ogImgRef = useRef<HTMLInputElement>(null);
  const cardImgRef = useRef<HTMLInputElement>(null);
  const galleryImgOneRef = useRef<HTMLInputElement>(null);
  const galleryImgTwoRef = useRef<HTMLInputElement>(null);
  const galleryImgThreeRef = useRef<HTMLInputElement>(null);
  const galleryImgFourRef = useRef<HTMLInputElement>(null);
  const galleryImgFiveRef = useRef<HTMLInputElement>(null);
  const roomLayoutRef = useRef<HTMLInputElement>(null);
  const roomVideoRef = useRef<HTMLInputElement>(null);

  return (
    <article className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-md bg-primary-100/10 p-3">
      <div className="flex w-full flex-col items-stretch justify-stretch gap-8 [&_input]:hidden">
        {/* OG + Card */}
        <div className="grid h-44 grid-cols-[1.91fr_1fr] grid-rows-1 gap-2">
          {/* OG IMAGE */}
          <label
            className="flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="og-img"
          >
            OG IMAGE
            <input type="file" name="og-img" id="og-img" ref={ogImgRef} />
          </label>

          {/* Card Image */}
          <label
            className="flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="card-img"
          >
            Card Image
            <input type="file" name="card-img" id="card-img" ref={cardImgRef} />
          </label>
        </div>

        {/* Gallery */}
        <div className="grid w-full grid-cols-4 grid-rows-2 gap-2">
          <label
            className="col-start-1 col-end-3 aspect-og rounded-md border bg-orange-500"
            htmlFor="gallery-one"
          >
            box
            <input
              type="file"
              name="gallery-one"
              id="gallery-one"
              ref={galleryImgOneRef}
            />
          </label>
          <label className="rounded-md border bg-red-500" htmlFor="gallery-two">
            box
            <input
              type="file"
              name="gallery-two"
              id="gallery-two"
              ref={galleryImgTwoRef}
            />
          </label>
          <label
            className="col-start-4 col-end-5 row-start-1 row-end-3 rounded-md border bg-green-500"
            htmlFor="gallery-three"
          >
            box
            <input
              type="file"
              name="gallery-three"
              id="gallery-three"
              ref={galleryImgThreeRef}
            />
          </label>
          <label
            className="rounded-md border bg-blue-500"
            htmlFor="gallery-four"
          >
            box
            <input
              type="file"
              name="gallery-four"
              id="gallery-four"
              ref={galleryImgFourRef}
            />
          </label>
          <label
            className="col-start-2 col-end-4 row-start-2 row-end-3 rounded-md border bg-yellow-500"
            htmlFor="gallery-five"
          >
            box
            <input
              type="file"
              name="gallery-five"
              id="gallery-five"
              ref={galleryImgFiveRef}
            />
          </label>
        </div>

        {/* Layout */}
        <div className="grid h-44 grid-cols-[1.3fr_1.96fr] grid-rows-1 gap-2">
          {/* OG IMAGE */}
          <label
            className="aspect-w-1 aspect-h-1 flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="room-layout"
          >
            OG IMAGE
            <input
              type="file"
              name="room-layout"
              id="room-layout"
              ref={roomLayoutRef}
            />
          </label>

          {/* Card Image */}
          <label
            className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="room-video"
          >
            Card Image
            <input
              type="file"
              name="room-video"
              id="room-video"
              ref={roomVideoRef}
            />
          </label>
        </div>
      </div>
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
    </article>
  );
}
