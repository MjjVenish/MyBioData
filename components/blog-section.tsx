"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How to Become a Modern Web Developer in 2026",
    slug: "how-to-become-modern-web-developer",
    excerpt:
      "Learn the essential skills, tools, and mindset required to become a successful web developer, including React, Next.js, APIs, and performance optimization strategies.",
    image: "/images/blog-1.jpg",
    category: "Web Development",
    tag: "Career",
    author: "Venish M",
    date: "2026-01-10",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of React: Server Components & Performance Optimization",
    slug: "future-of-react-server-components",
    excerpt:
      "Explore how React Server Components improve performance, reduce bundle size, and change the way modern applications are built with Next.js.",
    image: "/images/blog-2.jpg",
    category: "Frontend",
    tag: "React",
    author: "Venish M",
    date: "2026-01-25",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Modern CSS Architecture: Tailwind vs CSS-in-JS",
    slug: "modern-css-architecture-guide",
    excerpt:
      "Discover modern CSS approaches including utility-first frameworks, component styling strategies, and best practices for scalable UI development.",
    image: "/images/blog-3.jpg",
    category: "UI/UX",
    tag: "CSS",
    author: "Venish M",
    date: "2026-02-05",
    readTime: "3 min read",
    featured: false,
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-md border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-sm text-[hsl(var(--primary))]">
            Blogs
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-[hsl(var(--card)/0.6)] backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0bg-linear-to-t from-card via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-[hsl(var(--primary))] backdrop-blur-sm">
                  <Tag className="h-3 w-3" />
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-[hsl(var(--primary))] leading-snug group-hover:text-[hsl(var(--primary))]/80 transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center"
                  >
                    <span className="flex items-center gap-1 text-xs font-medium text-[hsl(var(--primary))] transition-all duration-300 group-hover:gap-2">
                      Read More
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
