import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Features from "./components/sections/Features";
import ProductShowcase from "./components/sections/ProductShowcase";
import Pricing from "./components/sections/Pricing";
import OpenSource from "./components/sections/OpenSource";
import FAQ from "./components/sections/FAQ";
import CTAFooter from "./components/sections/CTAFooter";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-dvh bg-page">
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <ProductShowcase />
        <Pricing />
        <OpenSource />
        <FAQ />
        <CTAFooter />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
