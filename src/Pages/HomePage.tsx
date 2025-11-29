import { useState } from "react";
import ProfileImage from "../assets/VenishPhoto.jpg";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function CrystalBiodata() {
  const [activeSection, setActiveSection] = useState("about");

  const biodata = {
    name: "Venish M",
    title: "Full Stack Developer",
    email: "venishmjj1018@gmail.com",
    phone: "+91 8754153042",
    location: "Chennai, Tamil Nadu, India",
    about:
      "Passionate developer with 2+ years of experience in building scalable web applications. Love creating beautiful, functional interfaces that users enjoy.",
    education: [
      {
        degree: "B.E Mechanical Engineering",
        institution: "Pet Engineering College",
        year: "2016 - 2020",
      },
      {
        degree: "Web Development Bootcamp",
        institution: "Frenzo institute",
        year: "2022",
      },
    ],
    experience: [
      {
        role: "Senior Web Developer",
        company: "BM e-solutions",
        period: "2023 - Present",
      },
      {
        role: "Web Developer",
        company: "BM e-solutions",
        period: "2022 - 2023",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML & CSS",
      "PostgreSQL",
      "Git & GitHub",
      "RESTful APIs",
      "Next.js",
    ],
    achievements: [
      "Implemented and optimized multi-language features in a UK e-commerce platform using React and Next.js, improving global user engagement.",
      "Reduced page load time by 50% through SSR/ISR improvements, caching (LRU + Memcached), and frontend optimization.",
      "Built scalable reusable components and analytics integrations (Amplitude), improving development speed and product insights.",
    ],
  };

  const sections = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "achievements", label: "Achievements", icon: Award },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Simplified Crystal Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient - purple/amethyst tones */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-violet-900 to-fuchsia-950"></div>

        {/* Simple crystal shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`crystal-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              background: `linear-gradient(135deg, 
                rgba(168, 85, 247, 0.2), 
                rgba(147, 51, 234, 0.15))`,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              filter: "blur(2px)",
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Soft glowing orbs */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${30 + i * 15}%`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: `radial-gradient(circle, 
                rgba(192, 132, 252, 0.3), 
                transparent 70%)`,
              filter: "blur(40px)",
              animation: `pulse ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Simple sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-purple-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "3px",
              height: "3px",
              boxShadow: "0 0 10px rgba(216, 180, 254, 0.8)",
              animation: `twinkle ${2 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 0%, rgba(88, 28, 135, 0.3) 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-purple-300/30 overflow-hidden relative">
            {/* Simple crystal border effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(192, 132, 252, 0.2), transparent, rgba(168, 85, 247, 0.2))",
              }}
            ></div>

            <div className="p-8 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-fuchsia-500 rounded-full blur-xl opacity-60"></div>
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow:
                        "0 0 40px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(192, 132, 252, 0.3)",
                    }}
                  ></div>
                  <img
                    src={ProfileImage}
                    alt={biodata.name}
                    className="relative w-40 h-40 rounded-full border-4 border-purple-400/50 shadow-2xl"
                  />
                </div>

                {/* Basic Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1
                    className="text-5xl font-bold text-white mb-2 drop-shadow-lg"
                    style={{
                      textShadow:
                        "0 0 30px rgba(192, 132, 252, 0.8), 0 0 60px rgba(168, 85, 247, 0.5)",
                    }}
                  >
                    {biodata.name}
                  </h1>
                  <p className="text-2xl text-purple-300 mb-4">
                    {biodata.title}
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-200">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{biodata.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{biodata.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{biodata.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 justify-center md:justify-start">
                    <a
                      href="https://github.com/MjjVenish"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-500/20 hover:bg-purple-400/30 rounded-full backdrop-blur-sm border border-purple-300/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50"
                    >
                      <Github className="w-5 h-5 text-purple-100" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/venish-m-911977248/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-500/20 hover:bg-purple-400/30 rounded-full backdrop-blur-sm border border-purple-300/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50"
                    >
                      <Linkedin className="w-5 h-5 text-purple-100" />
                    </a>
                    <a
                      href="https://twitter.com/VenishMjj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-500/20 hover:bg-purple-400/30 rounded-full backdrop-blur-sm border border-purple-300/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50"
                    >
                      <Twitter className="w-5 h-5 text-purple-100" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <div
                key={id}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveSection(id)}
                className={`flex mt-2 ml-1 items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-2xl border transition-all duration-300 whitespace-nowrap ${
                  activeSection === id
                    ? "bg-purple-500/30 border-purple-300/50 text-white shadow-lg shadow-purple-400/30 scale-105"
                    : "bg-white/10 border-purple-300/20 text-gray-200 hover:bg-white/15"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-purple-300/30 p-8 relative overflow-hidden">
            {/* Simplified border effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(192, 132, 252, 0.3), transparent)",
              }}
            ></div>

            {activeSection === "about" && (
              <div className="space-y-6 relative">
                <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                <p className="text-gray-100 text-lg leading-relaxed">
                  {biodata.about}
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {biodata.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-linear-to-r from-purple-500/30 to-fuchsia-500/30 rounded-full text-white border border-purple-300/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "education" && (
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Education
                </h2>
                <div className="space-y-4">
                  {biodata.education.map((edu, i) => (
                    <div
                      key={i}
                      className="p-6 bg-purple-500/10 rounded-2xl border border-purple-300/20 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30"
                    >
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-300 mt-1">{edu.institution}</p>
                      <p className="text-gray-300 mt-1">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "experience" && (
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Experience
                </h2>
                <div className="space-y-4">
                  {biodata.experience.map((exp, i) => (
                    <div
                      key={i}
                      className="p-6 bg-purple-500/10 rounded-2xl border border-purple-300/20 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30"
                    >
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-purple-300 mt-1">{exp.company}</p>
                      <p className="text-gray-300 mt-1">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "achievements" && (
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Achievements
                </h2>
                <div className="space-y-3">
                  {biodata.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-2xl border border-purple-300/20 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30"
                    >
                      <Award className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                      <p className="text-gray-100 text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
