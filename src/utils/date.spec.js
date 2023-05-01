/* eslint-disable no-undef */
const { validateDate, isUnderTenYearOld } = require("./date");

describe("validateDate", () => {
  test("valid date", () => {
    const date = "2010/01/01";
    expect(validateDate(date, "YYYY/MM/DD")).toBe(true);
  });

  test("invalid date", () => {
    const date = "2010/23/01";
    expect(validateDate(date, "YYYY/MM/DD")).toBe(false);
  });

  test("invalid date format", () => {
    const date = "2010-01-01";
    expect(validateDate(date, "YYYY/MM/DD")).toBe(false);
  });
});

describe("isUnderTenYearOld", () => {
  test("should be true", () => {
    const birthdate = "2022/01/02";
    expect(isUnderTenYearOld(birthdate)).toBe(true);
  });

  test("should be false", () => {
    const birthdate = "2000/01/02";
    expect(isUnderTenYearOld(birthdate)).toBe(false);
  });
});
