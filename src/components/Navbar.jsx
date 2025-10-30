import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Skills", key: "skills" },
  { name: "Projects", key: "projects" },
  { name: "Experience", key: "experience" },
  { name: "Education", key: "education" },
  { name: "Contact", key: "contact" },
];

export const Navbar = ({ onNavigate = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, key) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // call parent handler
    onNavigate(key);
    // optionally scroll to top when switching views
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-background",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero" onClick={(e) => handleNavClick(e, "home")}>
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ayush Chatterjee</span> Portfolio
          </span>
        </a>

        {/* desktop version */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              onClick={(e) => handleNavClick(e, item.key)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => handleNavClick(e, item.key)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
