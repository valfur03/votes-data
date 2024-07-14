import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) =>
  classes.some((className) => !!className)
    ? twMerge(clsx(...classes))
    : undefined;
