import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-text selection:bg-signal/30 selection:text-white">
      <Navigation />
      <Hero />
      <Problem />
    </main>
  );
}
