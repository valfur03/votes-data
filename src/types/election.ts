export type Election = {
  firstRoundDate: Date;
  secondRoundDate: Date;
};

export type ElectionsHistory = [Election, Election, ...Election[]];
