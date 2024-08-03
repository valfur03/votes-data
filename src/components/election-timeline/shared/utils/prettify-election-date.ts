import { Election } from "@/types/election";
import dayjs, { Dayjs } from "dayjs";

export type DatesAndDeduplicatedFormats = {
  date1: Dayjs;
  date2: Dayjs;
  datesFormat: [string, string, string];
};

export const periodsFormat = {
  year: "YYYY",
  month: "MMMM",
  date: "DD",
};

export type PeriodFormatKey = keyof typeof periodsFormat;

export const prefixStringDateWithFormat = (format: string, suffix: string) => {
  return `${format} ${suffix}`.trimEnd();
};

export const prefixDateFormatWithoutDuplicates = (
  periodFormatKey: PeriodFormatKey,
  datesFormat: DatesAndDeduplicatedFormats,
): DatesAndDeduplicatedFormats => {
  const format = periodsFormat[periodFormatKey];
  const {
    date1,
    date2,
    datesFormat: [dateFormat1, dateFormat2, dateFormatSuffix],
  } = datesFormat;

  if (
    date1[periodFormatKey]() === date2[periodFormatKey]() &&
    dateFormat1.length === 0 &&
    dateFormat2.length === 0
  ) {
    return {
      date1,
      date2,
      datesFormat: [
        dateFormat1,
        dateFormat2,
        prefixStringDateWithFormat(format, dateFormatSuffix),
      ],
    };
  } else {
    return {
      date1,
      date2,
      datesFormat: [
        prefixStringDateWithFormat(format, dateFormat1),
        prefixStringDateWithFormat(format, dateFormat2),
        dateFormatSuffix,
      ],
    };
  }
};

export const joinDatesAndFormat = (
  datesFormat: DatesAndDeduplicatedFormats,
) => {
  const {
    date1,
    date2,
    datesFormat: [dateFormat1, dateFormat2, dateFormatSuffix],
  } = datesFormat;

  return `${date1.format(dateFormat1)} & ${date2.format(dateFormat2)} ${date1.format(dateFormatSuffix)}`.trimEnd();
};

export const prettifyElectionDate = (election: Election) => {
  const firstRoundDate = dayjs(election.firstRoundDate);
  const secondRoundDate = dayjs(election.secondRoundDate);

  return joinDatesAndFormat(
    prefixDateFormatWithoutDuplicates(
      "date",
      prefixDateFormatWithoutDuplicates(
        "month",
        prefixDateFormatWithoutDuplicates("year", {
          date1: firstRoundDate,
          date2: secondRoundDate,
          datesFormat: ["", "", ""],
        }),
      ),
    ),
  );
};
