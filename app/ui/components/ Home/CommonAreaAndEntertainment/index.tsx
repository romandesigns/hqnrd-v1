import { Section } from "@/app/ui/layout";
import React from "react";
import { Tabs } from "antd";
import { IoIosImages } from "@/app/ui/icons";
import { HeadingSection } from "@/app/ui/features/SectionHeading";
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
      <div className="relative w-full">
        <HeadingSection
          highlight="Areas comunes y entretenimiento"
          title="Familiarizate con nuestras instalaciones"
          highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
        />
        <Tabs
          defaultActiveKey="1"
          size="middle"
          centered
          tabPosition="bottom"
          className="my-10 w-full [&_.ant-tabs-tab-btn]:flex"
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
