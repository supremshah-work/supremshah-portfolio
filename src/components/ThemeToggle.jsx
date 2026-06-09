import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    const isDark = saved === "dark";

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkState = !dark;

    if (newDarkState) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setDark(newDarkState);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 md:p-2.5
        rounded-full

        bg-white/10 dark:bg-white/10
        backdrop-blur-md
        border border-white/10 dark:border-white/10

        hover:scale-110
        transition

        shadow-sm
      "
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}

export default ThemeToggle;
