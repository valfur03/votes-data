import { DistrctsListSectionCard } from "@/components/districts-grid/shared/components/DistrctsListSectionCard";
import { getDepartmentCode } from "@/lib/utils/legislatives/department/get-department-code";
import { getDepartmentName } from "@/lib/utils/legislatives/department/get-department-name";
import { VotesGroupedByDepartments } from "@/types/vote";

export type DistrictsListSectionProps = {
  department: VotesGroupedByDepartments;
};

export const DistrictsListSection = ({
  department,
}: DistrictsListSectionProps) => {
  return (
    <article className="lg:p-3.5">
      <header className="mb-4">
        <h3 className="text-xl text-neutral-700">
          {getDepartmentName(department.info)} (
          {getDepartmentCode(department.info)})
        </h3>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {department.votesByDistricts.map((district) => (
          <DistrctsListSectionCard
            district={district.info}
            key={district.info.id}
          />
        ))}
      </div>
    </article>
  );
};
