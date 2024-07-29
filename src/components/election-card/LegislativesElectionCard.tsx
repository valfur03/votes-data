import {
  ElectionCard,
  ElectionCardContent,
  ElectionCardFooter,
  ElectionCardHeader,
  ElectionCardTitle,
} from "@/components/election-card/ElectionCard";
import { LEGISLATIVES_PATH } from "@/constant/url-paths";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const LegislativesElectionCard = () => {
  return (
    <Link href={LEGISLATIVES_PATH}>
      <ElectionCard className="bg-election-card-legislatives">
        <div className="max-w-[75%]">
          <ElectionCardHeader>
            <ElectionCardTitle>Élections législatives</ElectionCardTitle>
          </ElectionCardHeader>
          <ElectionCardContent>
            <p>
              Consultez la composition de l’Assemblée Nationale, ainsi que les
              statistiques des différents scrutins.
            </p>
          </ElectionCardContent>
        </div>
        <ElectionCardFooter>
          <ArrowRightIcon className="size-6" />
        </ElectionCardFooter>
      </ElectionCard>
    </Link>
  );
};
