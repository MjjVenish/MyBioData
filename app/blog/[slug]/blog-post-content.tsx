"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let inList = false;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ol
          key={`list-${elements.length}`}
          className="mb-6 list-decimal space-y-2 pl-6 text-muted-foreground leading-relaxed"
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      listItems = [];
      inList = false;
    }
  };

  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-foreground">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="mb-3 mt-8 text-xl font-semibold text-primary">
          {line.slice(4)}
        </h3>
      );
    } else if (line.match(/^\d+\.\s/)) {
      inList = true;
      listItems.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.startsWith("- ")) {
      flushList();
      if (!inList) {
        const bulletItems: string[] = [];
        let j = i;
        while (j < lines.length && lines[j].startsWith("- ")) {
          bulletItems.push(lines[j].slice(2));
          j++;
        }
        elements.push(
          <ul
            key={i}
            className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed"
          >
            {bulletItems.map((item, idx) => (
              <li key={idx}>{renderInline(item)}</li>
            ))}
          </ul>
        );
        i = j - 1;
      }
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
  }

  flushList();
  return elements;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <span className="font-mono text-sm text-primary">{"<C/>"}</span>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] min-h-80 w-full overflow-hidden pt-14"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 -mt-24">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Tag className="h-3 w-3" />
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime} read
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl leading-tight text-balance">
            {post.title}
          </h1>

          {/* Body */}
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10">
            {renderMarkdown(post.content)}
          </div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="my-12 flex justify-center"
          >
            <Link
              href="/#blog"
              className="group flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all posts
            </Link>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}
