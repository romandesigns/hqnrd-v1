"use client";

import { Modal } from "@/app/ui/features";
import { FaCheck } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import guests from "@/public/assets/data/guests.json";
import { useUserStore } from "@/store/user";
import { TicketFormTypes, TicketOption } from "@/types";
import { createNewTicketAction } from "@/utils/actions";
import type { DatePickerProps, UploadProps } from "antd";
import { Button, DatePicker, Flex, Input, Radio, Select, Upload, message } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { ChangeEventHandler, use, useEffect, useMemo, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { TicketHistory } from "./TicketHistory";
import { developmentTypeOptions, issueTypeOptions, priorityOptions } from "./Utils/options";
import { createClient } from "@/utils/supabase/client";
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

const initialTicketForm: TicketFormTypes = {
  title: '',
  priority: '',
  dueDate: dayjs(dayjs().format("MM/DD/YYYY hh:mm A")),
  issueType: '',
  developmentType: '',
  location: '',
  description: '',
  assignee: '',
};

const getStaff = async () => {
  const { data, error } = await createClient().from('profiles').select('*');
  if (error) {
    console.log(error);
  }
  console.log(getStaff);
  return data;
};

export  function TicketForm({lang, openModal, setOpenModal}: {lang:Locale,openModal: boolean, setOpenModal: (value:boolean) => void}) {
  const [ticketForm, setTicketForm] = useState<TicketFormTypes>(initialTicketForm);

  // const { isOpen, closeModal } = useModalToggle((state) => state);
 
  const {user,setUser} = useUserStore(state => state);
  
  const handlePriorityChange = (value: string) => {
    setTicketForm({ ...ticketForm, priority: value });
  };
  const handleDueDateChange: DatePickerProps['onChange'] = (date) => {
    setTicketForm({ ...ticketForm, dueDate: date ? date.toISOString() : undefined });
  };
  const handleIssueTypeChange = (value:string) => {
    setTicketForm({ ...ticketForm, issueType: value as string });
  };
  const handleDevelopmentTypeChange = (value:string) => {
    setTicketForm({ ...ticketForm, developmentType: value as string });
  };
  const handleLocationChange = (value:string) => {
    setTicketForm({ ...ticketForm, location: value as string });
  };
  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTicketForm({ ...ticketForm, description: e.target.value });
  };
  const handleAssigneeChange = (value:string) => {
    setTicketForm({ ...ticketForm, assignee: value as string });
  };
  const filterOption = (input: string, option?: TicketOption) => {
    return (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase());
  };
  const filterSort = (optionA: TicketOption, optionB: TicketOption) => {
    return (optionA?.label ?? '').toString().toLowerCase().localeCompare((optionB?.label ?? '').toString().toLowerCase());
  };

  dayjs.extend(buddhistEra);

  const defaultValue = dayjs(dayjs().format("MM/DD/YYYY hh:mm A")).locale(`${lang}`);

  const staffs: TicketOption[] = useMemo(() => {
    const filteredGuests = guests.filter((guest) => guest.accountType !== 'Guest');
    // Group accountTypes
    const groupedGuests = filteredGuests.reduce((acc, guest) => {
      if (!acc[guest.accountType]) {
        acc[guest.accountType] = [];
      }
      acc[guest.accountType].push(guest);
      return acc;
    }, {} as Record<string, typeof guests>);
    // Map grouped accountTypes to options
    return Object.entries(groupedGuests).map(([accountType, guests]) => ({
      label: <span>{accountType}</span>,
      value: accountType,
      options: guests.map((guest) => ({
        label: <span>{`${guest.name} ${guest.lastName}`}</span>,
        value: `${guest.name} ${guest.lastName}`,
      })),
    }));
  }, []);

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
    <Modal title="Create Ticket" open={openModal} onClose={() => setOpenModal(!openModal)} >
      <TicketHistory />
      <form className="grid grid-cols-1 gap-4" action={async (formData: FormData) => {
          const response = await createNewTicketAction(ticketForm, formData);
          if(response.success){
            setOpenModal(!openModal);
          }
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
        {/* Author Id*/}
        <Input
          type="text"
          className="!hidden"
          name="autorId"
          value={user?.user?.id}
        />
        <Input
          type="text"
          className="!hidden"
          name="lang"
          value={lang}
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
        {
          ticketForm.issueType === 'development' && (
          <>
            <Select
              size="large"
              className="w-full"
              placeholder="Development Type"
              menuItemSelectedIcon={<FaCheck />}
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={developmentTypeOptions}
              onChange={handleDevelopmentTypeChange}
            />
            <Flex>
              <Radio.Group name="implementationType">
                <Radio value="Front End">Front End</Radio>
                <Radio value="Back End">Back End</Radio>
                <Radio value="Design">Design</Radio>
              </Radio.Group>
            </Flex>
            <Flex gap={16}>
              <Input
                placeholder="Page name"
                type="text"
                size="large"
                name="pageLocation"
                required
              />
              <Input
                placeholder="Component name"
                type="text"
                size="large"
                name="pageComponent"
                required
              />
            </Flex>
          </>
          )
        }
        {/* Ticket Location */}
        {/* <Select
          size="large"
          className="w-full"
          placeholder="Location"
          menuItemSelectedIcon={<FaCheck />}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={locationOptions}
          onChange={handleLocationChange}
        /> */}
        {/* Ticket Assignee */}
        <Select
          size="large"
          className="w-full"
          placeholder="Assignee"
          menuItemSelectedIcon={<FaCheck />}
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={staffs}
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
