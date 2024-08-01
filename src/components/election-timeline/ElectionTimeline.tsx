import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";

export const ElectionTimeline = () => {
  return (
    <div className="relative w-[calc(50%+48px+190px/2)]">
      <div className="relative z-10 flex items-end justify-between px-12">
        <div className="mb-1 flex w-full max-w-14 flex-col items-center gap-1 text-center">
          <div className="w-full">
            <p className="text-xs text-neutral-700">12 & 19 juin 2022</p>
          </div>
          <div className="size-6 rounded-full bg-indigo-100"></div>
        </div>
        <div className="flex w-full max-w-48 flex-col items-center justify-between gap-2 text-center">
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
          <div className="box-border flex size-8 items-center justify-center rounded-full border-4 border-blue-france bg-white">
            <div className="size-4 rounded-full bg-blue-france"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12px] h-2 w-[calc(100%-48px-190px/2)] rounded-full bg-gradient-to-r from-transparent via-indigo-100 via-[72px] to-blue-france to-[calc(100%-72px)]"></div>
    </div>
  );
};
