"use client";

import React, { useEffect } from "react";
import {
  X,
  Printer,
  FileCheck2,
  Download,
} from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#172B3A]/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-5xl h-[94vh] sm:h-[92vh] border border-[#E3E8E5] shadow-2xl flex flex-col relative overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar - Fancy & Sleek */}
        <div className="bg-white/95 backdrop-blur-md px-6 py-3.5 border-b border-[#E3E8E5] flex items-center justify-between z-20 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#3D8178]/10 rounded-lg">
              <FileCheck2 className="w-5 h-5 text-[#3D8178]" />
            </div>
            <div>
              <h2
                id="resume-title"
                className="text-xs sm:text-sm font-bold text-[#172B3A]"
              >
                Curriculum Vitae — Md Jisan Hossain
              </h2>
              <p className="text-[10px] text-[#687780] hidden sm:block">
                Full-Stack Developer Portfolio Resume Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Md_Jisan_Hossain_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3D8178] hover:bg-[#326D65] rounded-xl shadow-sm transition-all duration-150 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#172B3A] bg-[#F7F8F5] hover:bg-[#EEF2EF] border border-[#E3E8E5] rounded-xl transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#3D8178]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#687780] hover:text-[#172B3A] hover:bg-[#EEF2EF] rounded-xl transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Expanded PDF Viewer Container */}
        <div className="flex-1 w-full bg-[#1e293b] relative">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full h-full border-none"
            title="Md Jisan Hossain Resume PDF"
          />
        </div>
      </div>        
    </div>
  );
}