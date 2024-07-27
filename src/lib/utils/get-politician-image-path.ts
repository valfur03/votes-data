import {
  POLITICIANS_IMAGES_EXTENSION,
  POLITICIANS_IMAGES_PATH,
} from "@/constant/images";
import { Politician } from "@/types/politician";

export const getPoliticianImagePath = ({ id }: Pick<Politician, "id">) => {
  return `${POLITICIANS_IMAGES_PATH}/${id}.${POLITICIANS_IMAGES_EXTENSION}`;
};
