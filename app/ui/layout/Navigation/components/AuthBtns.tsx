"use server";
import { MdSpaceDashboard } from "@/app/ui/icons";
import { createClient } from "@/utils/supabase/server";
import { Button } from "antd";
import Link from "next/link";
import { SignOutBtn } from "../../../features";

export async function AuthBtns({ lang }: { lang: string }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      {session ? (
        <>
          <li className="inline-block">
            <Link href={`/${lang}/portal`}>
              <Button
                className="!flex items-center justify-center"
                size="middle"
                icon={<MdSpaceDashboard />}
              >
                Dashboard
              </Button>
            </Link>
          </li>
          <li className="inline-block">
            <SignOutBtn />
          </li>
        </>
      ) : (
        <li className="inline-block">
          <Link href={`/${lang}/auth/iniciar-session`}>
            <Button
              className="!flex items-center justify-center"
              size="middle"
              type="primary"
            >
              Sign In
            </Button>
          </Link>
        </li>
      )}
    </>
  );
}
