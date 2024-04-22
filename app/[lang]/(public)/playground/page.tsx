import { createClient } from "@/utils/supabase/server";
import { Button, Input, Alert } from "antd";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log(data, error);

  return <p>Hello world</p>;
}
