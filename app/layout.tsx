import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";

import "./globals.css";
// import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Venish M | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in crafting amazing web experiences. Portfolio showcasing skills, projects, and blog posts.",
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
