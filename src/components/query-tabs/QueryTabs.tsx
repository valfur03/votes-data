"use client";

import { TAB_INITIAL_VALUE_SP_KEY } from "@/components/query-tabs/shared/constants/tab-initial-value-sp-key";
import { Tabs } from "@/components/tabs/Tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { PropsWithChildren } from "react";

export type QueryTabsProps = PropsWithChildren<
  React.ComponentPropsWithoutRef<typeof Tabs>
>;

export const QueryTabs = ({
  children,
  onValueChange,
  value,
  ...props
}: QueryTabsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleValueChange = (value: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set(TAB_INITIAL_VALUE_SP_KEY, value);

    router.push(`${pathname}?${updatedSearchParams}`);

    return onValueChange?.(value);
  };

  return (
    <Tabs value={value} {...props} onValueChange={handleValueChange}>
      {children}
    </Tabs>
  );
};
