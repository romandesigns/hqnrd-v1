"use client";
import { Modal } from "@/app/ui/features";
import { IoMdAddCircleOutline } from "@/app/ui/icons";
import { type RadioChangeEvent } from "antd";
import { Button, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import React, { useMemo, useCallback } from "react";

type StaffMember = {
  role: string;
  name: string;
};

type TicketFormTypes = {
  title?: string;
  type?: string;
  priority?: string;
  assignee?: string;
  developmentType?: string;
  location?: string;
  component?: string;
  description?: string;
  dueDate?: string;
};

export function TicketForm() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState<TicketFormTypes>({});

  const handleChange = useCallback((key: keyof TicketFormTypes, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const staffMembers: StaffMember[] = useMemo(
    () => [
      { role: "Development", name: "Roman" },
      { role: "Administrative", name: "Ayelin" },
      { role: "Administrative", name: "Ashley" },
    ],
    [],
  );

  const groupedOptions = useMemo(
    () =>
      staffMembers.reduce(
        (acc, staff) => {
          acc[staff.role] = acc[staff.role] || [];
          acc[staff.role].push({
            label: <span>{staff.name}</span>,
            value: staff.name,
          });
          return acc;
        },
        {} as Record<string, { label: JSX.Element; value: string }[]>,
      ),
    [staffMembers],
  );

  return (
    <>
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
        <form className="space-y-4 p-2">
          <Input
            placeholder="Ticket title"
            size="large"
            onChange={(e) => handleChange("title", e.target.value)}
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
            minDate={dayjs()}
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
                  placeholder="Location"
                  size="large"
                  onChange={(e) => handleChange("location", e.target.value)}
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
                  onChange={(e) =>
                    handleChange("developmentType", e.target.value)
                  }
                  options={[
                    { label: "New Implementation", value: "new" },
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
        </form>
      </Modal>
    </>
  );
}
