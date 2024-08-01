export const ElectionTimeline = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 flex items-end justify-between px-12">
        <div className="flex w-full max-w-14 flex-col items-center gap-1 text-center">
          <div className="w-full">
            <p className="text-xs text-neutral-700">12 & 19 juin 2022</p>
          </div>
          <div className="size-6 rounded-full bg-indigo-100"></div>
        </div>
        <div className="flex w-full max-w-48 flex-col items-center justify-between gap-2 text-center">
          <div className="flex h-32 w-full flex-col justify-center gap-2 rounded border border-neutral-300 [&_p]:mb-0">
            <p className="mb-1 whitespace-pre-line text-base font-semibold text-neutral-800">
              30 juin & {"\n"}
              07 juillet 2024
            </p>
            <p>... dans 678 jours</p>
          </div>
          <div className="size-6 rounded-full bg-blue-france"></div>
        </div>
      </div>
      <div className="absolute bottom-[8px] h-2 w-full rounded-full bg-gradient-to-r from-transparent via-indigo-100 via-[72px] to-blue-france to-[calc(100%-72px)]"></div>
    </div>
  );
};
