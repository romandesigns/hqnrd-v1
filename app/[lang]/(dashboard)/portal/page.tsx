import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  if (!user) return redirect(`/${lang}/auth/iniciar-session`);
  return <div>Dasboard Page</div>;
}
