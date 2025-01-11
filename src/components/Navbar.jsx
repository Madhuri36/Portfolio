import React, { useState, useEffect } from 'react';
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { LINKS } from "../constants";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className={`relative flex justify-between items-center max-w-6xl mx-auto rounded-2xl ${
        scrolled ? 'bg-black/40' : 'bg-black/20'
      } backdrop-blur-sm p-4 transition-all duration-300 border border-white/5`}>
        <div className="text-white font-bold text-xl">
          <a href="/" className="relative group">
            <span className="relative z-10">Sai Madhuri</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="relative text-white group py-2"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <RiCloseFill className="w-6 h-6" />
          ) : (
            <RiMenu3Fill className="w-6 h-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 py-2 mt-2">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 space-y-4 shadow-lg border border-white/5">
            {LINKS.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="block text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;