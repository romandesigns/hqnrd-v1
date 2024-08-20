"use client";

import { MdAdd } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { newRoomCategoryAction } from "@/utils/actions/roomActions";
import type { InputRef } from "antd";
import { Button, Divider, Input, message, Select, Space, Switch } from "antd";
import { useRef, useState } from "react";
import { roomAmenities, roomFeatures } from "./NewRoomFormIcons";

interface NewRoomCategoryTypes {
  id: number;
  name: string;
  slug: string;
}

export default function NewRoomFormDetails({
  params: { lang },
  fetchedCategories,
}: Readonly<{
  params: { lang: Locale };
  fetchedCategories: NewRoomCategoryTypes[];
}>) {
  const [items, setItems] = useState<NewRoomCategoryTypes[]>(fetchedCategories);
  const [newCategoryName, setNewCategoryName] = useState<string>();
  const inputRef = useRef<InputRef>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [room, setRoom] = useState<any>({});

  const handleNewCategory = async (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    if (!newCategoryName) {
      messageApi.error("Category name is required");
      return;
    }

    //@ts-ignore
    const { error, data } = await newRoomCategoryAction(newCategoryName, lang);
    if (error) {
      messageApi.error(error);
      return;
    }
    if (data) {
      setItems((prev) => [...prev, ...data]);
      setNewCategoryName("");
    }
  };

  const handleCreateNewRoom = () => {
    console.log("New room handler");
    console.log(room);
  };

  const handlePreview = () => {
    console.log("New room handler");
  };

  const { TextArea } = Input;

  return (
    <>
      {contextHolder}
      <section className="mt-4 grid h-full w-full grid-cols-1 grid-rows-1 items-stretch justify-stretch gap-4 p-2 lg:grid-cols-[3fr_4fr] 2xl:grid-cols-[2fr_4fr]">
        <form className="relative flex h-full w-full flex-col gap-3 rounded-md bg-primary-100/10 p-3">
          {/* Features */}
          <fieldset className="w-full">
            {/* Heading */}
            <div className="mb-1 flex items-center justify-between">
              <legend className="text-xs font-bold uppercase underline">
                Metadata
              </legend>
              <div className="flex items-center justify-center gap-2">
                <Button type="primary" onClick={handleCreateNewRoom}>
                  Save
                </Button>
                <Button className="md:!hidden" onClick={handlePreview}>
                  Preview
                </Button>
              </div>
            </div>
            {/* Category */}
            <div className="grid grid-flow-row grid-cols-1 grid-rows-2 gap-2 rounded-md bg-primary-600/5 p-2">
              <div>
                <Select
                  size="large"
                  className="w-full placeholder:text-xs"
                  placeholder="Select category"
                  onChange={(e) =>
                    setRoom({ ...room, category_id: e.target.value })
                  }
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider style={{ margin: "8px 0" }} />
                      <Space className="!grid w-full !grid-cols-[1fr_auto] !grid-rows-[1fr] items-center justify-start">
                        <Input
                          placeholder="Enter new category"
                          ref={inputRef}
                          className="flex-1 placeholder:text-xs"
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                        <Button
                          type="primary"
                          icon={<MdAdd />}
                          onClick={handleNewCategory}
                        >
                          Add item
                        </Button>
                      </Space>
                    </>
                  )}
                  options={items.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </div>
              {/* Unite Number */}
              <div className="flex flex-col items-start justify-center gap-2">
                <Input
                  size="large"
                  type="number"
                  min={0}
                  placeholder="Unit Number"
                  name="unite_number"
                  className="placeholder:text-xs"
                  onChange={(e) =>
                    setRoom({ ...room, roomNumber: Number(e.target.value) })
                  }
                />
              </div>
              {/* Meta Description */}
              <div className="flex flex-col items-start justify-center gap-2">
                <TextArea
                  size="large"
                  placeholder="Meta Description"
                  name="meta_description"
                  className="placeholder:text-xs"
                  maxLength={160}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  onChange={(e) =>
                    setRoom({ ...room, meta_description: e.target.value })
                  }
                />
              </div>
            </div>
          </fieldset>
          {/* Page Description */}
          <fieldset className="w-full">
            {/* Heading */}
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Description
            </legend>
            {/* Category */}
            <div className="grid grid-flow-row grid-cols-1 grid-rows-[auto_auto] gap-2 rounded-md bg-primary-600/5 p-2">
              {/* Title */}
              <div className="flex items-start justify-center gap-2">
                <Input
                  size="large"
                  placeholder="Title e.g. Basica"
                  name="title"
                  className="flex-[8] placeholder:text-xs"
                  onChange={(e) => setRoom({ ...room, title: e.target.value })}
                />
                <Input
                  size="large"
                  type="number"
                  step={150}
                  min={0}
                  placeholder="Price e.g. 1500"
                  name="price_per_night"
                  className="flex-[3] placeholder:text-xs"
                  onChange={(e) =>
                    setRoom({ ...room, pricePerNight: Number(e.target.value) })
                  }
                />
              </div>

              {/* Page Description */}
              <div className="flex flex-col items-start justify-center gap-2">
                <TextArea
                  size="large"
                  className="placeholder:text-xs"
                  placeholder="Page Description"
                  name="meta_description"
                  maxLength={304}
                  autoSize={{ minRows: 5, maxRows: 5 }}
                  onChange={(e) =>
                    setRoom({ ...room, description: e.target.value })
                  }
                />
              </div>
            </div>
          </fieldset>
          {/* Features */}
          <fieldset className="w-full">
            {/* Heading */}
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Features
            </legend>
            {/* Category */}
            <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 rounded-md bg-primary-600/5 p-2 py-4">
              {roomFeatures.map((feature) => {
                if (
                  feature.iconName !== "liabedsolid" &&
                  feature.iconName !== "tbrulermeasure"
                ) {
                  return (
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center justify-start gap-2">
                        <feature.defaultName key={feature.iconName} />
                        <p className="text-xs">{feature.description}</p>
                      </div>
                      <Switch size="small" />
                    </div>
                  );
                }
              })}
              <div className="col-span-full">
                <Divider
                  style={{ margin: "8px 0" }}
                  className="col-span-full"
                />
                <div className="col-span-full grid grid-cols-2 grid-rows-1 gap-4">
                  <div className="flex items-center justify-start">
                    <p className="mr-4 text-xs">Bed Quantity</p>
                    <Input
                      placeholder="1.5"
                      size="middle"
                      type="number"
                      name="bed_quantity"
                      className="flex-1"
                      onChange={(e) =>
                        setRoom({ ...room, bedQnty: Number(e.target.value) })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-start">
                    <p className="mr-4 text-xs">Square Feet</p>
                    <Input
                      placeholder="250"
                      type="number"
                      size="middle"
                      name="square_feet"
                      className="flex-1"
                      onChange={(e) =>
                        setRoom({ ...room, bedQnty: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          {/* Amenities */}
          <fieldset className="w-full">
            {/* Heading */}
            <legend className="mb-1 text-xs font-bold uppercase underline">
              Amenities
            </legend>
            {/* Category */}
            <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 rounded-md bg-primary-600/5 p-2 py-4">
              {roomAmenities.map((feature) => {
                if (
                  feature.iconName !== "liabedsolid" &&
                  feature.iconName !== "tbrulermeasure"
                ) {
                  return (
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center justify-start gap-2">
                        <feature.defaultName key={feature.iconName} />
                        <p className="text-xs">{feature.description}</p>
                      </div>
                      <Switch size="small" />
                    </div>
                  );
                }
              })}
            </div>
          </fieldset>
        </form>
        <article className="h-full w-full rounded-md border max-md:hidden">
          Content Here
        </article>
      </section>
    </>
  );
}
