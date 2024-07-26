import { FrenchHemicycle } from "@/components/french-hemicycle/FrenchHemicycle";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";

export default function LegislativesPage() {
  return (
    <main>
      <section className="px-safe bg-white">
        <div className="m-auto max-w-screen-lg px-6 py-8">
          <h1>Élections législatives</h1>
        </div>
      </section>
      <section className="px-safe rounded-b-lg bg-white">
        <div className="m-auto max-w-screen-lg p-2">
          <FrenchHemicycle term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </div>
      </section>
    </main>
  );
}
