import { shareData } from "@/public/assets/data";
import { Brand } from "../../features";
import { Section } from "../../layout";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";

export function Footer() {
  return (
    <footer className="bg-primary-500 px-2 py-10">
      <Section className="max-width mx-auto flex w-full items-center justify-between rounded-md bg-white/10 px-4 py-2 pb-4">
        <div className="relative flex w-full items-center justify-start py-5">
          <Brand className="!text-white" headingLevel="h2" />
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[1fr,auto] md:grid-cols-2 md:grid-rows-1 md:gap-8">
          <Contact data={shareData} />
          <SocialMedia />
        </div>
      </Section>
    </footer>
  );
}
