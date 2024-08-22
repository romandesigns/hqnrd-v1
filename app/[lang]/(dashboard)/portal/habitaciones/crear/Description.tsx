import { Input } from "antd";

export default function Description({
  handleInputChange,
}: {
  handleInputChange: (key: string, value: string | number) => void;
}) {
  return (
    <fieldset className="w-full">
      <legend className="text-xs font-bold uppercase underline">
        Description
      </legend>
      <div className="grid gap-2 rounded-md bg-primary-600/5 p-2">
        <div className="flex gap-2">
          <Input
            size="large"
            placeholder="Title e.g. Basic"
            className="flex-[8] placeholder:text-xs"
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          <Input
            size="large"
            type="number"
            step={150}
            min={0}
            placeholder="Price e.g. 1500"
            className="flex-[3] placeholder:text-xs"
            onChange={(e) =>
              handleInputChange("pricePerNight", Number(e.target.value))
            }
          />
        </div>
        <Input.TextArea
          size="large"
          placeholder="Page Description"
          maxLength={304}
          className="placeholder:text-xs"
          autoSize={{ minRows: 3, maxRows: 5 }}
          onChange={(e) => handleInputChange("pageDescription", e.target.value)}
        />
      </div>
    </fieldset>
  );
}
