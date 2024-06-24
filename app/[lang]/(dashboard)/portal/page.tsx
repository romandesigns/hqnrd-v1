import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="h-full w-full rounded-md bg-white">
          Portal Page
        </article>
      </section>
    </>
  );
}
