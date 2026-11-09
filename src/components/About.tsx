"use client";

import React from "react";
import { Target } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#EEF2EF]/60 border-y border-[#E3E8E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3D8178] mb-3">
            ABOUT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] tracking-tight">
            A little about me.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story (comes from portfolio-data.ts) */}
          <div className="min-w-0 lg:col-span-7 space-y-6 leading-relaxed">
            {PERSONAL_INFO.aboutStory.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "text-lg md:text-xl font-medium text-[#172B3A] leading-relaxed"
                    : "text-base text-[#687780] leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Snapshot */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E3E8E5]">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#687780]">Current Stage</span>
                <span className="text-sm font-semibold text-[#172B3A]">Fresher Developer</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#687780]">Location</span>
                <span className="text-sm font-semibold text-[#172B3A]">
                  {PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#687780]">Looking For</span>
                <span className="text-sm font-semibold text-[#3D8178]">Internship / Junior Role</span>
              </div>
            </div>
          </div>

          {/* Right Column: Career Goals */}
          <div className="min-w-0 lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3E8E5] shadow-[0_4px_20px_rgba(23,43,58,0.04)]">
              <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#E3E8E5]">
                <Target className="w-5 h-5 text-[#3D8178]" />
                <h3 className="text-base font-bold text-[#172B3A] tracking-tight">
                  What I Am Aiming For
                </h3>
              </div>

              <ul className="space-y-4">
                {PERSONAL_INFO.careerGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF3F1] text-[#3D8178] text-xs font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#172B3A]">
                        {goal.title}
                      </h4>
                      <p className="text-xs text-[#687780] mt-0.5 leading-relaxed">
                        {goal.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}