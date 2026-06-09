import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative px-6 py-10 pb-20
scroll-mt-24
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
        overflow-hidden
      "
    >
      <div className="absolute w-`75` h-175 bg-blue-300/10 dark:bg-blue-500/10 blur-3xl rounded-full -left-52 top-20" />
      <div className="absolute w-175 h-175 bg-purple-300/10 dark:bg-purple-500/10 blur-3xl rounded-full -right-52 bottom-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">Interaction Lab</h2>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A collection of interactive UI systems and motion experiments.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <GlowCard />
          <CursorPhysicsCard />
        </div>
      </div>
    </section>
  );
}

function GlowCard() {
  const ref = useRef(null);

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const smoothPos = useRef({ x: 50, y: 50 });

  const [ripples, setRipples] = useState([]);
  const trailTimer = useRef(null);

  const [, setTick] = useState(0);

  useEffect(() => {
    let frame;

    const animate = () => {
      smoothPos.current.x += (pos.x - smoothPos.current.x) * 0.08;
      smoothPos.current.y += (pos.y - smoothPos.current.y) * 0.08;

      setTick((t) => t + 1);

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [pos]);

  const createRipple = (x, y) => {
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1200);
  };

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });

    if (e.buttons === 1) {
      if (!trailTimer.current) {
        createRipple(x, y);

        trailTimer.current = setTimeout(() => {
          trailTimer.current = null;
        }, 60);
      }
    }
  };

  const handleClick = () => {
    createRipple(smoothPos.current.x, smoothPos.current.y);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onClick={handleClick}
      className="
        relative h-96 md:h-130 rounded-3xl
        border border-white/10
        overflow-hidden
        backdrop-blur-md
        shadow-[0_0_80px_rgba(0,0,0,0.15)]
        dark:shadow-[0_0_100px_rgba(147,51,234,0.25)]
      "
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${smoothPos.current.x}% ${smoothPos.current.y}%,
              rgba(0,140,255,0.22),
              rgba(147,51,234,0.16),
              transparent 22%
            )
          `,
        }}
      />

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: "80px",
            height: "80px",
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(0,140,255,0.45), rgba(147,51,234,0.25), transparent 70%)",
            filter: "blur(10px)",
            animation: "waterRipple 1200ms ease-out forwards",
          }}
        />
      ))}

      <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
        <h3 className="text-lg md:text-2xl font-semibold">
          Liquid Light Surface
        </h3>

        <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Interactive light surface where movement and touch generate fluid
          energy waves.
        </p>
      </div>
    </div>
  );
}

function CursorPhysicsCard() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const target = useRef({ x: 200, y: 200 });

  useEffect(() => {
    let frame;

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.12,
        y: prev.y + (target.current.y - prev.y) * 0.12,
      }));

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <div
      onMouseMove={handleMove}
      className="
        relative h-96 md:h-130 rounded-3xl
        border border-white/10
        overflow-hidden
        backdrop-blur-md
        shadow-[0_0_80px_rgba(0,0,0,0.12)]
        cursor-none
      "
    >
      <div className="absolute inset-0 p-4 md:p-8 space-y-3 md:space-y-4 opacity-40">
        <div className="h-4 w-2/3 bg-white/5 rounded" />
        <div className="h-4 w-1/2 bg-white/5 rounded" />
        <div className="h-4 w-3/4 bg-white/5 rounded" />
      </div>

      <div
        className="absolute w-10 h-10 rounded-full bg-blue-500 blur-sm pointer-events-none"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
        <h3 className="text-lg md:text-2xl font-semibold">
          Cursor Physics Layer
        </h3>
        <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Spring-based cursor motion constrained inside UI container.
        </p>
      </div>
    </div>
  );
}

export default Projects;
