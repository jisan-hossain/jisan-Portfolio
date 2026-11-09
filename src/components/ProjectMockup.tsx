"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Search,
  CheckCircle2,
  ShieldCheck,
  Lock,
} from "lucide-react";

interface ProjectMockupProps {
  projectId: string;
}

export function ProjectMockup({ projectId }: ProjectMockupProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");

  if (projectId === "bazar-dor") {
    return (
      <div className="w-full bg-[#F7F8F5] rounded-xl border border-[#E3E8E5] overflow-hidden flex flex-col shadow-inner">
        {/* Browser Top Navigation */}
        <div className="bg-[#EEF2EF] px-3.5 py-2.5 border-b border-[#E3E8E5] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
            <span className="ml-2 text-[11px] font-mono text-[#687780] bg-white px-2.5 py-0.5 rounded border border-[#E3E8E5]">
              https://bazar-dor.app
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                activeTab === "preview"
                  ? "bg-white text-[#3D8178] border border-[#E3E8E5]"
                  : "text-[#687780] hover:text-[#172B3A]"
              }`}
            >
              UI Preview
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                activeTab === "architecture"
                  ? "bg-white text-[#3D8178] border border-[#E3E8E5]"
                  : "text-[#687780] hover:text-[#172B3A]"
              }`}
            >
              Stack Architecture
            </button>
          </div>
        </div>

        {/* Tab 1: Live UI Mockup */}
        {activeTab === "preview" ? (
          <div className="p-4 sm:p-5 bg-white">
            {/* Store Header Mock */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E3E8E5] text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#172B3A] tracking-tight text-sm">
                  Bazar<span className="text-[#3D8178]">Dor</span>
                </span>
                <span className="text-[10px] bg-[#EEF2EF] text-[#687780] px-1.5 py-0.5 rounded">
                  v1.2
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 bg-[#F7F8F5] px-2.5 py-1 rounded-md text-[11px] text-[#687780] border border-[#E3E8E5]">
                  <Search className="w-3 h-3" />
                  <span>Search groceries, pantry items...</span>
                </div>
                <div className="flex items-center gap-1 text-[#3D8178] font-semibold text-[11px] bg-[#EBF3F1] px-2 py-1 rounded">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>3 Items</span>
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-full bg-[#172B3A] text-white font-medium">
                All Products
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#EEF2EF] text-[#687780]">
                Fresh Produce
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#EEF2EF] text-[#687780]">
                Pantry Essentials
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#EEF2EF] text-[#687780]">
                Dairy &amp; Eggs
              </span>
            </div>

            {/* Simulated Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-2.5 rounded-lg bg-[#F7F8F5] border border-[#E3E8E5] flex flex-col justify-between">
                <div>
                  <div className="h-16 rounded bg-[#EEF2EF] mb-2 flex items-center justify-center text-[#3D8178] font-bold text-xs">
                    Organic Basmati Rice
                  </div>
                  <div className="text-xs font-semibold text-[#172B3A]">
                    Aromatic Basmati
                  </div>
                  <div className="text-[10px] text-[#687780]">5 kg pack · Premium</div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D8178]">৳ 640</span>
                  <span className="text-[10px] bg-white border border-[#E3E8E5] text-[#172B3A] px-1.5 py-0.5 rounded font-medium">
                    Added ✓
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#F7F8F5] border border-[#E3E8E5] flex flex-col justify-between">
                <div>
                  <div className="h-16 rounded bg-[#EEF2EF] mb-2 flex items-center justify-center text-[#3D8178] font-bold text-xs">
                    Mustard Cooking Oil
                  </div>
                  <div className="text-xs font-semibold text-[#172B3A]">
                    Pure Mustard Oil
                  </div>
                  <div className="text-[10px] text-[#687780]">1 Litre bottle</div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D8178]">৳ 280</span>
                  <span className="text-[10px] bg-[#3D8178] text-white px-2 py-0.5 rounded font-medium">
                    + Add
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex p-2.5 rounded-lg bg-[#F7F8F5] border border-[#E3E8E5] flex-col justify-between">
                <div>
                  <div className="h-16 rounded bg-[#EEF2EF] mb-2 flex items-center justify-center text-[#3D8178] font-bold text-xs">
                    Cardamom Spice
                  </div>
                  <div className="text-xs font-semibold text-[#172B3A]">
                    Green Cardamom
                  </div>
                  <div className="text-[10px] text-[#687780]">100g aromatic</div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D8178]">৳ 320</span>
                  <span className="text-[10px] bg-[#3D8178] text-white px-2 py-0.5 rounded font-medium">
                    + Add
                  </span>
                </div>
              </div>
            </div>

            {/* Footer status bar */}
            <div className="mt-4 pt-3 border-t border-[#E3E8E5] flex items-center justify-between text-[11px] text-[#687780]">
              <span className="flex items-center gap-1.5 text-[#3D8178]">
                <CheckCircle2 className="w-3 h-3" />
                Auth: Better Auth Session Active
              </span>
              <span>Next.js 16 SSR &amp; MongoDB</span>
            </div>
          </div>
        ) : (
          <div className="p-5 bg-white font-mono text-xs space-y-3">
            <div className="text-[#687780]">{"// Application Stack & Flow"}</div>
            <div className="p-3 bg-[#F7F8F5] rounded-lg border border-[#E3E8E5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[#172B3A] font-semibold">Client Interface:</span>
                <span className="text-[#3D8178]">Next.js App Router + Tailwind</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#172B3A] font-semibold">Auth Gateway:</span>
                <span className="text-[#3D8178]">Better Auth (Session Cookies)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#172B3A] font-semibold">Database:</span>
                <span className="text-[#3D8178]">MongoDB (Products, Users, Orders)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#172B3A] font-semibold">Cart Store:</span>
                <span className="text-[#3D8178]">Client State + LocalSync</span>
              </div>
            </div>
            <div className="text-[11px] text-[#687780]">
              Engineered with clean separation between Server Components (SEO &amp; data) and Client Components (interactive cart).
            </div>
          </div>
        )}
      </div>
    );
  }

  // Project 02: Better Auth Practice App
  return (
    <div className="w-full bg-[#F7F8F5] rounded-xl border border-[#E3E8E5] overflow-hidden flex flex-col shadow-inner">
      {/* Browser Top Navigation */}
      <div className="bg-[#EEF2EF] px-3.5 py-2.5 border-b border-[#E3E8E5] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
          <span className="ml-2 text-[11px] font-mono text-[#687780] bg-white px-2.5 py-0.5 rounded border border-[#E3E8E5]">
            https://auth-practice.local/dashboard
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-mono text-[#3D8178] bg-[#EBF3F1] px-2 py-0.5 rounded">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Protected Route</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 bg-white">
        {/* Security Audit Banner */}
        <div className="mb-3.5 p-3 rounded-lg bg-[#EBF3F1]/70 border border-[#3D8178]/20 flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-[#3D8178] mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-xs font-semibold text-[#172B3A]">
              Active Session Verified
            </div>
            <div className="text-[11px] text-[#687780] mt-0.5">
              Secure HTTP-only cookie validated via Next.js middleware before route render.
            </div>
          </div>
        </div>

        {/* Dashboard Mock Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="p-3 rounded-lg bg-[#F7F8F5] border border-[#E3E8E5]">
            <div className="text-[10px] uppercase tracking-wider text-[#687780] mb-1 font-semibold">
              Authenticated User
            </div>
            <div className="text-xs font-bold text-[#172B3A]">
              Md Jisan Hossain
            </div>
            <div className="text-[11px] font-mono text-[#3D8178]">
              jisan@dev.example
            </div>
            <div className="mt-2 text-[10px] text-[#687780]">
              Role: <span className="font-semibold text-[#172B3A]">Developer (Admin)</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F5] border border-[#E3E8E5]">
            <div className="text-[10px] uppercase tracking-wider text-[#687780] mb-1 font-semibold">
              Session Metadata
            </div>
            <div className="text-[11px] font-mono text-[#172B3A] truncate">
              ID: ba_sess_9408e4...
            </div>
            <div className="text-[11px] text-[#687780] mt-0.5">
              Expires: 7 days · Rolling
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#3D8178]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D8178]" />
              <span>MongoDB Session Store</span>
            </div>
          </div>
        </div>

        {/* Protected Endpoints Log */}
        <div className="p-2.5 rounded-lg bg-[#EEF2EF] font-mono text-[11px] text-[#172B3A] space-y-1">
          <div className="text-[#687780] text-[10px]">{"// Route Guard Execution Log"}</div>
          <div className="flex items-center justify-between">
            <span>GET /api/user/profile</span>
            <span className="text-[#3D8178] font-bold">200 OK</span>
          </div>
          <div className="flex items-center justify-between text-[#687780]">
            <span>POST /auth/sign-out</span>
            <span>Invalidates Cookie &amp; DB token</span>
          </div>
        </div>
      </div>
    </div>
  );
}
