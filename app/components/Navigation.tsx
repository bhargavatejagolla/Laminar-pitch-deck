"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-void/80 backdrop-blur-md border-b border-line/50" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold tracking-widest text-text">
          LAMINAR
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12 font-mono text-sm tracking-widest text-muted">
          <a href="#intelligence" className="hover:text-signal transition-colors">INTELLIGENCE</a>
          <a href="#technology" className="hover:text-signal transition-colors">TECHNOLOGY</a>
          <a href="#validation" className="hover:text-signal transition-colors">VALIDATION</a>
        </div>

        {/* CTA */}
        <a 
          href="#prototype" 
          className="flex items-center space-x-2 px-5 py-2.5 text-xs font-mono font-medium border border-line/80 rounded-sm hover:border-signal/50 hover:bg-panel/50 hover:text-signal transition-all"
        >
          <span>EXPLORE PROTOTYPE</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
