import { Locale } from "@/i18n-config";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">DASHBOARD</div>
      </Navigation>
      <section className="p-2 overflow-hidden">
        <article className="w-full h-full bg-white rounded-md">Soporte Page</article>
      </section>
    </>
  );
}
