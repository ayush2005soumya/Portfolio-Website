import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaJava,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiExpress,
  SiOpencv,
  SiCnn,
  SiGooglecolab,
  SiJupyter
} from "react-icons/si";
import { GiArtificialIntelligence, GiProcessor } from "react-icons/gi";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { name: "React Developer", icon: <FaReact className="text-sky-400 text-6xl" /> },
  { name: "Python Developer", icon: <FaPython className="text-yellow-400 text-6xl" /> },
  { name: "Backend Developer", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  { name: "AI/ML Researcher", icon: <GiArtificialIntelligence className="text-purple-400 text-6xl" /> },
  { name: "C/C++ Programmer", icon: <SiCplusplus className="text-blue-400 text-6xl" /> },
];

const fullSkillset = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "React", icon: <FaReact className="text-sky-400" />, level: 80 },
      { name: "Next.js (Learning)", icon: <SiNextdotjs />, level: 50 },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 75 },
      { name: "Framer Motion",icon:<TbBrandFramerMotion />, level: 70 },
      { name: "GSAP (Learning)", level: 40 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
      { name: "Express.js",icon: <SiExpress className="text-blue-500" />, level: 80 },
      { name: "REST API", level: 75 },
      { name: "Authentication & JWT", level: 60 },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: <SiC className="text-blue-500" />, level: 85 },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" />, level: 90 },
      { name: "Python", icon: <FaPython className="text-yellow-400" />, level: 85 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
      { name: "Java (Learning)", icon: <FaJava className="text-red-500" />, level: 40 },
      { name: "MIPS", level: 65 },
      { name: "Verilog", level: 68 },
      { name: "Shell", level: 60 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <FaDatabase className="text-blue-600" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" />, level: 75 },
      { name: "MongoDB (Learning)", icon: <SiMongodb className="text-green-600" />, level: 50 },
    ],
  },
  {
    category: "ML & AI",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" />, level: 90 },
      { name: "Keras", icon: <SiKeras className="text-red-500" />, level: 85 },
      { name: "PyTorch", icon: <SiPytorch className="text-red-600" />, level: 70 },
      { name: "OpenCV",icon: <SiOpencv  />, level: 85 },
      { name: "CNN",icon: <SiCnn  />, level: 90 },
      { name: "LSTM", level: 85 },
      { name: "Vision Transformer", level: 65 },
      { name: "Data Preprocessing", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git/GitHub", icon: <FaGithub />, level: 85 },
      { name: "VS Code", icon:<FaCode />, level: 90 },
      { name: "Google Colab",icon:<SiGooglecolab className="text-amber-300"/>, level: 80 },
      { name: "Jupyter Notebook",icon:<SiJupyter className="text-orange-600"/>, level: 85 },
      { name: "Render/Vercel", level: 70 },
    ],
  },
  {
    category: "Computer Fundamentals",
    items: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Operating Systems", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Computer Organization & Architecture", icon: <GiProcessor />, level: 80 },
      { name: "Theory of Computation", level: 95 },
      { name: "Compiler (Learning)", level: 50 },
      { name: "Computer Networks (Learning)", level: 50 },
    ],
  },
];

export const SkillsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(fullSkillset[0].category);

  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Preview Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="group flex flex-col items-center justify-center bg-card rounded-3xl shadow-lg w-40 h-52 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="text-5xl group-hover:animate-bounce">{skill.icon}</div>
              <p className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary p-5">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="pt-8">
          <button onClick={() => setShowModal(true)} className="cosmic-button">
            View Full Skillset
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl shadow-lg max-w-5xl w-full p-8 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-primary">Full Skillset</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                >
                  ✕
                </button>
              </div>

              {/* Tabs */}
<div className="flex overflow-x-auto gap-3 mb-6 pb-2 no-scrollbar">
  {fullSkillset.map((cat) => (
    <button
      key={cat.category}
      onClick={() => setActiveCategory(cat.category)}
      className={`px-5 py-2 rounded-full whitespace-nowrap font-medium border transition
        ${
          activeCategory === cat.category
            ? "bg-primary text-white border-primary"
            : "bg-transparent text-gray-950 dark:text-gray-200 border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
    >
      {cat.category}
    </button>
  ))}
</div>



              {/* Active Category Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                {fullSkillset
                  .filter((cat) => cat.category === activeCategory)
                  .flatMap((cat) => cat.items)
                  .map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col bg-secondary/30 p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon && <span className="text-2xl">{item.icon}</span>}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {/* Progress Bar */}
                      {item.level && (
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-primary h-2 rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

