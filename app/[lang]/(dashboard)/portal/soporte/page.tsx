import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { supportNavContent } from "./navbarContent";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <Navigation lang={lang} className="flex justify-between px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_auto_1fr] rounded-md bg-white">
          <div className="flex justify-start border-b p-4">
            <TopMenuContent lang={lang} menuLinks={supportNavContent} />
          </div>
          <div className="p-2 md:p-4">Support Page!</div>
        </article>
      </section>
    </>
  );
}
