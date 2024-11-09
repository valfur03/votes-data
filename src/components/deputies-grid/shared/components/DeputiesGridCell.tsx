import { getPoliticianImagePath } from "@/lib/utils/get-politician-image-path";
import { getDepartmentNameFromDistrict } from "@/lib/utils/legislatives/district/get-department-name-from-district";
import { Mandate } from "@/types/mandate";
import Image from "next/image";
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
      <div className="relative shrink-0">
        <div className="absolute size-10 rounded-full bg-gradient-to-tl from-[--party-color] to-transparent to-40% opacity-0 transition-all group-hover:opacity-100 md:group-even:bg-gradient-to-tr" />
        <Image
          src={`/${getPoliticianImagePath(mandate.politician)}`}
          alt={`Photo du/de la député·e ${mandate.politician.firstName} ${mandate.politician.lastName}`}
          width={40}
          height={40}
          quality={100}
          className="size-10 rounded-full"
        />
      </div>
      <div className="md:group-odd:text-left md:group-even:text-right">
        <p className="text-base leading-5">
          {mandate.politician.firstName} {mandate.politician.lastName}
          <span className="text-gray-700 transition-colors group-hover:text-[--party-color]">
            {" "}
            – {mandate.group.shortName}
          </span>
        </p>
        <p className="text-sm leading-4 text-gray-700">
          {getDepartmentNameFromDistrict(mandate.district)} (circonscription n°
          {mandate.district.number})
        </p>
      </div>
    </Link>
  );
};
