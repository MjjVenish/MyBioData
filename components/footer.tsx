"use client";

import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Heart,
  Globe,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MjjVenish", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/venish-m-911977248/",
    label: "LinkedIn",
  },
  {
    icon: Globe,
    href: "https://venish-chat.netlify.app/dashboard",
    label: "Live Projects",
  },
  { icon: Mail, href: "mailto:venishmjj1018@mail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <a
          href="#home"
          className="flex items-center gap-1 font-mono text-lg font-bold text-[hsl(var(--primary))]"
        >
          {"<C/>"}
          <span className="text-foreground">VenishMjj</span>
        </a>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-[hsl(var(--primary))]"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          Made with <Heart className="h-3 w-3 text-[hsl(var(--primary))]" /> by
          Venish
        </p>
      </div>
    </footer>
  );
}
