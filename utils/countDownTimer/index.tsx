import { Locale } from "@/i18n-config";
import classNames from "classnames";
import moment from "moment";
import { useEffect, useState } from "react";
import { handleTicketCompletionAction } from "../actions/supportTicketActions";

const CountdownTimer = ({
  targetDate,
  ticketStatus,
  ticketId,
  lang,
  ticketDuration,
}: {
  targetDate: string;
  ticketStatus: string;
  ticketId: string;
  lang: Locale;
  ticketDuration: string;
}) => {
  const [remainingTime, setRemainingTime] = useState("");
  const [isCounting, setIsCounting] = useState(false);

  const handleUpdateIsTicketAssigned = async (
    duration: string,
    lang: Locale,
  ) => {
    const formData = new FormData();
    formData.append("ticketId", String(ticketId));
    formData.append("completionDuration", duration);
    formData.append("lang", lang);
    await handleTicketCompletionAction(formData);
  };

  useEffect(() => {
    const updateCountdown = () => {
      if (!targetDate) return;
      const target = moment(targetDate);
      const now = moment();
      let difference = moment.duration(target.diff(now));
      const isNegative = difference.asMilliseconds() <= 0;

      if (isNegative) {
        difference = moment.duration(now.diff(target));
      }

      let timeString = isNegative
        ? `-${difference.humanize()}`
        : `${difference.humanize()}`;

      if (timeString.toLowerCase() === "a few seconds") {
        timeString = `Expired`;
      }
      setRemainingTime(timeString);
    };

    if (ticketStatus === "started") {
      setIsCounting(true);
    } else if (ticketStatus === "completed") {
      setIsCounting(false);
      if (remainingTime && !ticketDuration) {
        handleUpdateIsTicketAssigned(remainingTime, lang);
      }
    }

    if (isCounting) {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [targetDate, ticketStatus, isCounting, remainingTime, lang, ticketId]);

  const isExpired = Number(remainingTime.split(" ")[0]) < 0 ? true : false;

  return ticketDuration ? (
    ticketDuration
  ) : (
    <div
      className={classNames("text-orange-500", { "text-red-500": isExpired })}
    >
      {remainingTime}
    </div>
  );
};

export default CountdownTimer;
