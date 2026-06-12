import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Explore" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-3"
    >
      <div
        className="
          mt-3 md:mt-4

          px-3 md:px-6
          py-2 md:py-3

          rounded-full
          backdrop-blur-xl
          border

          shadow-[0_0_30px_rgba(0,0,0,0.05)]
          dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]

          flex gap-3 md:gap-6

          text-xs sm:text-sm md:text-base

          transition-colors duration-300

          bg-white/70 text-black border-black/10
          dark:bg-white/5 dark:text-white dark:border-white/10

          max-w-[95vw]
          overflow-x-auto
          scrollbar-hide
        "
      >
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="
              relative
              px-1 md:px-2
              py-1
              whitespace-nowrap
              transition
              hover:text-blue-400
              dark:hover:text-blue-300
            "
          >
            {link.label}

            {active === link.id && (
              <motion.div
                layoutId="activeIndicator"
                className="
                  absolute
                  left-0 right-0 -bottom-1
                  h-0.5
                  bg-blue-500
                  dark:bg-blue-400
                  rounded-full
                "
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
