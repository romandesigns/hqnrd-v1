import { updateTicketStatusAction } from "@/utils/actions";
import { format } from "@/utils/formatter/format";
import { Button } from "antd";
import classNames from "classnames";

export function UpdateStatusBtn({
  className,
  ticketStatus,
  ticketId}:{
  className:string,
  ticketStatus:string,
  ticketId:string}) {
  return (
    <form>
    <input type="text" className="!hidden" value={format.convertAllWordsToLowerCase(ticketStatus)} name="ticket_status"/>
    <input type="text" className="!hidden" value={ticketId} name="ticket_id" />
      <Button
        htmlType="submit"
        size="small"
        type="default"
        formAction={updateTicketStatusAction}
        className={`${className}`}
      >
        {ticketStatus}
      </Button>
    </form>
  );
}
