"use client";
import React from "react";
import { Select } from "antd";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n-config";

export const CategoryMenu = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const onChange = (value: string) => {
    if (value === "all-rooms") {
      router.push(`/${lang}/habitaciones`);
      return;
    }
    router.push(`/${lang}/habitaciones/${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      size="large"
      className="max-w-86 w-full"
      defaultValue="Select Category"
      style={{ width: "100%", height: "2.5rem", maxWidth: "25rem" }}
      showSearch
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: "basic",
          label: "Basic Rooms",
        },
        {
          value: "standard",
          label: "Standard Rooms",
        },
        {
          value: "double-rooms",
          label: "Double Rooms",
        },
        {
          value: "double-bed",
          label: "Double Bed",
        },
        {
          value: "family",
          label: "Family Room",
        },
        {
          value: "executive",
          label: "Executive Rooms",
        },
        {
          value: "all-rooms",
          label: "All Rooms",
        },
      ]}
    />
  );
};
