import ScrollReveal from "../components/ScrollReveal";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import GlowOrbs from "../components/GlowOrbs";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        flex items-center justify-center
        px-6 py-24 md:py-28
scroll-mt-24
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* subtle background glow */}
      <GlowOrbs variant="contact" />
      <div className="max-w-5xl w-full relative z-10">
        <ScrollReveal type="down">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">Let's Connect</h2>

            <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Currently open to freelance opportunities, frontend development
              projects, and collaborative work.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* EMAIL CARD */}
          <ScrollReveal type="left" delay={0.1}>
            <a
              href="mailto:your@email.com"
              className="
                group
                block
                rounded-2xl
                border border-black/10 dark:border-white/10
                backdrop-blur-md

                p-8

                hover:-translate-y-1
                hover:scale-[1.02]

                hover:border-blue-500/30
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    p-4 rounded-xl
                    bg-black/5 dark:bg-white/10
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <FaEnvelope className="text-2xl text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Email</p>

                  <h3 className="text-xl font-semibold">your@email.com</h3>
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* LINKEDIN CARD */}
          <ScrollReveal type="left" delay={0.2}>
            <a
              href="#"
              className="
                group
                block
                rounded-2xl
                border border-black/10 dark:border-white/10
                backdrop-blur-md

                p-8

                hover:-translate-y-1
                hover:scale-[1.02]

                hover:border-blue-500/30
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    p-4 rounded-xl
                    bg-black/5 dark:bg-white/10
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <FaLinkedin className="text-2xl text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">LinkedIn</p>

                  <h3 className="text-xl font-semibold">View Profile</h3>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center mt-12 text-sm text-zinc-500">
            Thank you for visiting my portfolio.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
