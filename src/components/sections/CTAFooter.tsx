import useTranslation from "../../i18n/useTranslation";
import { CONFIG } from "../../config";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTAFooter() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent)]" />

      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-body-bold text-white tracking-tight mb-4">
          {t("cta.heading")}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
          {t("cta.subheading")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={CONFIG.APP_URL}
            className="!bg-white !text-primary hover:!bg-gray-100 !from-white !to-white"
            size="lg"
          >
            {t("cta.getStarted")}
          </Button>
          <Button
            href={`mailto:${CONFIG.CONTACT_EMAIL}`}
            variant="outline"
            className="!border-white/40 !text-white hover:!bg-white/10"
            size="lg"
          >
            {t("cta.talkToUs")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
