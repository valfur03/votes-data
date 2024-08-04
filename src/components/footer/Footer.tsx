import { FooterContent } from "@/components/footer/shared/components/FooterContent";
import { FooterDisclaimer } from "@/components/footer/shared/components/FooterDisclaimer";

export const Footer = () => {
  return (
    <div className="mt-auto flex flex-col justify-center bg-white">
      <FooterContent />
      <FooterDisclaimer />
    </div>
  );
};
