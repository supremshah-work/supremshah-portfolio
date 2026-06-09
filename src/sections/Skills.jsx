import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { FaReact, FaJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import GlowOrbs from "../components/GlowOrbs";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
    { name: "Framer", icon: <SiFramer className="text-pink-400 text-5xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  ];

  const [angle, setAngle] = useState(0);

  const isDragging = useRef(false);
  const lastX = useRef(0);

  const baseSpeed = 0.1;
  const speed = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    let frame;

    const animate = () => {
      speed.current += velocity.current;

      velocity.current *= 0.92;

      speed.current += (0 - speed.current) * 0.02;

      const finalSpeed = baseSpeed + speed.current;

      setAngle((prev) => {
        const next = prev + finalSpeed;

        if (next > 100000) {
          return next - 100000;
        }

        return next;
      });

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;

    const centerY = window.innerHeight / 2;
    const mouseFactor = (e.clientY - centerY) / centerY;

    velocity.current = delta * 0.01 * (1 + mouseFactor);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const radiusX =
    typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 350;
  const radiusY =
    typeof window !== "undefined" && window.innerWidth < 768 ? 170 : 120;

  return (
    <section
      id="skills"
      className="
        relative min-h-[90vh] md:min-h-screen
        flex flex-col items-center justify-center
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
        overflow-hidden
      "
    >
      <GlowOrbs variant="skills" />
      <ScrollReveal type="down">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Tools I Use</h2>
      </ScrollReveal>

      <div className="absolute text-center z-10 px-4">
        <p className="text-base md:text-xl text-zinc-500">For Creating</p>
        <h3 className="text-xl md:text-3xl font-semibold">
          Modern Web Experiences
        </h3>
      </div>

      <div
        className="relative
  w-full max-w-100
  h-95 md:h-80
  cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {skills.map((skill, index) => {
          const baseAngle = (360 / skills.length) * index + angle;
          const rad = (baseAngle * Math.PI) / 180;

          // FIXED ORBIT (NEVER CHANGES)
          const x = Math.cos(rad) * radiusX;
          const y = Math.sin(rad) * radiusY;

          const normalizedY = y / radiusY;
          const scale = 0.75 + normalizedY * 0.25;

          return (
            <div
              key={skill.name}
              className="
                absolute left-1/2 top-1/2
                w-24 h-24 md:w-36 md:h-32
                flex flex-col items-center justify-center
                text-center
                rounded-xl
                border border-black/10 dark:border-white/20
                backdrop-blur-md
                hover:scale-101
                hover:z-50
              "
              style={{
                transform: `
                  translate(${x}px, ${y}px)
                  translate(-50%, -50%)
                  scale(${scale})
                `,
                zIndex: Math.floor(scale * 10),
              }}
            >
              <div className="mb-1 md:mb-2 scale-75 md:scale-100">
                {skill.icon}
              </div>

              <p className="text-xs md:text-lg font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
