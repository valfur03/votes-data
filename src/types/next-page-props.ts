export type NextPageProps = {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | Array<string> | undefined>>;
};
