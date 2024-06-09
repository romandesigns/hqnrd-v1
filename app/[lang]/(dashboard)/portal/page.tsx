import { signOutAction } from "@/utils/actions/signOut";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Locale } from "@/i18n-config";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(`/${lang}/auth/iniciar-session`);
  }

  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">DASHBOARD</div>
      </Navigation>
      <section className="p-4">
        <article>Hello</article>
      </section>
    </>
  );
}
