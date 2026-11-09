"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { PlaceholderModal } from "@/components/PlaceholderModal";
import { Toast } from "@/components/Toast";
import { Project } from "@/data/portfolio-data";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedPlaceholderProject, setSelectedPlaceholderProject] =
    useState<Project | null>(null);
  const [placeholderType, setPlaceholderType] = useState<"github" | "live">(
    "live"
  );

  const handleOpenPlaceholder = (
    project: Project,
    type: "github" | "live"
  ) => {
    setSelectedPlaceholderProject(project);
    setPlaceholderType(type);
  };

  const handleClosePlaceholder = () => {
    setSelectedPlaceholderProject(null);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#172B3A] selection:bg-[#3D8178]/20 selection:text-[#172B3A]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects onPlaceholderClick={handleOpenPlaceholder} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Delights */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      <PlaceholderModal
        isOpen={!!selectedPlaceholderProject}
        project={selectedPlaceholderProject}
        linkType={placeholderType}
        onClose={handleClosePlaceholder}
        onShowToast={showToast}
      />

      {/* Feedback Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
