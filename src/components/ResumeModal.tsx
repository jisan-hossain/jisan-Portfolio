"use client";

import React, { useEffect } from "react";
import {
  X,
  Printer,
  MapPin,
  FileCheck2,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export function ResumeModal({ isOpen, onClose, onShowToast }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    onShowToast("Email copied to clipboard!");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172B3A]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E3E8E5] shadow-2xl flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar (Non-print) */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E3E8E5] flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-[#3D8178]" />
            <h2 id="resume-title" className="text-sm font-bold text-[#172B3A]">
              Curriculum Vitae — Md Jisan Hossain..
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#172B3A] bg-[#F7F8F5] hover:bg-[#EEF2EF] border border-[#E3E8E5] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#3D8178]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#687780] hover:text-[#172B3A] hover:bg-[#EEF2EF] rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 text-[#172B3A] space-y-8 print:p-0">
          
          {/* Resume Header */}
          <header className="border-b border-[#E3E8E5] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172B3A]">
                  Md Jisan Hossain
                </h1>
                <p className="text-sm font-semibold text-[#3D8178] mt-1">
                  Aspiring Full-Stack Developer · Fresher
                </p>
              </div>

              <div className="text-xs text-[#687780] space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3D8178]" />
                  <span>Bangladesh</span>
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}`}
                    className="hover:text-[#3D8178] font-medium text-[#172B3A]"
                  >
                    {PERSONAL_INFO.contacts.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#687780]">GitHub: </span>
                  <span className="font-mono text-[11px] text-[#172B3A]">
                    {PERSONAL_INFO.contacts.githubDisplay}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#172B3A] leading-relaxed">
              Aspiring Full-Stack Developer from Bangladesh with hands-on experience building modern, responsive web applications using Next.js, React, TypeScript, and Tailwind CSS. Actively expanding backend proficiency across Node.js, Express, MongoDB, and modern authentication workflows. Highly motivated fresher with disciplined self-learning habits, eager to contribute to a collaborative software development team and gain real-world engineering experience.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-3">
              Technical Repertoire
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5]">
                <strong className="block text-[#172B3A] font-semibold mb-1">
                  Frontend Development
                </strong>
                <p className="text-[#687780] leading-relaxed">
                  HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js (App Router), Tailwind CSS
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5]">
                <strong className="block text-[#172B3A] font-semibold mb-1">
                  Backend &amp; Database
                </strong>
                <p className="text-[#687780] leading-relaxed">
                  Node.js, Express.js, MongoDB, RESTful API Design, Better Auth (Session Management)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5]">
                <strong className="block text-[#172B3A] font-semibold mb-1">
                  Tools &amp; Workflows
                </strong>
                <p className="text-[#687780] leading-relaxed">
                  Git, GitHub, VS Code, Postman, npm, Responsive Testing, Semantic HTML
                </p>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-4">
              Featured Case Studies &amp; Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-xl border border-[#E3E8E5] bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h4 className="text-sm font-bold text-[#172B3A]">
                      {project.title} — {project.tagline}
                    </h4>
                    <span className="text-[11px] font-mono text-[#3D8178] bg-[#EBF3F1] px-2 py-0.5 rounded">
                      {project.technologies.join(" · ")}
                    </span>
                  </div>
                  <p className="text-xs text-[#687780] leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="text-xs text-[#172B3A] flex items-start gap-2">
                        <span className="text-[#3D8178]">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Career Objectives & Commitment */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-3">
              Career Goals &amp; Values
            </h3>
            <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5] text-xs text-[#172B3A] space-y-2">
              <p>
                <strong>Goal:</strong> Secure an internship or junior developer role where I can contribute to high-impact user experiences, participate in disciplined code reviews, and scale my backend systems engineering capabilities.
              </p>
              <p className="text-[#687780]">
                <strong>Candidate Promise:</strong> High coachability, genuine transparency regarding my current fresher experience level, rigorous attention to detail, and a commitment to writing clean, maintainable, production-ready code.
              </p>
            </div>
          </section>

          {/* Footer of Resume */}
          <div className="pt-4 border-t border-[#E3E8E5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#687780]">
            <div>
              References, code repositories, and technical walkthroughs gladly provided upon request.
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-[#3D8178] font-semibold hover:underline print:hidden cursor-pointer"
            >
              Copy Candidate Email
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
