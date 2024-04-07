import data from "@/public/assets/data/fqa.json";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { HeadingSection } from "../../../features/SectionHeading";
import { Section } from "../../../layout";

export const FrequentlyAskedQuestions = () => {
  return (
    <Section className="w-full max-w-[90rem]">
      <HeadingSection
        highlight="Your comfort is our priority"
        title="Frequently Asked Questions"
        accent="neutral"
      />
      <Collapse
        accordion
        size="middle"
        items={data as CollapseProps["items"]}
        bordered={false}
        defaultActiveKey={["1"]}
        className="w-full"
      />
    </Section>
  );
};
