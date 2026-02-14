import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <AboutSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <SkillsSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <BlogSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
