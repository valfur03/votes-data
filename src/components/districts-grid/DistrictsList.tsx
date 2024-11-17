import { DistrictsListSection } from "@/components/districts-grid/shared/components/DistrictsListSection";
import { ELECTION_ID } from "@/data/legislatives/election/id";
import { getDepartmentCodeFromDistrict } from "@/lib/utils/legislatives/district/get-department-code-from-district";
import { Department } from "@/types/department";
import {
  VotesGroupedByDistrict,
} from "@/types/vote";
import React from "react";

export type DistrictsListProps = {};

export const DistrictsList = ({}: DistrictsListProps) => {
  // TODO refactor this
  const votesGroupedByDepartments = Object.values(
    ELECTION_ID.votesByDistrict!.reduce<
      Record<
        string,
        {
          info: Array<Department>;
          votesByDistricts: Record<string, VotesGroupedByDistrict>;
        }
      >
    >((acc, district) => {
      const departmentCode = getDepartmentCodeFromDistrict(district.info);
      const districtCode = district.info.number;

      return {
        ...acc,
        [departmentCode]: {
          info: district.info.departments,
          votesByDistricts: {
            ...acc[departmentCode]?.votesByDistricts,
            [districtCode]: {
              ...district,
            },
          },
        },
      };
    }, {}),
  ).map((d) => ({
    ...d,
    votesByDistricts: Object.values(d.votesByDistricts),
  }));

  return (
    <div className="flex flex-col gap-8">
      {votesGroupedByDepartments.map((department) => (
        <DistrictsListSection
          department={department}
          key={crypto.randomUUID()}
        />
      ))}
      {/*{ELECTION_ID.votesByDistrict.map(*/}
      {/*  ({ district, blankVotesTotal, nullVotesTotal, candidates }) => (*/}
      {/*    // TODO bad key*/}
      {/*    <DistrictsListSection department={department} key={randomUUID()} />*/}
      {/*  ),*/}
      {/*)}*/}
    </div>
  );
};
