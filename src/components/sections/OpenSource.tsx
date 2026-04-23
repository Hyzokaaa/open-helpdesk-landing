import useTranslation from "../../i18n/useTranslation";
import { CONFIG } from "../../config";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { GitHubIcon } from "../icons/SocialIcons";
import useInView from "../../hooks/useInView";
import clsx from "clsx";

export default function OpenSource() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="open-source" className="py-24" style={{ background: "linear-gradient(to bottom, #f9fafb 0%, #1e293b 15%, #1e293b 85%, #f9fafb 100%)" }}>
      <Container>
        <SectionHeading title={t("oss.heading")} subtitle={t("oss.subheading")} dark />

        <div
          ref={ref}
          className={clsx("grid md:grid-cols-2 gap-12 items-center animate-fade-up", inView && "in-view")}
        >
          {/* Info */}
          <div className="flex flex-col gap-8">
            {[
              { title: t("oss.agpl.title"), desc: t("oss.agpl.desc") },
              { title: t("oss.selfHost.title"), desc: t("oss.selfHost.desc") },
              { title: t("oss.contribute.title"), desc: t("oss.contribute.desc") },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-white font-body-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div>
              <Button href={CONFIG.GITHUB_URL} variant="outline" className="!border-gray-600 !text-gray-200 hover:!border-primary hover:!text-primary">
                <span className="flex items-center gap-2">
                  <GitHubIcon />
                  {t("oss.starOnGithub")}
                </span>
              </Button>
            </div>
          </div>

          {/* Terminal */}
          <div className="rounded-2xl border border-gray-700 overflow-hidden bg-gray-900 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-500 ml-2 font-body-medium">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-gray-500"># Clone the repository</p>
              <p className="text-green-400">$ <span className="text-gray-200">git clone {CONFIG.GITHUB_URL}</span></p>
              <p className="mt-3 text-gray-500"># Start with Docker</p>
              <p className="text-green-400">$ <span className="text-gray-200">cd open-helpdesk</span></p>
              <p className="text-green-400">$ <span className="text-gray-200">docker compose up -d</span></p>
              <p className="mt-3 text-gray-500"># Ready at localhost:3000</p>
              <p className="text-primary">&#10003; Open Helpdesk is running!</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
