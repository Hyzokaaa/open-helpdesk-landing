import clsx from "clsx";
import Button from "./Button";
import Badge from "./Badge";

interface Props {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  highlighted,
  badge,
}: Props) {
  return (
    <div
      className={clsx(
        "relative flex flex-col rounded-2xl p-8 transition-all duration-300",
        highlighted
          ? "bg-white border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
          : "bg-surface border border-border hover:shadow-lg",
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge>{badge}</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-heading font-body-bold text-xl">{name}</h3>
        <p className="text-muted text-sm mt-1">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-heading font-body-bold text-4xl">{price}</span>
        {period && <span className="text-muted text-sm ml-1">{period}</span>}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-body">
            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Button variant={highlighted ? "primary" : "outline"} size="base" className="w-full">
        {cta}
      </Button>
    </div>
  );
}
