
"use client";

import React, { useEffect } from "react";
import {
  X,
  Printer,
  MapPin,
  FileCheck2,
  Download,
  GiftIcon,
  LinkIcon,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

import { PERSONAL_INFO } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export function ResumeModal({
  isOpen,
  onClose,
}: ResumeModalProps) {
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
        {/* Top Control Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E3E8E5] flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-[#3D8178]" />
            <h2
              id="resume-title"
              className="text-sm font-bold text-[#172B3A]"
            >
              Curriculum Vitae — Md Jisan Hossain
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Md_Jisan_Hossain_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#3D8178] hover:bg-[#326D65] rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#172B3A] bg-[#F7F8F5] hover:bg-[#EEF2EF] border border-[#E3E8E5] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#3D8178]" />
              Print
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

        {/* Resume Document */}
        <div className="p-6 sm:p-10 text-[#172B3A] space-y-6 print:p-0 print:space-y-4">

          {/* Header */}
          <header className="border-b border-[#E3E8E5] pb-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#172B3A]">
                  MD JISAN HOSSAIN
                </h1>

                <p className="text-sm font-semibold text-[#3D8178] mt-1">
                  Aspiring Full-Stack Developer | Full-Stack Developer Intern
                </p>
              </div>

              <div className="text-xs text-[#687780] space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#3D8178]" />
                  Dhaka, Bangladesh
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#3D8178]" />
                  +880 1967 134628
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#3D8178]" />
                  {PERSONAL_INFO.contacts.email}
                </div>

                <a
                  href={PERSONAL_INFO.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#3D8178]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#3D8178]" />
                  LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#3D8178]"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#3D8178]" />
                  GitHub
                </a>

                <a
                  href="https://jisan-portfolio-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#3D8178]"
                >
                  <Globe className="w-3.5 h-3.5 text-[#3D8178]" />
                  Portfolio
                </a>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-2">
              Professional Summary
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed">
              Aspiring Full-Stack Developer from Bangladesh with hands-on
              experience building responsive web applications using Next.js,
              React, TypeScript, and Tailwind CSS. Experienced in developing
              interactive user interfaces and practical projects, including
              a fitness workout application and a personal portfolio website.
              Passionate about learning modern web technologies and growing
              through real-world software development experience.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-3">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <p><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript</p>
              <p><strong>Frontend:</strong> React.js, Next.js (App Router)</p>
              <p><strong>Styling:</strong> Tailwind CSS, DaisyUI</p>
              <p><strong>Backend:</strong> Basic Knowledge of Node.js, Express.js, REST APIs</p>
              <p><strong>Database:</strong> Basic Knowledge of MongoDB</p>
              <p><strong>Tools:</strong> Git, GitHub, VS Code</p>
              <p><strong>Libraries:</strong> Lucide React</p>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-3">
              Projects
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold">
                  FitLog – Dark-Themed Gym Companion Web App
                </h4>

                <p className="text-xs text-[#687780] mt-1">
                  <strong>Technologies:</strong> Next.js, TypeScript, Tailwind CSS, DaisyUI
                </p>

                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs leading-relaxed">
                  <li>Developed a responsive gym companion application featuring a library of 12 workout exercises.</li>
                  <li>Displayed muscle groups, equipment, estimated duration, calories, and ratings.</li>
                  <li>Implemented workout planning and saving functionality with live Plan and Saved counters.</li>
                  <li>Added tracking features for exercises, workout duration, and estimated calories burned.</li>
                </ul>

                <a
                  href="https://fitlog-app-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3D8178] font-semibold"
                >
                  Live Demo: fitlog-app-pi.vercel.app
                </a>
              </div>

              <div>
                <h4 className="text-sm font-bold">
                  Personal Developer Portfolio Website
                </h4>

                <p className="text-xs text-[#687780] mt-1">
                  <strong>Technologies:</strong> Next.js 16.4.5, React,
                  TypeScript, Tailwind CSS, Lucide React
                </p>

                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs leading-relaxed">
                  <li>Developed a personal portfolio website using Next.js App Router.</li>
                  <li>Built reusable React components to organize About, Skills, and Projects sections.</li>
                  <li>Used TypeScript to structure project data.</li>
                  <li>Created a responsive interface using Tailwind CSS.</li>
                </ul>

                <a
                  href="https://jisan-portfolio-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3D8178] font-semibold"
                >
                  Live Demo: jisan-portfolio-azure.vercel.app
                </a>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-3">
              Work Experience
            </h3>

            <h4 className="text-sm font-bold">
              Garments Sewing Operator
            </h4>

            <p className="text-xs text-[#687780]">
              Knit Asia Limited | 2025–2026
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
              <li>Worked in garment production operations.</li>
              <li>Gained practical experience in a professional manufacturing environment.</li>
              <li>Developed discipline and teamwork skills.</li>
            </ul>
          </section>

          {/* Career Objective */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D8178] mb-2">
              Career Objective
            </h3>

            <p className="text-xs leading-relaxed">
              Seeking a Full-Stack Developer Internship to apply my technical
              skills, gain hands-on industry experience, collaborate with
              experienced developers, and grow into a professional software
              developer.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
