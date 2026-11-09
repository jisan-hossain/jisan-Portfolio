import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F7F8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Md Jisan Hossain — Aspiring Full-Stack Developer",
  description:
    "Portfolio of Md Jisan Hossain, an aspiring Full-Stack Developer from Bangladesh focused on building clean, responsive, and user-friendly web applications.",
  authors: [{ name: "Md Jisan Hossain" }],
  keywords: [
    "Md Jisan Hossain",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Node.js",
    "Bangladesh",
    "Portfolio",
    "Web Development",
  ],
  openGraph: {
    title: "Md Jisan Hossain — Aspiring Full-Stack Developer",
    description:
      "Aspiring Full-Stack Developer from Bangladesh focused on clean, responsive, and user-friendly web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Jisan Hossain — Aspiring Full-Stack Developer",
    description:
      "Aspiring Full-Stack Developer from Bangladesh focused on clean, responsive, and user-friendly web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F7F8F5] text-[#172B3A] antialiased selection:bg-[#3D8178]/20 selection:text-[#172B3A] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
