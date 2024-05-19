import { IoLogOut } from "@/app/ui/icons";
import { signOutAction } from "@/utils/actions/signOut";
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
        icon={<IoLogOut className="!flex items-center justify-center" />}
      >
        Sign Out
      </Button>
    </form>
  );
}
