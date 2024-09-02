"use client";
import { FaChevronLeft } from "@/app/ui/icons";
import { Button } from "antd";

export function FileFields({
  loading,
  handleDecreaseStep,
  handleIncreaseStep,
  handleFileChange,
  handleVideoUpload,
}: {
  loading: boolean;
  handleDecreaseStep: () => void;
  handleIncreaseStep: () => void;
  handleVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    aspectRatio: number,
  ) => void;
}) {
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
            {loading ? "Loading..." : "OG IMAGE"}
            <input
              type="file"
              name="og_img"
              id="og-img"
              onChange={(e) => handleFileChange(e, 1.91)}
            />
          </label>

          {/* Card Image */}
          <label
            className="flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="card-img"
          >
            {loading ? "Loading..." : "Card Image"}
            <input
              type="file"
              name="featured_card_img"
              id="card-img"
              onChange={(e) => handleFileChange(e, 16 / 9)}
            />
          </label>
        </div>

        {/* Gallery */}
        <div className="grid w-full grid-cols-4 grid-rows-2 gap-2">
          <label
            className="col-start-1 col-end-3 flex aspect-og items-center justify-center rounded-md border bg-orange-500"
            htmlFor="gallery-one"
          >
            {loading ? "Loading..." : "Image 16:9"}
            <input
              type="file"
              name="img_gallery_16x9"
              id="gallery-one"
              onChange={(e) => handleFileChange(e, 16 / 9)}
            />
          </label>
          <label
            className="flex items-center justify-center rounded-md border bg-red-500"
            htmlFor="gallery-two"
          >
            {loading ? "Loading..." : "Image 1:1"}
            <input
              type="file"
              name="img_gallery_1x1"
              id="gallery-two"
              onChange={(e) => handleFileChange(e, 1)}
            />
          </label>
          <label
            className="col-start-4 col-end-5 row-start-1 row-end-3 flex items-center justify-center rounded-md border bg-green-500"
            htmlFor="gallery-three"
          >
            {loading ? "Loading..." : "Image 9:16"}
            <input
              type="file"
              name="img_gallery_9x16"
              id="gallery-three"
              onChange={(e) => handleFileChange(e, 9 / 16)}
            />
          </label>
          <label
            className="flex items-center justify-center rounded-md border bg-blue-500"
            htmlFor="gallery-four"
          >
            {loading ? "Loading..." : "Image 1:1"}
            <input
              type="file"
              name="img_gallery_1x1"
              id="gallery-four"
              onChange={(e) => handleFileChange(e, 1)}
            />
          </label>
          <label
            className="col-start-2 col-end-4 row-start-2 row-end-3 flex items-center justify-center rounded-md border bg-yellow-500"
            htmlFor="gallery-five"
          >
            {loading ? "Loading..." : "Image 16:9"}
            <input
              type="file"
              name="img_gallery_16x9"
              id="gallery-five"
              onChange={(e) => handleFileChange(e, 16 / 9)}
            />
          </label>
        </div>

        {/* Layout */}
        <div className="grid h-44 grid-cols-[1.3fr_1.96fr] grid-rows-1 gap-2">
          {/* Room Layout */}
          <label
            className="aspect-w-1 aspect-h-1 flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="room-layout"
          >
            {loading ? "Loading..." : "Image 1:1"}
            <input
              type="file"
              name="room_layout"
              id="room-layout"
              onChange={(e) => handleFileChange(e, 1)}
            />
          </label>

          {/* Room Video */}
          <label
            className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-md bg-pink-500"
            htmlFor="room-video"
          >
            {loading ? "Loading..." : "Image 16:9"}
            <input
              type="file"
              name="room_video"
              id="room-video"
              onChange={(e) => handleVideoUpload(e)}
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
