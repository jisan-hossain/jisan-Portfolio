"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project, PERSONAL_INFO } from "@/data/portfolio-data";

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  linkType: "github" | "live";
  onShowToast: (message: string) => void;
}

export function PlaceholderModal({
  isOpen,
  onClose,
  project,
  linkType,
  onShowToast,
}: PlaceholderModalProps) {
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

  if (!isOpen || !project) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    onShowToast("Candidate email copied to clipboard!");
  };

  const isLive = linkType === "live";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172B3A]/45 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 border border-[#E3E8E5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#687780] hover:text-[#172B3A] hover:bg-[#EEF2EF] rounded-lg transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Icon & Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] text-[#3D8178] flex items-center justify-center flex-shrink-0">
            {isLive ? (
              <ExternalLink className="w-5 h-5" />
            ) : (
              <GithubIcon className="w-5 h-5" />
            )}
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#3D8178]">
              {isLive ? "Live Demonstration Link" : "Source Code Repository"}
            </span>
            <h3 className="text-lg font-bold text-[#172B3A] tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Explanatory Body */}
        <div className="space-y-3.5 text-xs text-[#687780] leading-relaxed mb-6">
          <p>
            In accordance with the authentic portfolio specifications, this link is a{" "}
            <strong className="text-[#172B3A] font-semibold">
              clearly marked placeholder
            </strong>
            . Md Jisan Hossain does not invent or publish unverified URLs.
          </p>

          <div className="p-3.5 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5] space-y-1.5">
            <div className="flex items-center justify-between text-[#172B3A] font-medium">
              <span>Target Resource:</span>
              <span className="font-mono text-[#3D8178]">
                {isLive ? project.liveUrl : project.githubUrl}
              </span>
            </div>
            <div className="text-[11px] text-[#687780]">
              Technology Stack: {project.technologies.join(", ")}
            </div>
          </div>

          <p>
            <strong className="text-[#172B3A] font-semibold">For Recruiters &amp; Reviewers:</strong> If you are interested in reviewing the complete source code, repository structure, or scheduling a technical walkthrough of {project.title}, please reach out directly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#E3E8E5]">
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#3D8178] hover:bg-[#326b63] rounded-xl transition-all shadow-[0_2px_6px_rgba(61,129,120,0.2)] active:scale-98 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Copy Contact Email</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#172B3A] bg-[#F7F8F5] hover:bg-[#EEF2EF] border border-[#E3E8E5] rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
