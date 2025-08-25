import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const highlights = [
    { id: 1, title: "1", description: "Internship(s) Completed" },
    { id: 2, title: "6+", description: "Live Projects on Github" },
    { id: 3, title: "3", description: "Years in B.Tech (CSE @NIT Durgapur)" },
    {
      id: 4,
      title: "200+",
      description:
        "Problems Solved on Leetcode and GeeksForGeeks combined",
    },
  ];

  const details = [
    {
      id: 1,
      role: "Frontend Development",
      company: "Freelance",
      duration: " May 2023 - Ongoing",
      description:
        "Learning to build responsive UIs using React, Tailwind, and Framer Motion. Improved page performance by 20% through optimized components.",
      skills: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
      logo: null, 
    },
    {
      id: 2,
      role: "AI and Machine Learning Intern",
      company: "Edunet Foundation (with IBM SkillsBuild)",
      duration: " June 2025 – July 2025 ",
      description:
        "Completed a 6-week internship on Artificial Intelligence & Machine Learning. Developed an Employee Salary Prediction Web App powered by a custom ML model. Built and deployed a Flask-based REST API for serving predictions.",
      skills: ["ML", "React", "PostgreSQL"],
      logo: "/assets/edunetlogo.png", 
    },
    {
      id: 3,
      role: "ML Research Project – Anemia Detection",
      company: "NIT Durgapur",
      duration: " December 2024 – Present",
      description:
        "Designed and trained deep learning models to predict Hemoglobin levels from palm videos. Worked on preprocessing, evaluation, and visualization using Python and PyTorch. Maintained GitHub repo for tracking results and code.",
      skills: ["Python", "TensorFlow", "PyTorch"],
      logo: "/assets/nitdgplogo.png",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      {/* --- Section Heading --- */}
      <div className="container max-w-6xl mx-auto text-center z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-3">
          Career highlights & detailed roles.
        </p>
      </div>

      {/* --- Highlight Cards (Small, Grid Col-4) --- */}
      <div className="container max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {highlights.map((h, i) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="gradient-border card-hover p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-3xl font-bold text-primary">{h.title}</h3>
            <p className="text-foreground mt-2">{h.description}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Detailed Experience Cards (Big, Grid Col-3) --- */}
      <div className="container max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {details.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="gradient-border card-hover p-6 rounded-xl bg-card shadow-md hover:shadow-xl transition flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-8 h-8 rounded object-contain"
                />
              ) : (
                <Briefcase className="w-6 h-6 text-primary" />
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
            </div>
            <h4 className="font-medium text-muted-foreground mb-2">
              {exp.company}{" "}
              <span className="italic text-muted-foreground">
                ({exp.duration})
              </span>
            </h4>
            <p className="text-foreground mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
