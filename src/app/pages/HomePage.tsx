import { Navbar } from "../components/Navbar";
import { HeroSlider } from "../components/HeroSlider";
import { FocusSection } from "../components/FocusSection";
import { TrustBand } from "../components/TrustBand";
import { HowItWorks } from "../components/HowItWorks";
import { WhyFinOps } from "../components/WhyFinOps";
import { Capabilities } from "../components/Capabilities";
import { Plans } from "../components/Plans";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSlider />
      <FocusSection />
      <TrustBand />
      <HowItWorks />
      <WhyFinOps />
      <Capabilities />
      <Plans />
      <FAQ />
      <FinalCTA 
        subtitle="CloudAltio se integra sin fricciones. Sin instalaciones complejas ni agentes. Solo visibilidad real y proyecciones precisas de tu gasto cloud."
        variant="dark"
      />
      <Footer />
    </div>
  );
}
