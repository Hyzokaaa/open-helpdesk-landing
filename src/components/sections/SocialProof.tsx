import useTranslation from "../../i18n/useTranslation";
import { CONFIG } from "../../config";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { StarIcon } from "../icons/SocialIcons";

export default function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="py-8 border-y border-border bg-page">
      <Container className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <Badge>{t("social.openSource")}</Badge>
        <Badge variant="outline">{t("social.license")}</Badge>
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <StarIcon />
          <span className="font-body-semibold text-heading">{CONFIG.GITHUB_STARS}</span>
          <span>{t("social.stars")}</span>
        </div>
        <span className="text-sm text-muted">{t("social.teams")}</span>
      </Container>
    </section>
  );
}
