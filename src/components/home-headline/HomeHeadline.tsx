export const HomeHeadline = () => {
  const highlightSpanClassName = "text-blue-france";

  return (
    <p className="w-full max-w-[420px] text-4xl font-extrabold text-neutral-800">
      Consulter les données des{" "}
      <span className={highlightSpanClassName}>élections</span> en France, de
      manière <span className={highlightSpanClassName}>claire</span> et{" "}
      <span className={highlightSpanClassName}>transparente</span>
    </p>
  );
};
