import Hero from "../components/Hero";
import FeaturesSection from "../components/sections/FeaturesSection";
import PlansSection from "../components/sections/PlansSection";
import TeamSection from "../components/sections/TeamSection";
import FaqSection from "../components/sections/FaqSection";
import CtaPanel from "../components/sections/CtaPanel";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <PlansSection />
      <TeamSection />
      <FaqSection />
      <CtaPanel />
    </main>
  );
}
