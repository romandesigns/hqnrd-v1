import { MdAdd } from "@/app/ui/icons";
import { RooomMetaDataProps } from "@/types/types";
import { Button, Divider, Input, InputRef, Select, Space } from "antd";
import { useRef } from "react";

export function Description({
  categories,
  newCategoryName,
  setNewCategoryName,
  handleNewCategory,
  handleInputChange,
  handleIncreaseStep,
  room,
}: RooomMetaDataProps) {
  const inputRef = useRef<InputRef>(null);
  return (
    <>
      <div className="space-y-4 rounded-md bg-primary-100/10 p-3">
        <fieldset>
          <div className="mb-4 flex items-center justify-between">
            <legend className="text-xs font-bold uppercase">Metadata</legend>
          </div>
          <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
            <Select
              size="large"
              className="w-full placeholder:text-xs"
              placeholder={room.category_name || "Select category"}
              onChange={(value) => handleInputChange("category_id", value)}
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space className="!grid w-full !grid-cols-[1fr_auto] items-center">
                    <Input
                      placeholder="Enter new category"
                      ref={inputRef}
                      className="flex-1 placeholder:text-xs"
                      // value={newCategoryName}
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
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
            <Input
              value={room.room_number || ""}
              size="large"
              type="number"
              min={0}
              placeholder="Unit Number"
              className="placeholder:text-xs"
              onChange={(e) =>
                handleInputChange(
                  "room_number",
                  Number(e.target.value && e.target.value),
                )
              }
            />
            <Input.TextArea
              value={room.meta_description || ""}
              size="large"
              placeholder="Meta Description"
              maxLength={160}
              className="placeholder:text-xs"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={(e) =>
                handleInputChange(
                  "meta_description",
                  e.target.value && e.target.value,
                )
              }
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-xs font-bold uppercase">
            Description
          </legend>
          <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
            <div className="flex gap-2">
              <Input
                size="large"
                value={room.title || ""}
                placeholder="Title e.g. Basic"
                className="flex-[8] placeholder:text-xs"
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
              <Input
                value={room.price_per_night || ""}
                size="large"
                type="number"
                step={150}
                min={0}
                placeholder="Price e.g. 1500"
                className="flex-[3] placeholder:text-xs"
                onChange={(e) =>
                  handleInputChange("price_per_night", Number(e.target.value))
                }
              />
            </div>
            <Input.TextArea
              value={room.page_description || ""}
              size="large"
              placeholder="Page Description"
              maxLength={304}
              className="placeholder:text-xs"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={(e) =>
                handleInputChange("page_description", e.target.value)
              }
            />
          </div>
        </fieldset>
      </div>

      <Button
        onClick={() => handleIncreaseStep()}
        size="large"
        className="!h-auto w-full !bg-neutral-800 !py-2 !text-white"
      >
        Next
      </Button>
    </>
  );
}
