import moment from "moment";

export const validateAdult = (date: string) => {
  const eighteenYearsAgo = moment().subtract(18, "years");
  return moment(date).isBefore(eighteenYearsAgo);
};
