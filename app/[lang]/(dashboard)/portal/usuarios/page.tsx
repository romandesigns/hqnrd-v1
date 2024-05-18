import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { UsersTable } from "./UsersTable";
import { dataSource, columns } from "./tableData";

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
    <div>
      <UsersTable dataSource={dataSource} columns={columns} lang={lang} />
    </div>
  );
}
