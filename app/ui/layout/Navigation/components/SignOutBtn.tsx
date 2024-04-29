import { signOutAction } from "@/utils/actions/signOut";
import React from "react";

export function SignOutBtn() {
  return <button formAction={signOutAction}>Sign Out</button>;
}
