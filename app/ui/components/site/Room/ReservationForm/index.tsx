"use client";
import { useReservation } from "@/store/reservation";
import { Reservation } from "@/types/types";
import { Button, Input } from "antd";
import moment from "moment";
import React from "react";
import { LuUser2, MdChildCare } from "../../../../icons";
import { Summary } from "../Summary";
import { DateTimePickerSection } from "./DateTimePickerSection";
import { HiddenInputs } from "./HIddenInputs";
import { InputNumberSection } from "./InputNumberSection";
import { IoMdCloseCircleOutline, TiWarning } from "../../../../icons";
import { MotionSlideUpDownWarning } from "../../../../motion";

export function ReservationForm({
  roomNumber,
  pricePerNight,
}: {
  roomNumber: string;
  pricePerNight: number;
}) {
  const { TextArea } = Input;
  const { updateReservations, reservations } = useReservation((state) => state);
  const [error, setError] = React.useState({
    show: false,
    type: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries()) as {
      [key: string]: string;
    };

    const checkInMoment = moment(entries.checkInDate);
    const checkOutMoment = moment(entries.checkOutDate);

    if (checkOutMoment.isBefore(checkInMoment)) {
      setError({
        show: true,
        type: "warning",
        title: "Incorrect Date Range",
        description: "Check out date should be after check in date.",
      });
      return;
    }

    const totalDays = checkOutMoment.diff(checkInMoment, "days");
    const applicableDiscount =
      totalDays >= 8 ? "8%" : totalDays >= 5 ? "5%" : "0";

    const reservation: Reservation = {
      adultsCount: Number(entries.adultsCount),
      checkOutDate: entries.checkOutDate,
      checkInDate: entries.checkInDate,
      checkOutTime: entries.checkOutTime,
      checkInTime: entries.checkInTime,
      roomNumber: entries.roomNumber,
      childrenCount: Number(entries.childrenCount) || 0,
      message: entries.message || "",
      reservationId: self.crypto.randomUUID(),
      totalDays,
      totalGuests: Number(entries.adultsCount) + Number(entries.childrenCount),
      pricePerNight,
      discount: applicableDiscount,
    };
    updateReservations([...reservations, reservation]);
  };

  return (
    <>
      <MotionSlideUpDownWarning toggle={!!error.show}>
        <div className="my-4 bg-yellow-200 p-2">
          <div className="flex w-full items-center justify-start text-sm font-bold text-yellow-800">
            <span>
              <TiWarning />
            </span>
            <span>Warning!</span>
            <button
              className="ml-auto"
              onClick={() =>
                setError({
                  show: false,
                  type: "",
                  title: "",
                  description: "",
                })
              }
            >
              <IoMdCloseCircleOutline size={25} />
            </button>
          </div>
          <p className="text-xs font-semibold text-yellow-800">
            Check out date should be after Check in date!
          </p>
        </div>
      </MotionSlideUpDownWarning>

      <form className="py-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          {/* Fields for Adults and Infants */}
          <InputNumberSection
            label="Adults"
            name="adultsCount"
            icon={<LuUser2 />}
          />
          <InputNumberSection
            label="Infants"
            name="childrenCount"
            icon={<MdChildCare />}
          />
          {/* Date and Time Pickers */}
          <DateTimePickerSection
            label="Check In Date and Time"
            dateName="checkInDate"
            timeName="checkInTime"
          />
          <DateTimePickerSection
            label="Check Out Date and Time"
            dateName="checkOutDate"
            timeName="checkOutTime"
            disabledTime={true}
          />
          {/* Message Section */}
          <span className="col-span-full">
            <small className="text-xs">Message (Optional)</small>
            <TextArea rows={4} size="large" variant="filled" name="message" />
          </span>
          {/* Hidden Inputs */}
          <HiddenInputs roomNumber={roomNumber} pricePerNight={pricePerNight} />
          {/* Submit Button */}
          <Button
            type="primary"
            htmlType="submit"
            className="col-span-full mt-5 w-full"
            size="large"
          >
            Add Booking
          </Button>
        </div>
      </form>
      <Summary />
    </>
  );
}
