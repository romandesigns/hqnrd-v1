import { FaCheck, FaPlay, FaTimes } from "@/app/ui/icons";
import { Button } from "antd";

export function StatusActionBtns({
  handleUpdateIsTicketAssigned,
  ticketStatus,
}: {
  handleUpdateIsTicketAssigned: (status: string) => void;
  ticketStatus: string;
}) {
  return (
    <>
      <Button
        title="Start"
        className="!flex items-center justify-center rounded-md !border-green-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("started")}
      >
        <span className="text-green-400">
          <FaPlay />
        </span>
      </Button>
      <Button
        title="Start"
        className="!flex items-center justify-center rounded-md !border-blue-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("completed")}
      >
        <span className="text-blue-400">
          <FaCheck />
        </span>
      </Button>
      <Button
        title="Start"
        className="!flex items-center justify-center rounded-md !border-purple-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("backlog")}
      >
        <span className="text-purple-400">
          <FaTimes />
        </span>
      </Button>
    </>
  );
}
