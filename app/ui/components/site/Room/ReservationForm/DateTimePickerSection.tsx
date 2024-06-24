import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";

export function DateTimePickerSection({
  label,
  dateName,
  timeName,
  disabledTime,
}: {
  label: string;
  dateName: string;
  disabledTime?: boolean;
  timeName: string;
}) {
  return (
    <span className="col-span-full">
      <small className="text-xs">{label}</small>
      <div className="grid w-full grid-cols-2 gap-2">
        <DatePicker
          size="large"
          variant="filled"
          required
          name={dateName}
          format={"MM-DD-YYYY"}
          minDate={dayjs(dayjs(), "YYYY-MM-DD")}
          defaultValue={dateName === "checkInDate" ? dayjs() : undefined}
        />
        <TimePicker
          size="large"
          variant="filled"
          required
          name={timeName}
          use12Hours
          format="h:mm A"
          minuteStep={10}
          defaultValue={disabledTime ? dayjs("11:30 AM", "hh:mm") : undefined}
          disabled={disabledTime}
        />
      </div>
    </span>
  );
}
