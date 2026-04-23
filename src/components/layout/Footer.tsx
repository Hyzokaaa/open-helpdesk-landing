import useTranslation from "../../i18n/useTranslation";
import { CONFIG } from "../../config";
import Container from "../ui/Container";
import { GitHubIcon, XIcon } from "../icons/SocialIcons";

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("footer.features"), href: "#features" },
        { label: t("footer.pricing"), href: "#pricing" },
        { label: t("footer.changelog"), href: "#" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.docs"), href: CONFIG.DOCS_URL },
        { label: t("footer.github"), href: CONFIG.GITHUB_URL },
        { label: t("footer.community"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: "#" },
        { label: t("footer.blog"), href: "#" },
        { label: t("footer.contact"), href: `mailto:${CONFIG.CONTACT_EMAIL}` },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: "#" },
        { label: t("footer.terms"), href: "#" },
        { label: t("footer.license"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body-semibold text-gray-100 text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt={CONFIG.PRODUCT_NAME} className="w-6 h-6" />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {CONFIG.PRODUCT_NAME}. {t("footer.rights")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={CONFIG.GITHUB_URL} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <XIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
