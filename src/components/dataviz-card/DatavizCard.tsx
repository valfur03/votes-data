import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";
import { cn } from "@/lib/utils/cn";
import * as React from "react";

const DatavizCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(className)} {...props} />
));
DatavizCard.displayName = "DatavizCard";

export const DatavizCardBanner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
DatavizCardBanner.displayName = "DatavizCardBanner";

const DatavizCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader ref={ref} className={cn("", className)} {...props} />
));
DatavizCardHeader.displayName = "DatavizCardHeader";

const DatavizCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn(className)} {...props} />
));
DatavizCardTitle.displayName = "DatavizCardTitle";

const DatavizCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <CardDescription ref={ref} className={cn(className)} {...props} />
));
DatavizCardDescription.displayName = "DatavizCardDescription";

const DatavizCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
DatavizCardContent.displayName = "DatavizCardContent";

const DatavizCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn("justify-end justify-self-end", className)}
    {...props}
  />
));
DatavizCardFooter.displayName = "DatavizCardFooter";

export {
  DatavizCard,
  DatavizCardHeader,
  DatavizCardFooter,
  DatavizCardTitle,
  DatavizCardDescription,
  DatavizCardContent,
};
