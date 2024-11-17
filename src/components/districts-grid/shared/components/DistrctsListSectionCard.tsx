import { District } from "@/types/district";

export type DistrctsListSectionCardProps = {
  district: District;
};

export const DistrctsListSectionCard = ({
  district,
}: DistrctsListSectionCardProps) => {
  return (
    <div className="rounded bg-white p-4">
      <h4>Circonscription n°{district.number}</h4>
      {/*TODO cities*/}
      {/*<p className="text-sm text-neutral-700">*/}
      {/*  Bonneuil-sur-Marne − Créteil-Nord − Saint-Maur-des-Fossés-Centre −*/}
      {/*  Saint-Maur-La Varenne − Champigny-sur-Marne-Ouest*/}
      {/*</p>*/}
      {/*TODO component*/}
      {/*TODO cn("mt-5", ...)*/}
      <div className="mt-5 h-3 w-full rounded-full bg-neutral-100"></div>
    </div>
  );
};
