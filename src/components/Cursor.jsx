import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: clicked ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none mix-blend-difference z-9999"
    />
  );
}

export default Cursor;
