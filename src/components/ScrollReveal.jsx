import { motion } from "framer-motion";

const variants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  type = "up",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={variants[type]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
