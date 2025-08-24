import { useState } from "react";
import { ExternalLink, ArrowRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Featured Projects
const projects = [
  {
    id: 1,
    title: "Employee Salary Predictor",
    description:
      "A web app for employee salary prediction using supervised learning, developed using PERN Stack.",
    image: "/Projects/Employee.png",
    tags: ["Python", "Flask", "REST", "ML", "React", "Node", "PostgreSQL"],
    demoUrl: "http://157.230.236.76",
    github: "https://github.com/ayush2005soumya/ml-employee-salary-predictor",
  },
  {
    id: 2,
    title: "Id Based Attendance Tracker System",
    description:
      "An Attendance tracker built using python, tkinter, openCV and EasyOCR.",
    image: "/Projects/ID based attendance tracker.png",
    tags: ["Python", "Tkinter", "OpenCV", "EasyOCR"],
    demoUrl:
      "https://drive.google.com/file/d/1d5UV-56si_BipIPBpJNvTwg3Cv2YxgTp/view?usp=sharing",
    github:
      "https://github.com/ayush2005soumya/ID-Based-Attendance-Tracker-System",
  },
  {
    id: 3,
    title: "Triangle Visualizer",
    description:
      "Built an interactive web tool that renders triangles from side lengths, classifies them by type and angle, and enables draggable protractors for real-time angle measurement.",
    image: "/Projects/Triangle.png",
    tags: ["TypeScript", "React", "Framer Motion"],
    demoUrl: "https://kyv9j2.csb.app/",
    github: "https://github.com/ayush2005soumya/Triangle-Visualizer",
  },
];

// More Projects
const moreProjects = [
  {
    id: 4,
    title: "Dice Game",
    description:
      "A simple web-based dice game built with HTML, CSS, and JavaScript. Players can roll the dice and see the results in real-time, with a fun and interactive user interface.",
    image: "/Projects/DICEGAME.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ayush2005soumya.github.io/Dice-Game/vsComp.html",
    github: "https://github.com/ayush2005soumya/Dice-Game",
  },
  {
    id: 5,
    title: "MyOPL-My Own Programming Language",
    description:
      "MyOPL is a simple interpreted programming language implemented in Python. It supports variables, functions, control flow, and modern data structures such as lists, dictionaries, sets, and tuples.",
    image: "/Projects/MyOPL.png",
    tags: ["Python", "Interpreter Design"],
    demoUrl:
      "https://drive.google.com/file/d/1_zpcz5JNDFHkuoH5PzcJ3bxXb-z_TfaJ/view?usp=drive_link",
    github: "https://github.com/ayush2005soumya/MyOPL-python",
  },
  {
    id: 6,
    title: "Google GenAI Intensive Course 2025 Capstone Project",
    description:
      "A customer support agent that implements JSON file generation, few shot prompting for query understanding and Embed and Search Customer Queries (Vector Search) using PyTorch..",
    image: "/Projects/GenAI_capstone.png",
    tags: ["Python", "PyTorch", "Machine Learning"],
    demoUrl:
      "https://github.com/ayush2005soumya/Gen-AI-Intensive-Course-2025-Capstone-Project-Customer-Support-Agent/blob/main/CAPSTONE%20PROJECT/gen-ai-intensive-course-capstone-customer-support.ipynb",
    github:
      "https://github.com/ayush2005soumya/Gen-AI-Intensive-Course-2025-Capstone-Project-Customer-Support-Agent/tree/main",
  },
  {
    id: 7,
    title: "AI Virtual Painter",
    description:
      "A computer vision-based Virtual Painter that allows users to draw on the screen using hand gestures. Developed with OpenCV and MediaPipe, it enables color selection, drawing, and erasing without physical contact.",
    image: "/Projects/AI_painter.jpeg",
    tags: ["Python", "OpenCV", "Mediapipe"],
    demoUrl:
      "https://drive.google.com/file/d/1xqGx6to3c3r_ZwouPXC9AxgQbDkg3SWK/view?usp=drive_link",
    github: "https://github.com/ayush2005soumya/Virtual-Painter-using-OpenCV",
  },
  {
    id: 8,
    title: "CIFAR10 Image Classification",
    description:
      " Implemented a CNN model using pytorch and Conv2D on Google Colab platform to classify images of 10 different classes.",
    image: "/Projects/CIFAR10_Project_IMG.png",
    tags: ["Python", "PyTorch", "Image Classification", "CNN"],
    demoUrl:
      "https://github.com/ayush2005soumya/CIFAR10-Image-Classification/blob/main/CIFAR10Pytorch.ipynb",
    github:
      "https://github.com/ayush2005soumya/CIFAR10-Image-Classification",
  },
  {
    id: 9,
    title: "Brick Breaker Game",
    description:
      "An addictive brick breaker arcade game where you skillfully control a paddle to bounce a ball, smash through colorful rows of bricks, rack up points with each successful hit, and strive to clear the board while carefully managing your limited lives to keep the game going.",
    image: "/Projects/Brick.png",
    tags: ["C++", "SDL3", "Game Development"],
    demoUrl:
      "https://drive.google.com/file/d/11rk_lkMEXUw3KXHsZhP4z1qLxO1SCHHt/view?usp=sharing",
    github: "https://github.com/ayush2005soumya/Brick-Breaker-Game",
  },
];

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance and user experience.
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="text-center mt-12 flex flex-col sm:flex-row  gap-5 pt-4 justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="cosmic-button w-fit flex items-center gap-2"
          >
            View More Projects <ArrowRight size={16} />
          </button>
          <a
            href="https://github.com/ayush2005soumya/"
            target="_blank"
            className="cosmic-button w-fit flex items-center "
          >
            GitHub Profile <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal for More Projects */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-background text-foreground rounded-2xl shadow-2xl p-6 w-[95%] md:w-[80%] lg:w-[75%] max-h-[95vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setShowMore(false)}
                className="absolute top-4 right-4 text-foreground/60 hover:text-primary"
              >
                <X size={24} />
              </button>

              <motion.h3
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                More <span className="text-primary">Projects</span>
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {moreProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Reusable ProjectCard
const ProjectCard = ({ project }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>

      <div className="flex space-x-3">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          <ExternalLink size={20} />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);
