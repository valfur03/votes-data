import { DeputiesGridCell } from "@/components/deputies-grid/shared/components/DeputiesGridCell";
import { Term } from "@/types/term";
import React from "react";

export type DeputiesGridProps = {
  term: Term;
};

export const DeputiesGrid = ({ term }: DeputiesGridProps) => {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-12 lg:px-24">
      {term.mandates.map((mandate) => {
        if (mandate !== null) {
          return <DeputiesGridCell mandate={mandate} key={mandate.id} />;
        }
      })}
    </div>
  );
};
