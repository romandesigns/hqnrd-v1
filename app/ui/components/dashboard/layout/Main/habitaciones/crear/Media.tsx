"use client";
import { FaChevronLeft } from "@/app/ui/icons";
import { Button, Modal } from "antd";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css"; // Import cropper's CSS
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
  const [cropVisible, setCropVisible] = useState(false);
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number>(1); // Default aspect ratio

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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    aspect: number,
  ) => {
    console.log(aspect);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCurrentFile(reader.result as string);
        setAspectRatio(aspect);
        setCropVisible(true);
      };
    }
  };

  const onCrop = () => {
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      croppedCanvas.toBlob((blob) => {
        if (blob) {
          // Here, you would upload the blob to Supabase or process it as needed
          console.log(blob);

          // For now, we can reset the state and close the modal
          setCropVisible(false);
          setCropper(null);
        }
      });
    }
  };

  return (
    <>
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
              <input
                type="file"
                name="og-img"
                id="og-img"
                ref={ogImgRef}
                onChange={(e) => handleFileChange(e, 1.91)}
              />
            </label>

            {/* Card Image */}
            <label
              className="flex items-center justify-center rounded-md bg-pink-500"
              htmlFor="card-img"
            >
              Card Image
              <input
                type="file"
                name="card-img"
                id="card-img"
                ref={cardImgRef}
                onChange={(e) => handleFileChange(e, 16 / 9)}
              />
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
                onChange={(e) => handleFileChange(e, 16 / 9)}
              />
            </label>
            <label
              className="rounded-md border bg-red-500"
              htmlFor="gallery-two"
            >
              box
              <input
                type="file"
                name="gallery-two"
                id="gallery-two"
                ref={galleryImgTwoRef}
                onChange={(e) => handleFileChange(e, 1)}
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
                onChange={(e) => handleFileChange(e, 9 / 16)}
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
                onChange={(e) => handleFileChange(e, 1)}
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
              Room Layout
              <input
                type="file"
                name="room-layout"
                id="room-layout"
                ref={roomLayoutRef}
                onChange={(e) => handleFileChange(e, 1)}
              />
            </label>

            {/* Room Video */}
            <label
              className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-md bg-pink-500"
              htmlFor="room-video"
            >
              Room Video
              <input
                type="file"
                name="room-video"
                id="room-video"
                ref={roomVideoRef}
                onChange={(e) => handleFileChange(e, 16 / 9)}
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

      {/* Crop Modal */}
      <Modal
        visible={cropVisible}
        onCancel={() => setCropVisible(false)}
        onOk={onCrop}
        okText="Crop"
        cancelText="Cancel"
        width={800}
        centered
      >
        <div className="w-full">
          {currentFile && (
            <img
              src={currentFile}
              alt="To be cropped"
              ref={(img) => {
                if (img && !cropper) {
                  const newCropper = new Cropper(img, {
                    aspectRatio: aspectRatio, // Use dynamic aspect ratio
                    viewMode: 1,
                  });
                  setCropper(newCropper);
                }
              }}
              style={{ maxHeight: "500px", width: "100%" }}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
