import { SourceIndex } from "../classes/source-index";

export const generateUniqueId = (sourceIndex?: SourceIndex, index?: string) => {
  const uid = crypto.randomUUID().replace(/-/g, "");

  if (sourceIndex !== undefined && index !== undefined) {
    const ref = sourceIndex.get(index);
    if (ref !== undefined) {
      return ref;
    }

    sourceIndex.create(index, uid);
  }

  return uid;
};
