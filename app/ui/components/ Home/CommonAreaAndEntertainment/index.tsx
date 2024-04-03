import { Section } from "@/app/ui/layout";
import React from "react";
import { Tabs } from "antd";
import { IoIosImages } from "@/app/ui/icons";
import { HeadingSection } from "@/app/ui/common/SectionHeading";
import { CommonAreas } from "./CommonAreas";
import { RoofTop } from "./RoofTop";

export function CommonAreaAndEntertainment() {
  const tabItems = [
    {
      key: "1",
      label: "Common Areas",
      children: <CommonAreas />,
      icon: <IoIosImages size={20} />,
    },
    {
      key: "2",
      label: "Roof Top",
      children: <RoofTop />,
      icon: <IoIosImages size={20} />,
    },
  ];
  return (
    <Section>
      <div className="w-full sm:border sm:rounded-md sm:p-20 sm:py-10 sm:max-w-[p0rem]">
        <HeadingSection
          highlight="Areas comunes y entretenimiento"
          title="Familiarizate con nuestras instalaciones"
          accent="neutral"
        />
        <Tabs
          defaultActiveKey="1"
          size="middle"
          centered
          tabPosition="bottom"
          className="w-full [&_.ant-tabs-tab-btn]:flex my-10"
          style={{ color: "red" }}
          color="!text-red-500"
          items={tabItems.map((i) => {
            return {
              key: i.key,
              label: i.label,
              children: i.children,
              icon: i.icon,
            };
          })}
        />
      </div>
    </Section>
  );
}
