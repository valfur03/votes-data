import { Button } from "@/components/button/Button";
import { HomeFrenchGraph } from "@/components/home-french-graph/HomeFrenchGraph";
import { HomeHeadline } from "@/components/home-headline/HomeHeadline";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection className="flex px-24 py-8">
          <div className="flex w-full justify-between bg-[url(/assets/image/other/home-graph-lines.png)] bg-[length:832px] bg-no-repeat px-8">
            <div className="flex flex-col gap-y-4">
              <HomeHeadline />
              <div className="flex gap-x-3">
                <Button>Découvrir</Button>
                <Button variant="primary-discret">
                  <MagnifyingGlassIcon /> Rechercher une donnée...
                </Button>
              </div>
            </div>
            <HomeFrenchGraph />
          </div>
        </PageHeaderSection>
      </PageHeader>
    </>
  );
}
