import { Button } from "@/components/button/Button";
import { LegislativesElectionCard } from "@/components/election-card/LegislativesElectionCard";
import { HomeFrenchGraph } from "@/components/home-french-graph/HomeFrenchGraph";
import { HomeHeadline } from "@/components/home-headline/HomeHeadline";
import { PageContent } from "@/components/page-content/PageContent";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection className="flex p-8">
          <div className="flex w-full justify-center bg-[length:832px] bg-no-repeat md:justify-between md:bg-[url(/assets/image/other/home-graph-lines.png)] md:px-8">
            <div className="flex flex-col gap-y-4">
              <HomeHeadline className="text-center md:text-left" />
              <div className="flex justify-center gap-x-3 md:justify-start">
                <Button>Découvrir</Button>
                <Button variant="primary-discret">
                  <MagnifyingGlassIcon /> Rechercher une donnée...
                </Button>
              </div>
            </div>
            <HomeFrenchGraph className="hidden md:flex" />
          </div>
        </PageHeaderSection>
      </PageHeader>
      <PageContent>
        <PageContentCardsGridSection className="grid w-fit grid-cols-1 gap-8 p-8 lg:grid-cols-[repeat(2,448px)]">
          <LegislativesElectionCard />
        </PageContentCardsGridSection>
      </PageContent>
    </>
  );
}
