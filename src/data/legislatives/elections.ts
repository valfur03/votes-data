import { Election } from "@/types/election";

export const LEGISLATIVES_ELECTIONS: [Election, Election, ...Election[]] = [
  {
    firstRoundDate: new Date("2029-07-01"),
    secondRoundDate: new Date("2029-07-08"),
  },
  {
    firstRoundDate: new Date("2024-06-30"),
    secondRoundDate: new Date("2024-07-07"),
  },
  {
    firstRoundDate: new Date("2022-06-12"),
    secondRoundDate: new Date("2022-06-19"),
  },
];
