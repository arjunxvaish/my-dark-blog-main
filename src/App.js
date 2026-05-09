import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Strategies from "./pages/Strategies";
import BlogIndex from "./pages/BlogIndex";
import Taiwan from "./pages/Taiwan";
import GM from "./pages/GM";
import LEN from "./pages/LEN";
import Recession from "./pages/Recession";
import Services from "./pages/Services"; // ✅ Services macro view
import PMI from "./pages/PMI";           // ✅ PMI-focused with NVDA/CAT
import Energy from "./pages/Energy";
import QuantLeague from "./pages/QuantLeague";
import JulyMacro from "./pages/JulyMacro";
import Europe from "./pages/Europe";
import UBS from "./pages/UBS";
import NEM from "./pages/NEM";
import GSG from "./pages/GSG";
import CENX from "./pages/CENX";
import VIX from "./pages/VIX";
import HawkishCut from "./pages/HawkishCut";
import Rally from "./pages/Rally";

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < lastScrollY) {
        setShowNav(true);
      } else if (current > lastScrollY + 10) {
        setShowNav(false);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <header
        className={`border-b border-neutral-800 fixed w-full bg-black transition-transform duration-300 z-50 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-center sm:justify-start gap-6 p-4">
          <Link to="/" className="text-white font-semibold">Home</Link>
          <Link to="/strategies" className="text-white hover:text-teal-400">Strategies</Link>
          <Link to="/blog" className="text-white hover:text-teal-400">Blog</Link>
        </nav>
      </header>

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/services" element={<Services />} /> 
          <Route path="/blog/pmi" element={<PMI />} />           
          <Route path="/blog/taiwan" element={<Taiwan />} />
          <Route path="/blog/gm" element={<GM />} />
          <Route path="/blog/len" element={<LEN />} />
          <Route path="/blog/recession" element={<Recession />} />
          <Route path="/blog/quant-league" element={<QuantLeague />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/blog/energy" element={<Energy />} />
          <Route path="/blog/julymacro" element={<JulyMacro />} />
          <Route path="/blog/europe" element={<Europe />} />
          <Route path="/blog/ubs" element={<UBS />} />
          <Route path="/blog/nem" element={<NEM />} />
          <Route path="/blog/gsg" element={<GSG />} />
          <Route path="/blog/cenx" element={<CENX />} />
          <Route path="/blog/vix" element={<VIX />} />
          <Route path="/blog/hawkish-cut" element={<HawkishCut />} />
          <Route path="/blog/rally" element={<Rally />} />

        </Routes>
      </div>
    </Router>
  );
}
