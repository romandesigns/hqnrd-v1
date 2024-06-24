import moment from "moment";

export const calculateRemainingTime = (
  targetDate: string | undefined,
): string => {
  // Parse the target date using Moment.js
  const target = moment(targetDate);

  // Get the current time using Moment.js
  const now = moment();

  // Calculate the difference in time
  let difference = moment.duration(target.diff(now));

  // Determine if the countdown is negative
  const isNegative = difference.asMilliseconds() <= 0;

  // Adjust difference for negative countdowns
  if (isNegative) {
    difference = moment.duration(now.diff(target));
  }

  // Format the remaining time based on positivity/negativity
  const timeString = isNegative
    ? `-${difference.humanize()}`
    : `${difference.humanize()}`;

  return isNegative ? `${-timeString}` : timeString;
};
