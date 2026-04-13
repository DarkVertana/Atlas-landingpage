import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import AboutIntro from "./components/AboutIntro";
import HowItWorks from "./components/HowItWorks";
import AIFeatures from "./components/AIFeatures";
import NumbersStrip from "./components/NumbersStrip";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <AboutIntro />
      <HowItWorks />
      <AIFeatures />
      <NumbersStrip />
      <FAQ />
      <CTASection />
    </div>
  );
}
