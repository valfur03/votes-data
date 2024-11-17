import { Candidate } from "@/types/candidate";
import { Department } from "@/types/department";
import { District } from "@/types/district";

export type VotesGroupedByDistrict = {
  info: District;
  totalRegistered: number;
  blankVotesTotal: number;
  nullVotesTotal: number;
  candidates: Array<Candidate>;
};

export type VotesGroupedByDepartments = {
  info: Array<Department>;
  votesByDistricts: Array<VotesGroupedByDistrict>;
};
