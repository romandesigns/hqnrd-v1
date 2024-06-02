import { updateTicketStatusAction } from "@/utils/actions";
import { Button } from "antd";
import { format } from "@/utils/formatter/format";

export function UpdateStatusBtn({ticketStatus,ticketId}:{ticketStatus:string, ticketId:string}) {
  return (
    <form>
    <input type="text" className="!hidden" value={format.convertAllWordsToLowerCase(ticketStatus)} name="ticket_status"/>
    <input type="text" className="!hidden" value={ticketId} name="ticket_id" />
      <Button
        htmlType="submit"
        size="small"
        type="default"
        formAction={updateTicketStatusAction}
      >
        {ticketStatus}
      </Button>
    </form>
  );
}
