import { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import GlowOrbs from "../components/GlowOrbs";

function Hero() {
  const roles = ["Learner.", "Builder.", "Explorer.", "Developer."];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let timeout;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="
  relative
    min-h-[80vh] md:min-h-screen

    flex flex-col justify-center

    px-5 md:px-6

    pt-24 md:pt-0
   pb-0

    scroll-mt-24

    overflow-hidden

    bg-white text-black
    dark:bg-black dark:text-white

    transition-colors duration-500
"
    >
      <GlowOrbs variant="hero" />

      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-center">
          Hi, I'm Suprem
        </h1>

        <ScrollReveal delay={0.15}>
          <div className="mt-6 flex justify-center items-center text-lg sm:text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 min-h-10">
            <span>I am a&nbsp;</span>

            <span className="inline-block w-[10ch] text-left font-semibold text-violet-500">
              {text}
            </span>
          </div>
        </ScrollReveal>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto text-center px-2">
          I’m a frontend developer learning React by building interactive UI
          experiences that feel smooth and intentional.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.45}>
        <div className="flex justify-center mt-2 md:mt-0">
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              mt-8 px-6 py-3 rounded-xl font-semibold transition hover:scale-105
              bg-black text-white dark:bg-white dark:text-black
            "
          >
            Let’s talk
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Hero;
