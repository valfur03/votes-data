import { cn } from "@/lib/utils/cn";

export type HomeFrenchGraphProps = {
  className?: string;
};

export const HomeFrenchGraph = ({ className }: HomeFrenchGraphProps) => {
  return (
    <div
      className={cn(
        "flex h-48 items-end gap-x-2.5 [&>div]:box-border [&>div]:w-12 [&>div]:rounded [&>div]:border-2",
        className,
      )}
    >
      <div className="h-full border-indigo-200 bg-indigo-100" />
      <div className="h-16 border-neutral-200 bg-neutral-100" />
      <div className="h-40 border-red-200 bg-red-100" />
    </div>
  );
};
