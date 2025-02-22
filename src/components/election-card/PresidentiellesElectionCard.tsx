import {
  ElectionCard,
  ElectionCardContent,
  ElectionCardFooter,
  ElectionCardHeader,
  ElectionCardTitle,
} from "@/components/election-card/ElectionCard";
import { PRESIDENTIELLES_PAGE_TITLE } from "@/constant/pages-title";
import { PRESIDENTIELLES_PATH } from "@/constant/url-paths";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const PresidentiellesElectionCard = () => {
  return (
    <Link href={PRESIDENTIELLES_PATH}>
      <ElectionCard className="bg-election-card-presidentielles bg-right-bottom">
        <ElectionCardHeader>
          <ElectionCardTitle>{PRESIDENTIELLES_PAGE_TITLE}</ElectionCardTitle>
        </ElectionCardHeader>
        <ElectionCardContent>
          <p>
            Consultez l&apos;historique des présidents élus, ainsi que des
            détails sur ces élections.
          </p>
        </ElectionCardContent>
        <ElectionCardFooter>
          <ArrowRightIcon className="size-6" />
        </ElectionCardFooter>
      </ElectionCard>
    </Link>
  );
};
