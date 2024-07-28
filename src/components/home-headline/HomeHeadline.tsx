import { cn } from "@/lib/utils/cn";

export type HomeHeadlineProps = {
  className?: string;
};

export const HomeHeadline = ({ className }: HomeHeadlineProps) => {
  const highlightSpanClassName = "text-blue-france";

  return (
    <p
      className={cn(
        "w-full max-w-[420px] text-4xl font-extrabold text-neutral-800",
        className,
      )}
    >
      Consulter les données des{" "}
      <span className={highlightSpanClassName}>élections</span> en France, de
      manière <span className={highlightSpanClassName}>claire</span> et{" "}
      <span className={highlightSpanClassName}>transparente</span>
    </p>
  );
};
