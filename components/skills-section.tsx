"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Palette,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React.Js, Next.Js",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "React Native, Flutter",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, APIs",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD",
  },
  {
    icon: Globe,
    title: "DevOps & Cloud",
    description: "Docker, AWS, CI/CD",
  },
];

const technologies = [
  { name: "HTML", color: "text-orange-400" },
  { name: "CSS", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-foreground" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Python", color: "text-yellow-300" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="font-mono text-4xl text-[hsl(var(--primary))]">
              {"</>"}
            </span>
          </div>
          <span className="inline-block rounded-md border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-sm text-[hsl(var(--primary))]">
            Skills
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            I am striving to never stop learning and improving
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-xl border border-border bg-[hsl(var(--card)/0.6)] p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-[hsl(var(--primary))] transition-colors group-hover:text-black group-hover:bg-[hsl(var(--primary))]">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h4 className="mb-6 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + i * 0.08 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className={`flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium ${tech.color} cursor-default transition-colors hover:border-primary/30`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
