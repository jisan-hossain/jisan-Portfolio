"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F8F5]/90 backdrop-blur-md border-b border-[#E3E8E5] shadow-[0_2px_12px_rgba(23,43,58,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Md Jisan Hossain Homepage"
        >
          <span className="text-xl font-bold tracking-tight text-[#172B3A] group-hover:text-[#3D8178] transition-colors">
            JISAN
          </span>
          <span className="w-2 h-2 rounded-full bg-[#3D8178] inline-block animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-[#3D8178]"
                        : "text-[#687780] hover:text-[#172B3A]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3D8178] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-[#E3E8E5]" />

          {/* Resume Modal trigger */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#172B3A] bg-white border border-[#E3E8E5] rounded-lg hover:border-[#3D8178] hover:text-[#3D8178] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-95 cursor-pointer"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#3D8178]" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-[#687780]" />
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#172B3A] bg-white border border-[#E3E8E5] rounded-md"
            aria-label="View Resume"
          >
            <FileText className="w-3 h-3 text-[#3D8178]" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#172B3A] hover:bg-[#EEF2EF] rounded-lg transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F8F5] border-b border-[#E3E8E5] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#EEF2EF] text-[#3D8178] font-semibold"
                      : "text-[#687780] hover:text-[#172B3A] hover:bg-[#EEF2EF]/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#E3E8E5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#172B3A] bg-white border border-[#E3E8E5] rounded-lg"
              >
                <FileText className="w-4 h-4 text-[#3D8178]" />
                <span>View Full Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
