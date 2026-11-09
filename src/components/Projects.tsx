"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/data/portfolio-data";

// Kept optional so the page that renders <Projects /> does not break.
// Links now open directly, so this is not used any more.
interface ProjectsProps {
  onPlaceholderClick?: (project: Project, type: "github" | "live") => void;
}

// Screenshot for each project (files are in public/images)
const PROJECT_IMAGES: Record<string, string> = {
  "bazar-dor": "/images/bazar-dor.png",
  fitlog: "/images/fitlog.png",
};

export function Projects(_props: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#EEF2EF]/40 border-t border-[#E3E8E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#3D8178] mb-3">
              PROJECTS &amp; BUILDS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-sm text-[#687780] max-w-md">
            Two projects I built and deployed. Each one links to the live site and the source code.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-16 lg:space-y-20">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            const image = PROJECT_IMAGES[project.id];

            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl p-6 sm:p-9 lg:p-11 border border-[#E3E8E5] shadow-[0_4px_24px_rgba(23,43,58,0.04)] hover:shadow-[0_8px_32px_rgba(23,43,58,0.07)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Preview Column */}
                  <div className={`min-w-0 lg:col-span-6 w-full ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#E3E8E5] bg-[#EEF2EF] shadow-[0_6px_20px_rgba(23,43,58,0.06)] transition-transform duration-300 hover:scale-[1.01]"
                    >
                      {image && (
                        <Image
                          src={image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(min-width: 1024px) 560px, 100vw"
                          className="object-cover object-top"
                        />
                      )}
                    </a>
                    
                    {/* Project Snapshot Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#E3E8E5] text-center">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="bg-[#F7F8F5] p-2 rounded-lg border border-[#E3E8E5]">
                            <div className="text-[10px] uppercase tracking-wider text-[#687780]">
                              {metric.label}
                            </div>
                            <div className="text-xs font-bold text-[#172B3A] mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content & Case Study Details Column */}
                  <div className={`min-w-0 lg:col-span-6 flex flex-col justify-between w-full ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      {/* Eyebrow & Number */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#3D8178]">
                          PROJECT {project.number}
                        </span>
                        <span className="text-[11px] font-medium text-[#687780] bg-[#EEF2EF] px-2.5 py-0.5 rounded-full border border-[#E3E8E5]">
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#172B3A] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      
                      {/* Tagline */}
                      <p className="text-sm font-semibold text-[#3D8178] mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#687780] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feat, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-[#687780]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8178] flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-[#172B3A] bg-[#EEF2EF] border border-[#E3E8E5] px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-5 border-t border-[#E3E8E5] flex flex-wrap items-center gap-3">
                      {/* Live Demo Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#3D8178] hover:bg-[#326b63] rounded-xl transition-all shadow-[0_2px_6px_rgba(61,129,120,0.2)] active:scale-95 cursor-pointer"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      {/* GitHub Link Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#172B3A] bg-white hover:bg-[#EEF2EF] border border-[#E3E8E5] hover:border-[#3D8178]/50 rounded-xl transition-all active:scale-95 cursor-pointer"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#172B3A]" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}