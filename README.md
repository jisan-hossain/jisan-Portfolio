# Md Jisan Hossain — Developer Portfolio

A modern, responsive, and minimalist developer portfolio website built for **Md Jisan Hossain**, an aspiring Full-Stack Developer from Bangladesh.

Designed with an editorial, human-centered aesthetic—pairing clean neutral tones with subtle forest green accents, high typography hierarchy, and authentic storytelling.

---

## 🌟 Highlights & Features

- **Hero & Identity**: Real-time availability indicator ("Open to Internships & Junior Opportunities"), dynamic introduction, and interactive code simulation card showcasing candidate stack and pipeline.
- **Biographical Journey**: Candid, authentic career story detailing progression from web fundamentals to modern React/Next.js and backend architecture (Node.js, Express, MongoDB, Better Auth).
- **Categorized Technical Repertoire**: Clean, badge-driven breakdown of Frontend, Backend, and Development Tools with descriptive focus areas rather than arbitrary percentage bars.
- **Interactive Project Case Studies**:
  - **Bazar Dor**: Modern e-commerce web application with interactive dual-view (UI preview vs. full-stack system architecture).
  - **Better Auth Practice App**: Dedicated authentication architecture case study featuring protected route simulation and session verification logs.
  - **Transparent Placeholders**: Informative, user-friendly modal that transparently clarifies demo links and offers direct reviewer contact.
- **Functional Contact Section**:
  - One-click copy email button with instant feedback toast.
  - Interactive direct message inquiry form with client-side validation.
  - Live Dhaka, Bangladesh local clock (`Asia/Dhaka`, GMT+6) updating every second.
- **Interactive Curriculum Vitae (Resume Modal)**: Clean printable format with dedicated PDF/print view and structured experience snapshot.
- **Smooth Navigation & Micro-Interactions**: Scrollspy active section highlighting, responsive mobile navigation drawer, and animated toast feedback.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: `@fontsource/inter`

---

## 📁 Project Architecture

```
my-protfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Design tokens & subtle scrollbar styles
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, viewport settings
│   │   └── page.tsx             # Main single-page application orchestrator
│   ├── components/
│   │   ├── About.tsx            # Biography, journey & engineering values
│   │   ├── Contact.tsx          # Contact form, direct email & social links
│   │   ├── Footer.tsx           # Copyright, live Dhaka clock & back-to-top
│   │   ├── Hero.tsx             # Intro headline, CTA buttons & code visual
│   │   ├── Icons.tsx            # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx           # Sticky nav with scrollspy & mobile menu
│   │   ├── PlaceholderModal.tsx # Transparent demo/code reviewer modal
│   │   ├── ProjectMockup.tsx    # Interactive project UI & architecture mocks
│   │   ├── Projects.tsx         # Featured case studies and metrics
│   │   ├── ResumeModal.tsx      # Formatted CV with print/PDF support
│   │   ├── Skills.tsx           # Categorized technology competencies
│   │   └── Toast.tsx            # Dismissible floating notification system
│   └── data/
│       └── portfolio-data.ts    # Centralized content, projects, and contact info
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verify Code Quality & Type Safety
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

---

## ✏️ Customizing Portfolio Data

All personal information, social profiles, skills, and project case studies are centralized in [`src/data/portfolio-data.ts`](file:///Users/apple/Desktop/my-protfolio/src/data/portfolio-data.ts). 

To update details (such as live URLs, email address, or adding new projects), simply edit `PERSONAL_INFO`, `SKILL_CATEGORIES`, or `PROJECTS` in that file.

---

## 📄 License

This project is created for personal portfolio demonstration. All rights reserved by **Md Jisan Hossain**.
