import { FrenchHemicyclePie } from "@/components/french-hemicycle-pie/FrenchHemicyclePie";
import { LEGISLATIVES_HEMICYCLE_PAGE_TITLE } from "@/constant/pages-title";
import { LEGISLATIVES_HEMICYCLE_PATH } from "@/constant/url-paths";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import { DatavizCardLink } from "@/types/dataviz-card-link";

export const DATAVIZ_PAGES: Array<DatavizCardLink> = [
  {
    banner: <FrenchHemicyclePie term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />,
    title: LEGISLATIVES_HEMICYCLE_PAGE_TITLE,
    description:
      "Repérez le siège de vos députés et visualisez la composition de l'assemblée par groupe.",
    href: LEGISLATIVES_HEMICYCLE_PATH,
  },
];
