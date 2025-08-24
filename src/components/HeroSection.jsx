import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const words = [
    "Ayush Chatterjee",
    "a Full-stack Developer",
    "an AI/ML Researcher",
    "a Qiskit Enthusiast ",
    "a Problem Solver",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const socials = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ayush2005soumya/",
      color: "from-gray-700 to-gray-600",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-chatterjee-9a4045299/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Mail",
      href: "mailto:sumichatt.35@gmail.com",
      color: "from-pink-500 to-rose-700",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* --- Hero Content --- */}
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span
              className={cn(
                "inline-block overflow-hidden align-bottom",
                "h-[2.5em] sm:h-[1.2em] md:h-[1.09em]"
              )}
            >
              <span
                key={index}
                className="block animate-slide-up text-primary italic"
              >
                {words[index]}
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A Full-stack developer with a passion for AI-ML, and Computer Vision.
            I create end-to-end solutions that blend powerful backends, intuitive
            UIs, and intelligent automation.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* --- Social Buttons --- */}
      <div className="absolute bottom-8 left-6 flex flex-col gap-3">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center rounded-full text-white shadow-lg overflow-hidden cursor-pointer",
              "bg-gradient-to-r",
              s.color
            )}
            initial={{ width: 40 }}
            whileHover={{ width: 120 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex items-center gap-2 px-3 py-2">
              {s.icon}
              <motion.span
                className="whitespace-nowrap text-sm font-medium"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {s.label}
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
