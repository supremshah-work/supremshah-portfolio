function GlowOrbs({ variant = "hero" }) {
  const presets = {
    hero: {
      left: "bg-blue-400/15 dark:bg-blue-500/20",
      right: "bg-violet-400/15 dark:bg-violet-500/20",
      size: "w-96 h-96",
      blur: "blur-3xl",
    },

    skills: {
      left: "bg-cyan-300/10 dark:bg-cyan-500/10",
      right: "bg-pink-300/10 dark:bg-pink-500/10",
      size: "w-[500px] h-[500px]",
      blur: "blur-3xl",
    },

    contact: {
      left: "bg-blue-300/20 dark:bg-blue-500/20",
      right: "bg-purple-300/20 dark:bg-purple-500/20",
      size: "w-80 h-80",
      blur: "blur-2xl",
    },
  };

  const p = presets[variant];

  return (
    <>
      <div
        className={`absolute pointer-events-none rounded-full animate-pulse ${p.size} ${p.blur} -left-20 top-20 ${p.left}`}
      />
      <div
        className={`absolute pointer-events-none rounded-full animate-pulse ${p.size} ${p.blur} -right-20 bottom-20 ${p.right}`}
      />
    </>
  );
}

export default GlowOrbs;
