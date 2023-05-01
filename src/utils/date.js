const dayjs = require("dayjs");

const validateDate = (date, format) =>
  dayjs(date, format).format(format) === date;

const isUnderTenYearOld = (birthdate) => {
  const tenYearsAgo = dayjs().subtract(10, "year");
  return tenYearsAgo < dayjs(birthdate);
};

module.exports = {
  validateDate,
  isUnderTenYearOld,
};
