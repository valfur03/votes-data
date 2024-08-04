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

const ElectionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "min-h-64 max-w-xl bg-contain bg-right-top bg-no-repeat",
      className,
    )}
    {...props}
  />
));
ElectionCard.displayName = "ElectionCard";

const ElectionCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader ref={ref} className={cn("max-w-[75%]", className)} {...props} />
));
ElectionCardHeader.displayName = "ElectionCardHeader";

const ElectionCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn(className)} {...props} />
));
ElectionCardTitle.displayName = "ElectionCardTitle";

const ElectionCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <CardDescription ref={ref} className={cn(className)} {...props} />
));
ElectionCardDescription.displayName = "ElectionCardDescription";

const ElectionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent
    ref={ref}
    className={cn("p-6 pt-0 max-w-[75%]", className)}
    {...props}
  />
));
ElectionCardContent.displayName = "ElectionCardContent";

const ElectionCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn("justify-end justify-self-end", className)}
    {...props}
  />
));
ElectionCardFooter.displayName = "ElectionCardFooter";

export {
  ElectionCard,
  ElectionCardHeader,
  ElectionCardFooter,
  ElectionCardTitle,
  ElectionCardDescription,
  ElectionCardContent,
};
