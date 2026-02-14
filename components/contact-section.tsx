"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "venishmjj1018@gmail.com" },
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: Phone, label: "Phone", value: "+918754153042" },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (fieldErrors.length > 0) {
      setFieldErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors([]);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success state after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setResponseMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setFieldErrors(data.errors || ["Something went wrong."]);
      }
    } catch {
      setStatus("error");
      setFieldErrors([
        "Network error. Please check your connection and try again.",
      ]);
    }
  };

  return (
    <section id="contact" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-md border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-sm text-primary">
            Contact
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            Have a project in mind? Let us work together
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm lg:p-8"
            >
              {/* Error Messages */}
              {fieldErrors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 rounded-lg border border-destructive/30 bg-destructive/10 p-4"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div className="flex flex-col gap-1">
                      {fieldErrors.map((err, idx) => (
                        <p key={idx} className="text-sm text-destructive">
                          {err}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 rounded-lg border border-primary/30 bg-primary/10 p-4"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm text-primary">{responseMessage}</p>
                  </div>
                </motion.div>
              )}

              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    disabled={status === "submitting"}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    disabled={status === "submitting"}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  disabled={status === "submitting"}
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                whileHover={
                  status === "idle" || status === "error" ? { scale: 1.02 } : {}
                }
                whileTap={
                  status === "idle" || status === "error" ? { scale: 0.98 } : {}
                }
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold bg-[hsl(var(--primary))] text-black transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
