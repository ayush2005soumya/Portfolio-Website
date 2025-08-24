import { ThemeToggle } from "../components/ThemeToggle";
import { Starbackground} from "@/components/Starbackground";
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
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */ }
                <ThemeToggle />
            {/* Background Effect*/ }
                <Starbackground />
            {/* navbar */ }
                <Navbar />
            {/*Main Content */ }
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <EducationSection />
                    <ContactSection />
                </main>
            {/*Footer */ }
            <Footer />
        </div>
    );
};