import { IconProps } from "@/components/icon/shared/types/icon-props";
import React from "react";

export const HemicyclePieIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, color = "currentColor" }, ref) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
    >
      <g fill={color}>
        <path d="M11.3708 4.74483C10.0831 4.14654 8.65934 3.90177 7.24575 4.03564C5.83215 4.16951 4.47965 4.67721 3.32714 5.5066C2.17462 6.33598 1.26362 7.45717 0.687669 8.75504C0.111721 10.0529 -0.108417 11.4807 0.0498599 12.8918L5.61496 12.2675C5.56748 11.8442 5.63352 11.4159 5.8063 11.0265C5.97909 10.6372 6.25239 10.3008 6.59814 10.052C6.9439 9.80316 7.34965 9.65086 7.77373 9.61069C8.19781 9.57053 8.62493 9.64396 9.01125 9.82345L11.3708 4.74483Z" />
        <path d="M15.9532 12.864C16.1153 11.3718 15.8543 9.86405 15.2001 8.51313C14.5459 7.1622 13.5248 6.02259 12.2536 5.22451L9.27607 9.96736C9.65744 10.2068 9.96377 10.5487 10.16 10.9539C10.3563 11.3592 10.4346 11.8115 10.386 12.2592L15.9532 12.864Z" />
      </g>
    </svg>
  ),
);
HemicyclePieIcon.displayName = "HemicyclePieIcon";
