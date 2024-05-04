import { signOutAction } from "@/utils/actions/signOut";
import React from "react";
import { Button } from "antd";

export function SignOutBtn() {
  return (
    <form>
      <Button
        htmlType="submit"
        size="middle"
        type="default"
        className="!bg-neutral-800 text-xs !text-white"
        formAction={signOutAction}
      >
        Sign Out
      </Button>
    </form>
  );
}
