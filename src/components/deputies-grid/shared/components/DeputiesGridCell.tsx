import { Mandate } from "@/types/mandate";
import Link from "next/link";
import React from "react";

export type DeputiesGridCellProps = {
  mandate: Mandate;
};

export const DeputiesGridCell = ({ mandate }: DeputiesGridCellProps) => {
  return (
    // TODO link href
    <Link
      href="#"
      className="group flex items-center gap-4 p-2 md:odd:flex-row md:even:flex-row-reverse"
      style={{ "--party-color": mandate.group.color } as React.CSSProperties}
    >
      <div className="size-10 shrink-0 rounded-full bg-gray-300" />
      <div className="md:group-odd:text-left md:group-even:text-right">
        <p className="text-base leading-5">
          {mandate.politician.firstName} {mandate.politician.lastName}
          <span className="text-gray-700 transition-colors group-hover:text-[--party-color]">
            {" "}
            – {mandate.group.shortName}
          </span>
        </p>
        <p className="text-sm leading-4 text-gray-700">
          {mandate.district.departmentName} (circonscription n°
          {mandate.district.number})
        </p>
      </div>
    </Link>
  );
};
