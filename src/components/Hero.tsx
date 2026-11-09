"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle background ambient grid (clean & low-contrast) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Actions */}
          <div className="min-w-0 lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EEF2EF] border border-[#E3E8E5] mb-6 transition-transform hover:scale-[1.01]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D8178] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D8178]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#172B3A]">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-2 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase text-[#3D8178] mb-3 sm:mb-4">
              <span>ASPIRING FULL-STACK DEVELOPER</span>
              <span className="hidden sm:inline opacity-60">·</span>
              <span>BANGLADESH</span>
            </div>

            {/* Headline: your name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#172B3A] tracking-tight leading-[1.12] mb-5 sm:mb-6">
              {PERSONAL_INFO.name}
            </h1>

            {/* Description (comes from portfolio-data.ts) */}
            <p className="text-base sm:text-lg text-[#687780] leading-relaxed max-w-xl mb-9">
              {PERSONAL_INFO.introduction}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3D8178] hover:bg-[#326b63] rounded-xl transition-all shadow-[0_2px_8px_rgba(61,129,120,0.25)] hover:shadow-[0_4px_14px_rgba(61,129,120,0.32)] active:scale-[0.98] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#172B3A] bg-white hover:bg-[#EEF2EF] border border-[#E3E8E5] hover:border-[#3D8178]/50 rounded-xl transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#3D8178]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Micro proof points */}
            <div className="mt-12 pt-6 border-t border-[#E3E8E5] w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-[#687780]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8178]" />
                <span>Modern React & Next.js App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8178]" />
                <span>Learning Node.js, Express & MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8178]" />
                <span>Fresher Mindset · Continuous Learner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile photo */}
          <div className="min-w-0 lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-[#E3E8E5] bg-[#EEF2EF] shadow-[0_10px_35px_rgba(23,43,58,0.08)]">
              <Image
                src="/images/profile.png"
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}