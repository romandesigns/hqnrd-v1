import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOutBtn } from "./SignOutBtn";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(`/${lang}/iniciar-session`);
  }

  return (
    <>
      <form>
        <button formAction={signOutBtn}>Sign out</button>
      </form>
      <div>
        <h1>About Page {data.user.email}</h1>
      </div>
    </>
  );
}
