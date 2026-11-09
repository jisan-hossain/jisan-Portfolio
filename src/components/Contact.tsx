"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface ContactProps {
  onShowToast: (message: string) => void;
}

export function Contact({ onShowToast }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    onShowToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3D8178] mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] tracking-tight mb-4">
            Have an opportunity in mind?
          </h2>
          <p className="text-base text-[#687780] leading-relaxed">
            I am looking for an internship or a junior role. If you have an opening, or just want to talk about web development, email me and I will reply.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          
          {/* Primary Email Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E8E5] shadow-[0_2px_12px_rgba(23,43,58,0.03)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687780]">
              Email
            </span>

            <div className="flex items-center gap-3 mt-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#EEF2EF] flex items-center justify-center text-[#3D8178] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.contacts.email}`}
                className="text-base sm:text-lg font-semibold text-[#172B3A] hover:text-[#3D8178] transition-colors break-all"
              >
                {PERSONAL_INFO.contacts.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.contacts.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#3D8178] hover:bg-[#326b63] rounded-xl transition-all shadow-[0_2px_8px_rgba(61,129,120,0.25)] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#172B3A] bg-[#F7F8F5] hover:bg-[#EEF2EF] border border-[#E3E8E5] rounded-xl transition-all cursor-pointer active:scale-[0.98]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#3D8178]" />
                    <span className="text-[#3D8178]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#687780]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social & Professional Networks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-5 border border-[#E3E8E5] hover:border-[#3D8178]/50 shadow-[0_2px_8px_rgba(23,43,58,0.02)] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF2EF] flex items-center justify-center text-[#172B3A] group-hover:text-[#3D8178] transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#687780] group-hover:text-[#3D8178] transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#172B3A]">LinkedIn</div>
                <div className="text-xs text-[#687780] truncate mt-0.5">
                  {PERSONAL_INFO.contacts.linkedinDisplay}
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-5 border border-[#E3E8E5] hover:border-[#3D8178]/50 shadow-[0_2px_8px_rgba(23,43,58,0.02)] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF2EF] flex items-center justify-center text-[#172B3A] group-hover:text-[#3D8178] transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#687780] group-hover:text-[#3D8178] transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#172B3A]">GitHub</div>
                <div className="text-xs text-[#687780] truncate mt-0.5">
                  {PERSONAL_INFO.contacts.githubDisplay}
                </div>
              </div>
            </a>
          </div>

          {/* Location & Timezone pill */}
          <div className="p-4 rounded-xl bg-[#EEF2EF] border border-[#E3E8E5] flex items-center justify-between text-xs text-[#687780]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#3D8178]" />
              <span className="text-[#172B3A] font-medium">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#3D8178]" />
              <span>Timezone: {PERSONAL_INFO.timezone}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}