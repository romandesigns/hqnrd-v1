import { IoLogOut } from "@/app/ui/icons";
import { signOutAction } from "@/utils/actions/signOut";
import { Button } from "antd";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import cn from "classnames";

export function SignOutBtn({
  size = "middle",
  formClassName,
}: {
  size?: SizeType;
  formClassName?: string;
}) {
  return (
    <form className={cn(`flex ${formClassName ? formClassName : ""}`)}>
      <Button
        htmlType="submit"
        size={size}
        type="default"
        className="flex-end flex !w-full !bg-neutral-800 text-xs !text-white"
        formAction={signOutAction}
        icon={<IoLogOut className="!flex items-center justify-center" />}
      >
        Sign Out
      </Button>
    </form>
  );
}
