import data from "@/public/assets/data/fqa.json";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { HeadingSection } from "../../../features/SectionHeading";
import { Section } from "../../../layout";

export const FrequentlyAskedQuestions = () => {
  return (
    <Section className="relative w-full max-w-[90rem] pb-32">
      <HeadingSection
        className="z-[2]"
        highlight="Your comfort is our priority"
        title="Frequently Asked Questions"
        highlightClassName="border bg-primary-500/20 border-primary-500 text-primary-800"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <Collapse
        accordion
        size="middle"
        items={data as CollapseProps["items"]}
        bordered={false}
        defaultActiveKey={["1"]}
        className="z-[2] w-full !bg-white"
      />
    </Section>
  );
};
