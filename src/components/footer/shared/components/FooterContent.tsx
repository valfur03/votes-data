import {
  ABOUT_PAGE_TITLE,
  REPORT_ISSUE_PAGE_TITLE,
  SOURCE_CODE_PAGE_TITLE,
} from "@/constant/pages-title";
import {
  ABOUT_PATH,
  REPORT_ISSUE_PATH,
  SOURCE_CODE_PATH,
} from "@/constant/url-paths";
import Link from "next/link";

export const FooterContent = () => {
  return (
    <div className="px-safe">
      <div className="flex w-full justify-center gap-8 p-4">
        <Link href={ABOUT_PATH}>{ABOUT_PAGE_TITLE}</Link>
        <Link href={SOURCE_CODE_PATH}>{SOURCE_CODE_PAGE_TITLE}</Link>
        <Link href={REPORT_ISSUE_PATH}>{REPORT_ISSUE_PAGE_TITLE}</Link>
      </div>
    </div>
  );
};
