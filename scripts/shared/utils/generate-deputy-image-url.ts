import { POLITICIANS_IMAGES_EXTENSION } from "@/constant/images";

export const generateDeputyImageUrl = (
  term_number: string,
  politician_source_id: string,
) => {
  return `https://www.assemblee-nationale.fr/dyn/static/tribun/${term_number}/photos/carre/${politician_source_id.replace(/^PA/, "")}.${POLITICIANS_IMAGES_EXTENSION}`;
};
