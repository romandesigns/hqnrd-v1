import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <div>You are not logged in</div>;

  return (
    <>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
}
