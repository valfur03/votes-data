import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";

export const ElectionTimeline = () => {
  return (
    <div className="relative w-fit sm:w-[calc(50%+3rem+12rem/2)]">
      <div className="relative z-10 flex flex-col-reverse justify-end gap-y-24 py-4 sm:flex-row sm:items-end sm:justify-between sm:gap-y-0 sm:px-12 sm:py-0">
        <div className="ml-1 flex w-full max-w-24 flex-row-reverse items-center gap-1 text-center sm:mb-1 sm:ml-0 sm:max-w-14 sm:flex-col">
          <div className="w-full">
            <p className="text-xs text-neutral-700">12 & 19 juin 2022</p>
          </div>
          <div className="size-6 shrink-0 rounded-full bg-indigo-100"></div>
        </div>
        <div className="flex w-full flex-row-reverse items-center justify-end gap-2 text-center sm:max-w-48 sm:flex-col">
          <Card className="gap-2">
            <CardHeader className="pb-0">
              <CardTitle className="whitespace-pre-line text-base font-semibold text-neutral-800">
                30 juin & {"\n"}
                07 juillet 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>... dans 678 jours</p>
            </CardContent>
          </Card>
          <div className="box-border flex size-8 shrink-0 items-center justify-center rounded-full border-4 border-blue-france bg-white">
            <div className="size-4 rounded-full bg-blue-france"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[10px] h-[calc(100%-1rem-114px/2)] w-2 rounded-full bg-gradient-to-t from-transparent via-indigo-100 via-[24px] to-blue-france to-[calc(100%-24px)] sm:bottom-[12px] sm:top-[revert] sm:h-2 sm:w-[calc(100%-3rem-12rem/2)] sm:bg-gradient-to-r sm:via-[72px] sm:to-[calc(100%-72px)]"></div>
    </div>
  );
};
