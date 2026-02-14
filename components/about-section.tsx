"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24" ref={ref}>
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 h-24 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-md border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-sm text-[hsl(var(--primary))]">
            About Me
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <div className="rounded-2xl border border-border bg-[hsl(var(--card)/0.6)] p-8 backdrop-blur-sm">
              <h3 className="mb-4 font-mono text-2xl font-bold text-[hsl(var(--primary))]">
                Hello!
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                My name is Venish and I specialize in web development that
                utilizes{" "}
                <span className="text-[hsl(var(--primary))]">HTML</span>,{" "}
                <span className="text-[hsl(var(--primary))]">CSS</span>,{" "}
                <span className="text-[hsl(var(--primary))]">JS</span>,{" "}
                <span className="text-[hsl(var(--primary))]">React</span>, and{" "}
                <span className="text-[hsl(var(--primary))]">Node.js</span>.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                I am a highly motivated individual and eternal optimist
                dedicated to writing clean, readable code that can be easily
                maintained and scaled. I bring an analytical mindset and
                attention to detail, taking pride in my ability to find elegant
                solutions to complex problems.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                When I am not coding, I am writing blogs, reading, or picking up
                some new hands-on skills. I like to learn my perspective and
                belief systems challenged so that I see the world through
                ever-expanding eyes.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="shrink-0"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border lg:h-80 lg:w-80">
              <Image
                src="/images/about.jpg"
                alt="Developer workspace with multiple monitors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
