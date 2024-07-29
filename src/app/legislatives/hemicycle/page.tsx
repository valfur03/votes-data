import { DeputiesGrid } from "@/components/deputies-grid/DeputiesGrid";
import { FrenchHemicycle } from "@/components/french-hemicycle/FrenchHemicycle";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";

export default function LegislativesHemicyclePage() {
  return (
    <main>
      <PageHeader>
        <PageHeaderSection className="m-auto max-w-screen-lg px-6 py-8">
          <h1>Élections législatives</h1>
        </PageHeaderSection>
        <PageHeaderSection className="m-auto max-w-screen-lg p-2">
          <FrenchHemicycle term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </PageHeaderSection>
      </PageHeader>
      <section className="px-safe">
        <div className="m-auto max-w-screen-lg px-6 py-8">
          <header className="mb-8 flex flex-row items-center gap-4 md:mb-12 md:mt-4 lg:mb-16 lg:mt-8 lg:gap-8">
            <hr className="grow border-gray-400" />
            <h2 className="text-gray-700">Liste des députés</h2>
            <hr className="grow border-gray-400" />
          </header>
          <DeputiesGrid term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </div>
      </section>
    </main>
  );
}
