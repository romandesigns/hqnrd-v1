"use client";
import { Modal } from "@/app/ui/features";
import { IoMdAddCircleOutline, RiErrorWarningFill } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { DevTaskTypes, StaffMember } from "@/types";
import { createSupportTicketAction } from "@/utils/actions/createSupportTicketAction";
import { format } from "@/utils/formatter/format";
import { Button, DatePicker, Input, Select, notification } from "antd";
import dayjs from "dayjs";
import React, { useCallback, useMemo } from "react";

type ResponseTypes =
  | {
      path: string | number | null;
      errors: string | null;
      message: string | null;
    }
  | undefined;

type TicketFormTypes = {
  title?: string;
  type?: string;
  priority?: string;
  assignee?: string;
  dev_task?: DevTaskTypes;
  page?: string;
  component?: string;
  description?: string;
  dueDate?: string;
  lang: Locale;
  status: string;
  authorId: string;
};

export function TicketForm({
  lang,
  userId,
  staffMembers,
}: Readonly<{ lang: Locale; userId: string; staffMembers: StaffMember[] }>) {
  const [open, setOpen] = React.useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = React.useState<TicketFormTypes>({
    lang: lang,
    status: "backlog",
    authorId: userId,
  });

  const handleChange = useCallback((key: keyof TicketFormTypes, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleFormSubmission = () => {
    setFormData({} as TicketFormTypes);
    setOpen(false);
  };

  const groupedOptions = useMemo(
    () =>
      staffMembers.reduce(
        (acc, staff) => {
          acc[staff.user_role] = acc[staff.user_role] || [];
          acc[staff.user_role].push({
            label: <span>{staff.name}</span>,
            value: staff.id,
          });
          return acc;
        },
        {} as Record<string, { label: JSX.Element; value: string }[]>,
      ),
    [staffMembers],
  );

  const openNotification = (errorMessage: ResponseTypes) => {
    api.open({
      message: errorMessage?.path
        ? `${format.firstLetterToUpperCase(errorMessage?.path as string)} name is incorrect!`
        : "",
      description: errorMessage?.errors,
      icon: <RiErrorWarningFill size={20} className="text-red-500" />,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="flex w-full items-center justify-end p-8 px-4 pb-4">
        <Button
          onClick={() => setOpen(!open)}
          type="primary"
          className="!flex items-center justify-center rounded-md text-white shadow-md"
          icon={<IoMdAddCircleOutline size={20} />}
        >
          <span>New</span>
        </Button>
      </div>
      <Modal open={open} setOpen={setOpen} title="Create Ticket">
        <form
          className="space-y-4 p-2"
          action={async (e) => {
            const response: ResponseTypes =
              await createSupportTicketAction(formData);
            if (response?.errors) {
              openNotification(response);
            }
            if (response?.message === "success") {
              handleFormSubmission();
            }
          }}
        >
          <Input
            placeholder="Ticket title"
            size="large"
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
          <input
            type="text"
            name="lang"
            value={lang}
            className="hidden"
            readOnly
          />
          <Select
            placeholder="Priority"
            style={{ width: "100%" }}
            size="large"
            onChange={(value) => handleChange("priority", value)}
            options={[
              { label: "High", value: "high" },
              { label: "Medium", value: "medium" },
              { label: "Low", value: "low" },
            ]}
          />
          <DatePicker
            showTime={{ format: "hh:mm A" }}
            placeholder="Due Date"
            size="large"
            defaultValue={dayjs()}
            minDate={dayjs()}
            required
            format="MM/DD/YYYY ~ hh:mm:ss A"
            style={{ width: "100%" }}
            onChange={(value) =>
              handleChange("dueDate", value ? value.toISOString() : null)
            }
          />
          <Select
            placeholder="Type"
            style={{ width: "100%" }}
            size="large"
            onChange={(value) => handleChange("type", value)}
            options={[
              { label: "Development", value: "Development" },
              { label: "Administrative", value: "Administrative" },
            ]}
          />
          {formData.type === "Development" && (
            <div className="space-y-4">
              <fieldset className="flex items-center justify-center gap-2">
                <Input
                  placeholder="Page"
                  size="large"
                  onChange={(e) => handleChange("page", e.target.value)}
                />
                <Input
                  placeholder="Component"
                  size="large"
                  onChange={(e) => handleChange("component", e.target.value)}
                />
              </fieldset>
              <fieldset className="flex w-full text-center">
                <Select
                  placeholder="Development Type"
                  style={{ width: "100%" }}
                  size="large"
                  onChange={(value) => handleChange("dev_task", value)}
                  options={[
                    {
                      label: "New Implementation",
                      value: "new implementation",
                    },
                    { label: "Fix", value: "fix" },
                    { label: "Optimization", value: "optimization" },
                  ]}
                />
              </fieldset>
            </div>
          )}
          <Select
            placeholder="Staff"
            size="large"
            style={{ width: "100%" }}
            onChange={(value) => handleChange("assignee", value)}
            options={Object.entries(groupedOptions).map(([role, options]) => ({
              label: <span>{role}</span>,
              title: role,
              options,
            }))}
          />
          <Input.TextArea
            showCount
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="disable resize"
            style={{ height: 120 }}
          />

          <div className="pt-2">
            <Button
              type="primary"
              size="large"
              className="w-full"
              htmlType="submit"
            >
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
