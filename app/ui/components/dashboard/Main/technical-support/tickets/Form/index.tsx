"use client";

import { Modal } from "@/app/ui/features";
import { FaCheck } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { useUserStore } from "@/store/user";
import type { TicketFormTypes, TicketOption, TicketStaff } from "@/types";
import { createNewTicketAction } from "@/utils/actions";
import { createClient } from "@/utils/supabase/client";
import type { DatePickerProps, PickerLocale, UploadProps } from "antd";
import { Button, DatePicker, Flex, Input, Radio, Select, Upload, message } from "antd";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import React, { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { TicketHistory } from "./TicketHistory";
import { developmentTypeOptions, issueTypeOptions, priorityOptions } from "./Utils/options";

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

export  function TicketForm({lang, openModal, setOpenModal}: {lang:Locale,openModal: boolean, setOpenModal: (value:boolean) => void}) {
  const [ticketForm, setTicketForm] = useState<TicketFormTypes>(initialTicketForm);
  const [staffMemembers, setStaffMembers] = useState<TicketStaff[]>([]);

  useEffect(() => {
    const getStaffs = async () => {
      const supabase = createClient();
      const {data} = await supabase.from('profiles').select('id, name, last_name, user_role').neq('user_role', 'guest');
      setStaffMembers(data as TicketStaff[]);
    };
    getStaffs();
  }, []);

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
  
  type LabelProps = {
    children: React.ReactNode;
  };

const extractStringFromLabel = (label: string | React.ReactElement<LabelProps>) => {
  if (typeof label === 'string') {
    return label.toLowerCase();
  } else if (React.isValidElement(label) && typeof label.props.children === 'string') {
    // Asserting that props has the structure of LabelProps
    const props = label.props as LabelProps;
    if (typeof props.children === 'string') {
      return props.children.toLowerCase();
    }
  }
  return ''; // Default case if the label is neither string nor React element with string
};

// Function to filter options based on input
const filterOption = (input: string, option?: TicketOption) => {
  const labelString = extractStringFromLabel(option?.label as string);
  return labelString.includes(input.toLowerCase());
};

// Function to sort options alphabetically
const filterSort = (optionA: TicketOption, optionB: TicketOption) => {
  const labelA = extractStringFromLabel(optionA.label as string);
  const labelB = extractStringFromLabel(optionB.label as string);
  return labelA.localeCompare(labelB);
};

  dayjs.extend(buddhistEra);

  const defaultValue = useMemo(() => {
    return dayjs().locale(lang).format("MM/DD/YYYY hh:mm A");
  }, [lang]);

  const staffs: TicketOption[] = useMemo(() => {
    const groupedByRole = staffMemembers.reduce((accumulator, staff) => {
      const role = staff.user_role || 'Other';
      if (!accumulator[role]) {
        accumulator[role] = [];
      }
      accumulator[role].push(staff);
      return accumulator;
    }, {} as Record<string, TicketStaff[]>);
    return Object.entries(groupedByRole).map(([role, members]) => ({
      label: <span>{role}</span>,
      value: role,
      options: members.map(member => ({
        label: <span>{`${member.name} ${member.last_name}`}</span>,
        value: member.id,
      })),
    }));
  }, [staffMemembers]);

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
          defaultValue={user?.user?.id}
          readOnly
        />
        <Input
          type="text"
          className="!hidden"
          name="lang"
          defaultValue={lang}
          readOnly
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
          format="MM/DD/YYYY h:mm A"
          defaultValue={dayjs(defaultValue)}
          showTime={{ use12Hours: true, format: "h:mm A" }}
          showWeek
          onChange={handleDueDateChange}
          required
          locale={lang as PickerLocale }
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
