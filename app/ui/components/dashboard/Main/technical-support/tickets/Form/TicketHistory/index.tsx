import { MdOutlineHistory } from "@/app/ui/icons"
import {Button} from "antd";

export const TicketHistory = () => {
  return (
    <div className="pb-2 my-4 flex items-center justify-end">
        <Button type="default" className="flex items-center justify-center gap-1">
            <span><MdOutlineHistory/></span>
            <span>History</span>
        </Button>
    </div>
  )
}
