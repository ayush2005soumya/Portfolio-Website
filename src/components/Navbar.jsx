import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Starbackground } from "@/components/Starbackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/ExperienceSection";

export const Home = () => {
  // currentView keys: "home" (initial), "about", "skills", "projects", "experience", "education", "contact"
  const [currentView, setCurrentView] = useState("home");

  const sectionMap = {
    home: HeroSection,
    about: AboutSection,
    skills: SkillsSection,
    projects: ProjectsSection,
    experience: ExperienceSection,
    education: EducationSection,
  };

  const SelectedSection = sectionMap[currentView] || HeroSection;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <Starbackground />
      {/* navbar - pass handler */}
      <Navbar onNavigate={(viewKey) => setCurrentView(viewKey)} />
      {/* Main Content */}
      <main>
        {currentView === "contact" ? (
          // show ONLY ContactSection when Contact is chosen
          <ContactSection />
        ) : (
          // otherwise show the selected "hero" area (dynamic) + common ContactSection
          <>
            <SelectedSection />
            <ContactSection />
          </>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
