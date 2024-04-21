"use client";
import { Button, DatePicker, Input, InputNumber, TimePicker } from "antd";
import dayjs from "dayjs";
import { LuUser2, MdChildCare } from "../../icons";
import { Summary } from "./Summary";
import { useReservation } from "@/store/reservation";

export function ReservationForm({ roomNumber }: { roomNumber: string }) {
  const { TextArea } = Input;

  const { updateReservations, reservations } = useReservation((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let uuid = self.crypto.randomUUID();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.reservationId = uuid;
    updateReservations([...reservations, data]);
  };

  return (
    <>
      <form className="py-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  gap-3">
          <span>
            <small className="text-xs">Adults</small>
            <InputNumber
              name="adultsCount"
              variant="filled"
              placeholder="0"
              size="large"
              style={{ width: "100%" }}
              prefix={<LuUser2 />}
              required
            />
          </span>
          <span>
            <small className="text-xs">Infants</small>
            <InputNumber
              name="childrenCount"
              variant="filled"
              placeholder="0"
              size="large"
              style={{ width: "100%" }}
              prefix={<MdChildCare />}
              required
            />
          </span>
          <span className="col-span-full ">
            <small className="text-xs">Check In Date and Time</small>
            <div className="grid w-full grid-cols-2 grid-rows-1 gap-2">
              <DatePicker
                size="large"
                variant="filled"
                required
                name="checkinDate"
              />
              <TimePicker
                size="large"
                variant="filled"
                required
                name="checkinTime"
                use12Hours
                format="h:mm A"
                minuteStep={10}
              />
            </div>
          </span>
          <span className="col-span-full">
            <small className="text-xs">Check Out Date and Time</small>
            <div className="grid w-full grid-cols-2 grid-rows-1 gap-2">
              <DatePicker
                size="large"
                variant="filled"
                required
                name="checkOutDate"
              />
              <TimePicker
                size="large"
                variant="filled"
                disabled
                name="checkOutTime"
                use12Hours
                format="h:mm A"
                minuteStep={10}
                defaultValue={dayjs("11:30", "hh:mm")}
              />
            </div>
          </span>
          <span className="col-span-full ">
            <small className="text-xs">Message (Optional)</small>
            <div className="grid w-full grid-cols-1">
              <TextArea rows={4} size="large" variant="filled" name="message" />
              <Input
                type="text"
                name="roomNumber"
                value={roomNumber}
                className="!hidden"
              />
            </div>
          </span>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-5 w-full "
          size="large"
        >
          Add Booking
        </Button>
      </form>
      <Summary />
    </>
  );
}
