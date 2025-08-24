import { motion } from "framer-motion";

export const EducationSection = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "National Institute of Technology, Durgapur",
      duration: "August 2023-Ongoing(Expected 2027)",
      description:
        "Currently pursuing my undergraduate degree, focusing on CS Fundamentals, full-stack development, AI/ML, and Computer Vision.",
      area_of_study:
        "Algorithm Design and Analysis, OOPs, TOC, Digital Logic and Computer Architecture, OS, DBMS, Computer Networks, Compiler Design etc.",
      cg: "9.30 (Till 4th Semester)",
      logo: "./src/assets/7Gxpwk01.svg",
    },
    {
      title: "Higher Secondary Education",
      institution:
        "Baranagore Ramakrishna Mission Ashrama High School(WBCHSE)",
      duration: "April 2021-April 2023",
      description: "Specialized in Science with PCMB subject combination",
      area_of_study: "Physics, Chemistry, Mathematics, Biology",
      cg: "93% (465 out of 500)",
      logo: "./src/assets/bTWBcQ01.svg",
    },
    {
      title: "Secondary Education",
      institution:
        "Baranagore Ramakrishna Mission Ashrama High School(WBBSE)",
      duration: "January 2011-April 2021",
      description:
        "Completed secondary education with strong academic performance in STEM subjects.",
      area_of_study:
        "Mathematics, Physical and Life Sciences, Languages(1st:Bengali, 2nd: English), Geography,History",
      cg: "94.85% (664 out of 700)",
      logo: "./src/assets/bTWBcQ01.svg",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/30 transform -translate-x-1/2"></div>

          <div className="space-y-0">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Empty spacer for alignment */}
                <div className="hidden md:block w-1/2"></div>

                {/* Dot Animation */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-20 h-20 bg-white rounded-full border-4 border-background flex items-center justify-center shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <img src={edu.logo} alt="logo" className="w-12 h-12" />
                </motion.div>

                {/* Card Animation */}
                <motion.div
                  className="w-full md:w-1/2 p-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="gradient-border p-6 card-hover bg-card rounded-lg shadow-lg">
                    <h4 className="font-semibold text-lg">{edu.title}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.duration}
                    </p>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <p className="text-muted-foreground">
                      <span className="text-primary font-medium">
                        Subjects Studied:{" "}
                      </span>
                      {edu.area_of_study}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary font-medium">
                        CGPA/Percentage:{" "}
                      </span>
                      {edu.cg}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
