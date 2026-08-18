import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { IntelligenceEngine } from "./components/IntelligenceEngine";
import { IntelligenceDomains } from "./components/IntelligenceDomains";
import { WowLayer } from "./components/WowLayer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-text selection:bg-signal/30 selection:text-white">
      <Navigation />
      <Hero />
      <Problem />
      <IntelligenceEngine />
      <IntelligenceDomains />
      <WowLayer />
    </main>
  );
}
