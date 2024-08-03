import { Election } from "@/types/election";
import dayjs, { Dayjs } from "dayjs";

export enum ETimeUnit {
  YEAR = "year",
  MONTH = "month",
  DAY = "day",
}

export type DatesPrettyDiff = {
  number: number;
  unitStr: string;
  unit: ETimeUnit;
};

export const getPrettyNumberOfTimeUnitUntilDate = (
  now: Dayjs,
  date: Dayjs,
): DatesPrettyDiff => {
  const diffUntilDateInUnit = (unit: ETimeUnit) => {
    return date.diff(now, unit);
  };

  const numberOfTimeUnitReducingSteps: Array<{
    check: ((o: Pick<DatesPrettyDiff, "number" | "unit">) => boolean) | null;
    unit: ETimeUnit;
    generateUnitStr: (diff: number) => string;
  }> = [
    {
      check: null,
      unit: ETimeUnit.DAY,
      generateUnitStr: (diff) => `jour${diff > 1 ? "s" : ""}`,
    },

    {
      check: ({ number, unit }) => unit === ETimeUnit.DAY && number > 150,
      unit: ETimeUnit.MONTH,
      generateUnitStr: () => `mois`,
    },

    {
      check: ({ number, unit }) => unit === ETimeUnit.MONTH && number > 13,
      unit: ETimeUnit.YEAR,
      generateUnitStr: (diff) => `an${diff > 1 ? "s" : ""}`,
    },
  ];

  return numberOfTimeUnitReducingSteps.reduce<DatesPrettyDiff>(
    (acc, { check, unit, generateUnitStr }): DatesPrettyDiff => {
      if (check === null || check(acc)) {
        const diff = diffUntilDateInUnit(unit);
        return {
          number: diff,
          unitStr: generateUnitStr(diff),
          unit,
        };
      }
      return acc;
    },
    {
      number: 0,
      unitStr: "",
      unit: ETimeUnit.DAY,
    },
  );
};

export const getPrettyNumberOfTimeUnitUntilFirstRound = (
  election: Election,
  dateNow: Date = new Date(),
) => {
  const now = dayjs(dateNow);
  const firstRoundDate = dayjs(election.firstRoundDate);

  const diffUntilFirstRound = getPrettyNumberOfTimeUnitUntilDate(
    now,
    firstRoundDate,
  );

  return `${diffUntilFirstRound.number} ${diffUntilFirstRound.unitStr}`;
};
