"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Bangladesh is UTC+6
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#E3E8E5] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E3E8E5]">
          
          {/* Brand & Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-[#172B3A] hover:text-[#3D8178] transition-colors mb-2 inline-flex items-center gap-1.5"
            >
              <span>JISAN.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D8178]" />
            </a>
            <p className="text-xs text-[#687780] max-w-sm">
              Designed &amp; Built by{" "}
              <strong className="text-[#172B3A] font-semibold">
                Md Jisan Hossain
              </strong>
              . Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Bangladesh Local Time & Availability */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#172B3A]">
              <span className="w-2 h-2 rounded-full bg-[#3D8178] animate-pulse" />
              <span>Dhaka, BD: {localTime || "GMT+6"}</span>
            </div>
                       <p className="text-[11px] text-[#687780]">
              Open to internships &amp; junior roles
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687780]">
          <p>
            © {new Date().getFullYear()} Md Jisan Hossain. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3D8178] transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3D8178] transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className="hover:text-[#3D8178] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#172B3A] hover:text-[#3D8178] bg-[#F7F8F5] border border-[#E3E8E5] px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
