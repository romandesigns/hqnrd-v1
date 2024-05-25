import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Menu } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Menu";
import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <h1 className="text-2xl font-bold">Tickets</h1>
      </Navigation>
      <section className="flex h-full w-full items-stretch justify-stretch p-4">
        <article className="h-full w-full bg-white p-4">
          <Menu lang={lang} />
        </article>
      </section>
    </>
  );
}
