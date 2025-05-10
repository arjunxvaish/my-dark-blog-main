import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Strategies from "./pages/Strategies";
import BlogIndex from "./pages/BlogIndex";
import Post from "./pages/Post";

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < lastScrollY) {
        setShowNav(true); // scrolling up
      } else if (current > lastScrollY + 10) {
        setShowNav(false); // scrolling down
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <header
        className={`border-b border-neutral-800 fixed w-full bg-black transition-transform duration-300 z-50 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-center sm:justify-start gap-6 p-4">
          <Link to="/" className="text-white font-semibold">
            Home
          </Link>
          <Link to="/strategies" className="text-white hover:text-teal-400">
            Strategies
          </Link>
          <Link to="/blog" className="text-white hover:text-teal-400">
            Blog
          </Link>
        </nav>
      </header>

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
