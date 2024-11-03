import { Divider } from "@/components/divider/Divider";
import { PageContentSection } from "@/components/page-content/PageContentSection";

export const EmptyDatavizCardsSection = () => {
  return (
    <PageContentSection className="gap-8 py-16 text-center">
      <p className="mb-8 text-3xl font-semibold text-neutral-700">
        Des données arrivent bientôt ici...
      </p>
      <Divider className="mx-auto max-w-96" />
    </PageContentSection>
  );
};
