import { VotesGroupedByDistrict } from "@/types/vote";

export type Election = {
  firstRoundDate: Date;
  secondRoundDate: Date;
  votesByDistrict: Array<VotesGroupedByDistrict> | null;
};

export type ElectionsHistory = [Election, Election, ...Election[]];
