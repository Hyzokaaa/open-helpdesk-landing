import { useState } from "react";
import useTranslation from "../../i18n/useTranslation";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Toggle from "../ui/Toggle";
import PricingCard from "../ui/PricingCard";

export default function Pricing() {
  const { t } = useTranslation();
  const [billing, setBilling] = useState<"left" | "right">("left");
  const yearly = billing === "right";

  const tiers = [
    {
      name: t("pricing.free.name"),
      description: t("pricing.free.desc"),
      monthly: 0,
      cta: t("pricing.free.cta"),
      features: [t("pricing.free.f1"), t("pricing.free.f2"), t("pricing.free.f3"), t("pricing.free.f4")],
    },
    {
      name: t("pricing.starter.name"),
      description: t("pricing.starter.desc"),
      monthly: 9,
      cta: t("pricing.starter.cta"),
      features: [t("pricing.starter.f1"), t("pricing.starter.f2"), t("pricing.starter.f3"), t("pricing.starter.f4")],
    },
    {
      name: t("pricing.business.name"),
      description: t("pricing.business.desc"),
      monthly: 29,
      cta: t("pricing.business.cta"),
      highlighted: true,
      badge: t("mostPopular"),
      features: [t("pricing.business.f1"), t("pricing.business.f2"), t("pricing.business.f3"), t("pricing.business.f4")],
    },
    {
      name: t("pricing.scale.name"),
      description: t("pricing.scale.desc"),
      monthly: 79,
      cta: t("pricing.scale.cta"),
      features: [t("pricing.scale.f1"), t("pricing.scale.f2"), t("pricing.scale.f3"), t("pricing.scale.f4")],
    },
    {
      name: t("pricing.enterprise.name"),
      description: t("pricing.enterprise.desc"),
      monthly: -1,
      cta: t("pricing.enterprise.cta"),
      features: [t("pricing.enterprise.f1"), t("pricing.enterprise.f2"), t("pricing.enterprise.f3"), t("pricing.enterprise.f4"), t("pricing.enterprise.f5")],
    },
  ];

  const formatPrice = (monthly: number) => {
    if (monthly === 0) return "$0";
    if (monthly === -1) return t("custom");
    return yearly ? `$${monthly * 10}` : `$${monthly}`;
  };

  const formatPeriod = (monthly: number) => {
    if (monthly <= 0) return "";
    return yearly ? t("pricing.perYear") : t("pricing.perMonth");
  };

  return (
    <section id="pricing" className="py-24 bg-page">
      <Container>
        <SectionHeading title={t("pricing.heading")} subtitle={t("pricing.subheading")} />

        <div className="flex justify-center mb-12">
          <Toggle
            left={t("pricing.monthly")}
            right={t("pricing.yearly")}
            active={billing}
            onChange={setBilling}
            badge={billing === "right" ? t("pricing.yearlyDiscount") : undefined}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              description={tier.description}
              price={formatPrice(tier.monthly)}
              period={formatPeriod(tier.monthly)}
              features={tier.features}
              cta={tier.cta}
              highlighted={tier.highlighted}
              badge={tier.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
