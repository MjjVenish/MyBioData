"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Instagram, Linkedin, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-1 font-mono text-lg font-bold text-[hsl(var(--primary))]"
        >
          {"<C/>"}
          <span className="text-foreground">VenishMjj</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://venish-chat.netlify.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Projects"
            className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/venish-m-911977248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/MjjVenish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href="https://venish-chat.netlify.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Projects"
                  className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/venish-m-911977248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/MjjVenish"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground transition-colors hover:text-[hsl(var(--primary))]"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
