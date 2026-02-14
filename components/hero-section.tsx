"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  X,
} from "lucide-react";

const stats = [
  { number: "4", label: "Programming\nLanguages" },
  { number: "6", label: "Development\nTools" },
  { number: "3", label: "Years of\nExperience" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-150 w-150 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 h-100 w-100 rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:gap-16 lg:pt-32">
        {/* Left: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="relative rounded-2xl border border-border bg-[hsl(var(--card)/0.8)] p-6 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="/images/profile.jpg"
                  alt="Venish M - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">Venish</h3>
                <p className="text-sm text-[hsl(var(--primary))]">
                  Full-Stack Developer
                </p>
              </div>
              <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                <span>venishmjj1018@email.com</span>
                <span>Chennai, India</span>
                <span>Full-Time • Freelance</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/MjjVenish"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:bg-[hsl(var(--primary))] hover:text-black"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/venish-m-911977248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:bg-[hsl(var(--primary))] hover:text-black"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:bg-[hsl(var(--primary))] hover:text-black"
                >
                  <X className="h-5 w-5" />
                </a>
              </div>
              <a
                href="/VenishResume.pdf"
                download
                className="mt-2 flex text-black items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold bg-[hsl(var(--primary))] transition-all hover:brightness-110 group-hover:text-black"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Center: Main Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="mb-2 font-mono text-sm tracking-wider text-[hsl(var(--primary))]">
              {"<Developer />"}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Hey <span className="inline-block animate-pulse">{"I'm "}</span>
              <span className="text-[hsl(var(--primary))]">Venish,</span>
              <br />
              Full-Stack Developer
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              I build scalable, high-performance web applications that help
              businesses grow and deliver exceptional user experiences. If
              you're looking for a developer who turns ideas into reliable,
              production-ready solutions — let’s connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-lg text-[hsl(var(--primary))] transition-all hover:gap-3"
            >
              {"Let's Talk"}
              <span className="text-xl">{">"}</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row gap-6 lg:flex-col lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="text-3xl font-bold text-[hsl(var(--primary))] lg:text-4xl">
                {stat.number}
              </span>
              <span className="whitespace-pre-line text-xs text-muted-foreground leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5 text-[hsl(var(--primary))]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
