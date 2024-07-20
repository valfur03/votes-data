import { FrenchHemicycle } from "@/components/french-hemicycle/FrenchHemicycle";

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
          <FrenchHemicycle />
        </div>
      </section>
    </main>
  );
}
