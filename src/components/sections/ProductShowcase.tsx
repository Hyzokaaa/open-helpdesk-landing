import { useState } from "react";
import useTranslation from "../../i18n/useTranslation";
import { CONFIG } from "../../config";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import useInView from "../../hooks/useInView";
import clsx from "clsx";

export default function ProductShowcase() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { ref, inView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #f9fafb 0%, #1e293b 15%, #1e293b 85%, #f9fafb 100%)" }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title={t("showcase.heading")} subtitle={t("showcase.subheading")} dark />

        {/* Theme toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setTheme("light")}
              className={clsx(
                "px-4 py-1.5 text-sm font-body-medium rounded-full transition-all cursor-pointer",
                theme === "light" ? "bg-white text-gray-900" : "text-gray-400 hover:text-gray-200",
              )}
            >
              {t("showcase.lightTheme")}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={clsx(
                "px-4 py-1.5 text-sm font-body-medium rounded-full transition-all cursor-pointer",
                theme === "dark" ? "bg-white text-gray-900" : "text-gray-400 hover:text-gray-200",
              )}
            >
              {t("showcase.darkTheme")}
            </button>
          </div>
        </div>

        {/* Browser frame */}
        <div
          ref={ref}
          className={clsx(
            "max-w-4xl mx-auto rounded-2xl border border-gray-700 overflow-hidden shadow-2xl animate-fade-up",
            inView && "in-view",
          )}
        >
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-gray-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-700 rounded-lg px-3 py-1 text-xs text-gray-400 text-center">
                app.openhelpdesk.com
              </div>
            </div>
          </div>
          {/* Placeholder */}
          <div
            className={clsx(
              "aspect-[16/9] flex items-center justify-center transition-colors duration-500",
              theme === "light"
                ? "bg-gradient-to-br from-gray-50 to-primary-50"
                : "bg-gradient-to-br from-gray-900 to-gray-800",
            )}
          >
            <div className="flex flex-col items-center gap-3 opacity-40">
              <img src="/logo.svg" alt={CONFIG.PRODUCT_NAME} className="w-12 h-12" />
              <span className={clsx("text-sm font-body-medium", theme === "light" ? "text-gray-400" : "text-gray-500")}>
                Screenshot placeholder
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
