import { shareData } from "@/public/assets/data";
import { Brand } from "../../features";
import { Section } from "../../layout";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";
import { Locale } from "@/i18n-config";

export function Footer({ lang }: Readonly<{ lang: Locale }>) {
  return (
    <footer className="bg-primary-500 px-2 py-10">
      <Section className="max-width mx-auto flex items-center justify-between rounded-md bg-white/10 px-4 !pt-4">
        <div className="relative flex w-full items-center justify-start py-10">
          <Brand className="!text-white" headingLevel="h2" lang={lang} />
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[1fr,auto] md:grid-cols-2 md:grid-rows-1 md:gap-8">
          <Contact data={shareData} />
          <SocialMedia />
        </div>
      </Section>
    </footer>
  );
}
