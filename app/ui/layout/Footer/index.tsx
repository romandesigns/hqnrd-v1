import { shareData } from "@/public/assets/data";
import { Section } from "../../layout";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";
import { Brand } from "../../features";

export function Footer() {
  return (
    <footer className="bg-primary-500 py-10 px-2">
      <Section className="px-4 py-2 flex justify-between items-center bg-white/10 rounded-md pb-4 w-full max-w-[90rem] mx-auto">
        <div className="flex items-center justify-start w-full py-5 relative">
          <Brand className="!text-white" headingLevel="h2" />
        </div>
        <div className="grid grid-cols-1 grid-rows-[1fr,auto] w-full md:grid-cols-2 md:grid-rows-1 md:gap-8">
          <Contact data={shareData} />
          <SocialMedia />
        </div>
      </Section>
    </footer>
  );
}
