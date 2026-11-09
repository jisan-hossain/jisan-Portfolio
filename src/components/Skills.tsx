"use client";

import React from "react";
import {
  Code2,
  FileCode2,
  Palette,
  Terminal,
  Server,
  Database,
  Network,
  KeyRound,
  GitBranch,
  Laptop,
  Check,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function Skills() {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "html5":
        return <FileCode2 className="w-5 h-5 text-[#3D8178]" />;
      case "css3":
        return <Palette className="w-5 h-5 text-[#3D8178]" />;
      case "javascript":
        return <Code2 className="w-5 h-5 text-[#3D8178]" />;
      case "typescript":
        return <Terminal className="w-5 h-5 text-[#3D8178]" />;
      case "react":
        return <Cpu className="w-5 h-5 text-[#3D8178]" />;
      case "next.js":
        return <Laptop className="w-5 h-5 text-[#3D8178]" />;
      case "tailwind css":
        return <Palette className="w-5 h-5 text-[#3D8178]" />;
      case "node.js":
        return <Server className="w-5 h-5 text-[#3D8178]" />;
      case "express.js":
        return <Network className="w-5 h-5 text-[#3D8178]" />;
      case "mongodb":
        return <Database className="w-5 h-5 text-[#3D8178]" />;
      case "rest apis":
        return <Network className="w-5 h-5 text-[#3D8178]" />;
      case "better auth":
        return <KeyRound className="w-5 h-5 text-[#3D8178]" />;
      case "git":
        return <GitBranch className="w-5 h-5 text-[#3D8178]" />;
      case "github":
        return <GithubIcon className="w-5 h-5 text-[#3D8178]" />;
      case "vs code":
        return <Terminal className="w-5 h-5 text-[#3D8178]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3D8178]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3D8178] mb-3">
            SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] tracking-tight mb-4">
            Technologies &amp; Tools
          </h2>
          <p className="text-base text-[#687780] leading-relaxed">
            The technologies I use to build my projects, and the backend skills I am still learning.
          </p>
        </div>

        {/* 3 Skill Category Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3E8E5] shadow-[0_2px_12px_rgba(23,43,58,0.03)] hover:shadow-[0_6px_22px_rgba(23,43,58,0.06)] transition-all h-full"
            >
              {/* Category Header */}
              <div className="mb-6 pb-4 border-b border-[#E3E8E5]">
                <h3 className="text-lg font-bold text-[#172B3A] tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-[#687780] mt-1">
                  {category.description}
                </p>
              </div>

              {/* Skill Items List */}
              <ul className="space-y-3.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group p-3 rounded-xl bg-[#F7F8F5] border border-[#E3E8E5] hover:border-[#3D8178]/40 hover:bg-[#EEF2EF] transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white border border-[#E3E8E5] flex items-center justify-center">
                          {getIcon(skill.name)}
                        </div>
                        <span className="text-sm font-semibold text-[#172B3A]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-[#3D8178] bg-[#EBF3F1] px-2 py-0.5 rounded-full text-right">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#687780] pl-9 leading-snug">
                      {skill.focus}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Currently learning callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EEF2EF] border border-[#E3E8E5] flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-[#E3E8E5] flex items-center justify-center text-[#3D8178] flex-shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#172B3A]">
              Currently learning
            </h4>
            <p className="text-xs text-[#687780]">
              Node.js, Express.js, REST APIs, and data structures and algorithms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}