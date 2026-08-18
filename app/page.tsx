import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { IntelligenceEngine } from "./components/IntelligenceEngine";
import { IntelligenceDomains } from "./components/IntelligenceDomains";
import { WowLayer } from "./components/WowLayer";
import { Phase6_Business } from "./components/Phase6_Business";
import { Phase7_Conclusion } from "./components/Phase7_Conclusion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-text selection:bg-signal/30 selection:text-white">
      <Navigation />
      <Hero />
      <Problem />
      <IntelligenceEngine />
      <IntelligenceDomains />
      <WowLayer />
      <Phase6_Business />
      <Phase7_Conclusion />
    </main>
  );
}
