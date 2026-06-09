import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import {
  FaLightbulb,
  FaEye,
  FaMagic,
  FaRocket,
  FaSeedling,
} from "react-icons/fa";

function About() {
  const items = [
    {
      icon: <FaLightbulb className="text-yellow-400 text-lg" />,
      title: "I Like Building Things",
      text: "I enjoy combining visual design and code to create complete experiences.",
    },
    {
      icon: <FaEye className="text-blue-400 text-lg" />,
      title: "I Value Clarity",
      text: "I focus on layouts that are simple, clear, and easy to navigate.",
    },
    {
      icon: <FaMagic className="text-purple-400 text-lg" />,
      title: "I Notice The Details",
      text: "I enjoy polishing the small things that make a product feel complete.",
    },
    {
      icon: <FaRocket className="text-green-400 text-lg" />,
      title: "Always Improving",
      text: "I'm always exploring new tools and better approaches.",
    },
    {
      icon: <FaSeedling className="text-emerald-400 text-lg" />,
      title: "One Project at a Time",
      text: "Every project is an opportunity to improve.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // autoplay (stable loop)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const activeIndex = ((index % items.length) + items.length) % items.length;

  return (
    <section
      id="about"
      className="
        flex items-center justify-center
        px-6 py-2 md:py-4
scroll-mt-24
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 md:gap-12">
        {/* LEFT */}
        <div className="md:w-[60%]">
          <ScrollReveal type="left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              About Me
            </h2>

            <p className="mt-6 text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm interested in the intersection of design and development,
              where good ideas become practical experiences.
            </p>

            <p className="mt-4 text-sm md:text-base text-zinc-500 dark:text-zinc-500 leading-relaxed">
              I enjoy creating interfaces that are clear, responsive, and
              enjoyable to use.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["React", "JavaScript", "Tailwind CSS", "UI Design"].map((t) => (
                <span
                  key={t}
                  className="
                    px-4 py-2 rounded-full
                    bg-black/5 dark:bg-white/10 hover:scale-110 hover:shadow-lg dark:hover:shadow-white/10 transition-all
                    text-sm
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT */}
        <div className="md:w-[40%]">
          <ScrollReveal type="right">
            <div className="relative h-72 flex items-center overflow-hidden isolate px-4">
              {items.map((item, i) => {
                const position =
                  ((i - activeIndex + items.length) % items.length) -
                  Math.floor(items.length / 2);

                const isActive = position === 0;

                return (
                  <motion.div
                    key={i}
                    className="absolute left-2 right-2"
                    initial={false}
                    animate={
                      ready
                        ? {
                            y: position * 110,
                            scale: isActive ? 1.03 : 0.9,
                            opacity: isActive ? 1 : 0.4,
                            zIndex: isActive ? 10 : 1,
                          }
                        : {}
                    }
                  >
                    <ReelItem item={item} active={isActive} />
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ReelItem({ item, active }) {
  return (
    <div
      className={`
        w-full
        px-6 py-6
        rounded-xl
        border border-black/10 dark:border-white/20
        backdrop-blur-md
        transition-all duration-700
        ${active ? "opacity-100 shadow-lg" : "opacity-40"}
      `}
    >
      <div className="flex items-center gap-3">
        <h3 className="text-xl md:text-3xl font-semibold">{item.title}</h3>
        <div className="text-lg">{item.icon}</div>
      </div>

      <p className="text-xs md:text-sm mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {item.text}
      </p>
    </div>
  );
}

export default About;
