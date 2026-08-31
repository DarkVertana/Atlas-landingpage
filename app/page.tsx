import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
// import TrustedBySection from "./components/TrustedBySection";
import AboutIntro from "./components/AboutIntro";
import HowItWorks from "./components/HowItWorks";
import Industries from "./components/Industries";
import NumbersStrip from "./components/NumbersStrip";
import CTASection from "./components/CTASection";

// Below-the-fold and animation-heavy (GSAP + canvas) — code-split so it
// stays out of the initial page bundle.
const AIFeatures = dynamic(() => import("./components/AIFeatures"));

export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      {/* <TrustedBySection /> */}
      <AboutIntro />
      <Industries />
      <HowItWorks />
      <AIFeatures />
      <NumbersStrip />

      <CTASection />
    </main>
  );
}
