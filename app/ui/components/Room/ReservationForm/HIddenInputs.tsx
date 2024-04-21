import { Input } from "antd";

export function HiddenInputs({
  roomNumber,
  pricePerNight,
}: {
  roomNumber: string;
  pricePerNight: number;
}) {
  return (
    <div className="hidden">
      <Input type="text" name="roomNumber" value={roomNumber} />
      <Input
        type="text"
        name="pricePerNight"
        value={pricePerNight.toString()}
      />
    </div>
  );
}
