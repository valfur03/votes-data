import { LEGISLATIVES_HEMICYCLE_PAGE_TITLE } from "@/constant/pages-title";
import { LEGISLATIVES_HEMICYCLE_PATH } from "@/constant/url-paths";
import { DatavizCardLink } from "@/types/dataviz-card-link";

export const DATAVIZ_PAGES: Array<DatavizCardLink> = [
  {
    title: LEGISLATIVES_HEMICYCLE_PAGE_TITLE,
    description:
      "Repérez le siège de vos députés et visualisez la composition de l'assemblée par groupe.",
    href: LEGISLATIVES_HEMICYCLE_PATH,
  },
];
