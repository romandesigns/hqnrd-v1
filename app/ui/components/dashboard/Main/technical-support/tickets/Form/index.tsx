"use client";

import { Modal } from "@/app/ui/features";
import { FaCheck } from "@/app/ui/icons";
import { useModalToggle } from "@/store/modalToggle";
import { createNewTicketAction } from "@/utils/actions";
import type { DatePickerProps, InputProps, SelectProps, UploadProps } from "antd";
import { Button, DatePicker, Input, Select, Upload, message } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs, { Dayjs } from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useParams } from "next/navigation";
import { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { TicketHistory } from "./TicketHistory";

// Component level locale
const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "MM/DD/YYYY",
    fieldDateTimeFormat: "MM/DD/YYYY  ~  hh:mm A",
    yearFormat: "YYYY",
    cellYearFormat: "YYYY",
  },
};

// Define the type for the ticket form state
type TicketForm = {
  title: string;
  priority: string;
  dueDate: Dayjs;
  issueType: string;
  location: string;
  description: string;
  assignee: string;
};

const initialTicketForm: TicketForm = {
  title: '',
  priority: '',
  dueDate: dayjs(dayjs().format("MM/DD/YYYY hh:mm A")),
  issueType: '',
  location: '',
  description: '',
  assignee: '',
};

// Define the type for the Select component options
type Option = {
  value: string;
  label: string;
};

const priorityOptions: Option[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const issueTypeOptions: Option[] = [
  { value: 'development', label: 'Development' },
  { value: 'housekeeping', label: 'Housekeeping' },
  { value: 'finance', label: 'Finance' },
  { value: 'task', label: 'Task' },
];

const locationOptions: Option[] = [
  { value: 'page', label: 'Page' },
  { value: 'room', label: 'Room' },
  { value: 'hotel', label: 'Hotel' },
];

const assigneeOptions: Option[] = [
  { value: 'roman-feliz', label: 'Roman Feliz' },
  { value: 'alipio-feliz-matos', label: 'Alipio Feliz Matos' },
  { value: 'ayelin-de-la-cruz', label: 'Ayeling de la Cruz' },
];

export function TicketForm() {
  const [ticketForm, setTicketForm] = useState<TicketForm>(initialTicketForm);
  const { isOpen, closeModal } = useModalToggle((state) => state);
  const { lang } = useParams();

  const handlePriorityChange: SelectProps<Option>['onChange'] = (value) => {
    setTicketForm({ ...ticketForm, priority: value as string });
  };

  const handleDueDateChange: DatePickerProps['onChange'] = (date) => {
    setTicketForm({ ...ticketForm, dueDate: date! });
  };

  const handleIssueTypeChange: SelectProps<Option>['onChange'] = (value) => {
    setTicketForm({ ...ticketForm, issueType: value as string });
  };

  const handleLocationChange: SelectProps<Option>['onChange'] = (value) => {
    setTicketForm({ ...ticketForm, location: value as string });
  };

  const handleDescriptionChange: InputProps['onChange'] = (e) => {
    setTicketForm({ ...ticketForm, description: e.target.value });
  };

  const handleAssigneeChange: SelectProps<Option>['onChange'] = (value) => {
    setTicketForm({ ...ticketForm, assignee: value as string });
  };

  const filterOption = (input: string, option?: Option) => {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  };

  const filterSort = (optionA: Option, optionB: Option) => {
    return (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());
  };

  dayjs.extend(buddhistEra);

  const defaultValue = dayjs(dayjs().format("MM/DD/YYYY hh:mm A")).locale(`${lang}`);

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Modal title="Create Ticket" open={isOpen} onClose={closeModal}>
      <TicketHistory />
      <form className="grid grid-cols-1 gap-4" action={async (formData: FormData) => {
          await createNewTicketAction(ticketForm, formData);
        }}>
        {/* Ticket Title */}
        <Input
          placeholder="Title"
          type="text"
          size="large"
          name="title"
          onChange={(e) => setTicketForm({ ...ticketForm, title: e.target.value })}
          required
        />
        {/* Author */}
        <Input
          type="text"
          className="!hidden"
          name="author"
          value={'Roman Feliz'}
          
        />
        {/* Author Email*/}
        <Input
          type="email"
          className="!hidden"
          name="authorEmail"
          value={'romfeliz@gmail.com'}
        />
        {/* Created On */}
        <Input
          className="!hidden"
          name="createdOn"
          value={new Date().toISOString()}
        />
        {/* Ticket Priority */}
        <Select
          size="large"
          className="w-full"
          placeholder="Ticket Priority"
          menuItemSelectedIcon={<FaCheck />}
          onChange={handlePriorityChange}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={priorityOptions}
        />
        {/* Ticket Due Date */}
        <DatePicker
          minDate={dayjs()}
          placeholder="Due Date"
          size="large"
          defaultValue={defaultValue}
          showTime={{ use12Hours: true, format: "HH:mm A" }}
          showWeek
          locale={buddhistLocale}
          onChange={handleDueDateChange}
          required
        />
        {/* Ticket Issue type */}
        <Select
          size="large"
          className="w-full"
          placeholder="Select Issue Type"
          menuItemSelectedIcon={<FaCheck />}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={issueTypeOptions}
          onChange={handleIssueTypeChange}
        />
        {/* Ticket Location */}
        <Select
          size="large"
          className="w-full"
          placeholder="Location"
          menuItemSelectedIcon={<FaCheck />}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={locationOptions}
          onChange={handleLocationChange}
        />
        {/* Ticket Assignee */}
        <Select
          size="large"
          className="w-full"
          placeholder="Assignee"
          menuItemSelectedIcon={<FaCheck />}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={assigneeOptions}
          onChange={handleAssigneeChange}
        />
        {/* Ticket Description */}
        <Input.TextArea
          showCount
          maxLength={100}
          placeholder="Description"
          style={{ height: 120, resize: 'none' }}
          value={ticketForm.description}
          onChange={handleDescriptionChange}
        />
        {/* Ticket Attachment */}
        <Upload {...props}>
          <Button icon={<MdOutlineAttachFile />}>Attachment</Button>
        </Upload>
        <Button htmlType="submit" className="btn !bg-neutral-800 !text-neutral-200 my-4" size="large">
          Submit
        </Button>
      </form>
    </Modal>
  );
}
