import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { UsersTable } from "./UsersTable";
import guests from "@/public/assets/data/guests.json";

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

  return <UsersTable dataSource={guests} lang={lang} />;
}
