import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOutBtn } from "./SignOutBtn";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
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
