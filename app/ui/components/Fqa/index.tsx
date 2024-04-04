import data from "@/public/assets/data/fqa.json";
import { Section } from "../../layout";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

export const FrequentlyAskedQuestions = () => {
  return (
    <Section className="w-full max-w-[90rem]">
      <h2 className="text-2xl my-8">Frequently Asked Questions</h2>
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
