import {
  ElectionCard,
  ElectionCardContent,
  ElectionCardFooter,
  ElectionCardHeader,
  ElectionCardTitle,
} from "@/components/election-card/ElectionCard";
import { MUNICIPALES_PAGE_TITLE } from "@/constant/pages-title";
import { MUNICIPALES_PATH } from "@/constant/url-paths";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const MunicipalesElectionCard = () => {
  return (
    <Link href={MUNICIPALES_PATH}>
      <ElectionCard className="bg-election-card-municipales">
        <ElectionCardHeader>
          <ElectionCardTitle>{MUNICIPALES_PAGE_TITLE}</ElectionCardTitle>
        </ElectionCardHeader>
        <ElectionCardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fringilla sapien quis erat feugiat, id aliquet augue iaculis.
          </p>
        </ElectionCardContent>
        <ElectionCardFooter>
          <ArrowRightIcon className="size-6" />
        </ElectionCardFooter>
      </ElectionCard>
    </Link>
  );
};
