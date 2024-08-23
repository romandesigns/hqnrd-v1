import React from "react";

export function Media() {
  return (
    <article className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-md bg-primary-100/10 p-3">
      <div>
        <div className="grid grid-cols-[1.4fr_1fr] grid-rows-1 gap-4">
          {/* Open Graph Image */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase underline">
              Open Graph Image
            </h3>
            <div className="rounded-md bg-primary-600/5 p-2">
              <div className="w-full">
                <span className="mb-4 block">
                  <figure className="flex aspect-og items-center justify-center bg-neutral-400">
                    OG IMAGE
                  </figure>
                </span>
                <Button type="primary">Save OG Image</Button>
              </div>
            </div>
          </div>

          {/* Open Graph Image */}
          <div className="flex h-full flex-col gap-2">
            <h3 className="text-xs font-bold uppercase underline">
              Open Graph Image
            </h3>
            <div className="h-full rounded-md bg-primary-600/5 p-2">
              <div className="h-full w-full">
                <span className="relative block h-full">
                  <ImgCrop rotationSlider aspect={4 / 3}>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader relative h-full"
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          className="absolute bottom-0 left-0 top-0 h-full w-full object-cover"
                          src={imageUrl}
                          alt="avatar"
                        />
                      ) : (
                        <Button type="primary">Save OG Image</Button>
                      )}
                    </Upload>
                  </ImgCrop>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
