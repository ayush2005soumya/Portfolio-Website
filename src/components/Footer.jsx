import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling 300px (beyond hero section)
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border mt-10 relative">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ayush Chatterjee. All rights reserved.
        </p>
      </div>

      {/* Sticky Back to Top Button (only shows after scroll) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full shadow-lg bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          <ArrowUp />
        </button>
      )}
    </footer>
  );
};
