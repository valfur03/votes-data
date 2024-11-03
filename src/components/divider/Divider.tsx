import clsx from "clsx";
import React from "react";

export type DividerProps = React.HTMLAttributes<HTMLHRElement>;

export const Divider = ({ className, ...props }: DividerProps) => {
  return <hr className={clsx("grow border-gray-400", className)} {...props} />;
};
