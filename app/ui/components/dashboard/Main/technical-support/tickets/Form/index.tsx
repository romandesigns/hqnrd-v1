"use client";

import { Modal } from "@/app/ui/features";
import { FaCheck } from "@/app/ui/icons";
import { useModalToggle } from "@/store/modalToggle";
import { TicketFormTypes, TicketOption } from "@/types";
import { createNewTicketAction } from "@/utils/actions";
import { createClient } from "@/utils/supabase/client";
import type { DatePickerProps, UploadProps } from "antd";
import { Button, DatePicker, Flex, Input, Radio, Select, Upload, message } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { TicketHistory } from "./TicketHistory";
import { assigneeOptions, developmentTypeOptions, issueTypeOptions, locationOptions, priorityOptions } from "./Utils/options";
import { useUserStore } from "@/store/user";
import { UserMetadata } from "@supabase/supabase-js";


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

export  function TicketForm() {
  const [ticketForm, setTicketForm] = useState<TicketFormTypes>(initialTicketForm);
  const { isOpen, closeModal } = useModalToggle((state) => state);
  const { staff, setStaff } = useState<{id:string,name:string}[]>([]);
  const { lang } = useParams();
  const supabase = createClient();

  const {user,setUser} = useUserStore(state => state);
  

  const handlePriorityChange = (value:string) => {
    setTicketForm({ ...ticketForm, priority: value });
  };
  const handleDueDateChange: DatePickerProps['onChange'] = (date) => {
    setTicketForm({ ...ticketForm, dueDate: date! });
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
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  };
  const filterSort = (optionA: TicketOption, optionB: TicketOption) => {
    return (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());
  };

  dayjs.extend(buddhistEra);

  const defaultValue = dayjs(dayjs().format("MM/DD/YYYY hh:mm A")).locale(`${lang}`);

  useEffect(() => {
    supabase.auth.getUser()
    .then(({data:{user}}) =>  setUser(user?.user_metadata as UserMetadata))
    .catch((error) => console.error(error)); 
  }, [setUser, supabase.auth]);

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
          value={`${user.name} ${user.last_name}`}
          
        />
        {/* Author Email*/}
        <Input
          type="email"
          className="!hidden"
          name="authorEmail"
          value={`${user.email}`}
        />
        <Input
          type="text"
          className="!hidden"
          name="autorId"
          value={`${user.sub}`}
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
              <Radio.Group>
                <Radio value="Front End">Front End</Radio>
                <Radio value="Back End">Back End</Radio>
                <Radio value="Design">Design</Radio>
              </Radio.Group>
            </Flex>
          </>
          )
        }
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
        {
          ticketForm.location === 'page' && (
          <>
            <Flex gap={16}>
            <Input
          placeholder="Page name"
          type="text"
          size="large"
          name="pageName"
          required
        />
        <Input
          placeholder="Component name"
          type="text"
          size="large"
          name="componentName"
          required
        />
            </Flex>
          </>
          )
        }
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
