import { signOutAction } from "@/utils/actions/signOut";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Locale } from "@/i18n-config";
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
    <section className="p-4">
      <div>
        <h1>Reservaciones Page</h1>
      </div>
    </section>
  );
}
