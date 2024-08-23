import { Button, Divider, Input, Select, Space, InputRef } from "antd";
import { MdAdd } from "@/app/ui/icons";
import { useRef } from "react";
import { RooomMetaDataProps } from "@/types/types";

export default function MetaData({
  categories,
  newCategoryName,
  setNewCategoryName,
  handleNewCategory,
  handleInputChange,
  handleCreateNewRoom,
  handlePreview,
}: RooomMetaDataProps) {
  const inputRef = useRef<InputRef>(null);
  return (
    <fieldset className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <legend className="text-xs font-bold uppercase underline">
          Metadata
        </legend>
        <div className="flex items-center gap-2">
          <Button type="primary" onClick={handleCreateNewRoom}>
            Save Room Description
          </Button>
          <Button className="md:!hidden" onClick={handlePreview}>
            Preview
          </Button>
        </div>
      </div>
      <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
        <Select
          size="large"
          className="w-full placeholder:text-xs"
          placeholder="Select category"
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
          options={categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
        />
        <Input
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
  );
}
