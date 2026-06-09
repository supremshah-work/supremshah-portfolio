import Navbar from "./components/Navbar";
// import Cursor from "./components/Cursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

function App() {
  return (
    <div
      className="
        min-h-screen
        
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
        overflow-x-hidden
      "
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="relative">
          <Navbar />

          <div className="absolute right-3 top-3 md:right-5 md:top-4 z-60">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* pages */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
