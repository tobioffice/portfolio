import { FaTelegram, FaGithub, FaGlobe } from "react-icons/fa";
import botLogo from "../assets/NbkristBotLogo.png";
import webLogo from "../assets/NbkristWeb.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // First card animation
      gsap.from(firstCardRef.current, {
        scrollTrigger: {
          trigger: firstCardRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // Second card animation with delay
      gsap.from(secondCardRef.current, {
        scrollTrigger: {
          trigger: secondCardRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-800 mb-2 font-[Underdog]">
            Projects
          </h2>
          <p className="text-amber-700">
            Showcasing my latest work and experiments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {/* NbkristQik Project Card */}
          <div
            ref={firstCardRef}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={botLogo}
                    alt="NbkristQik Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-amber-800 mb-1">
                    NbkristQik
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://t.me/nbkristqik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm"
                    >
                      <FaTelegram />
                      <span>Try Bot</span>
                    </a>
                    <a
                      href="https://github.com/tobioffice/NbkristQik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-3">
                  A Telegram bot designed to help students quickly check their
                  attendance and mid-term marks. Streamlines the process of
                  accessing academic information, making it more convenient for
                  students to stay updated with their academic progress.
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-amber-700 mb-1">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-0.5">
                    <li>Quick attendance check</li>
                    <li>Mid-term marks viewing</li>
                    <li>Easy-to-use interface</li>
                    <li>24/7 availability</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-amber-700 mb-1">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "TypeScript",
                    "Cheerio",
                    "LibSQL",
                    "node-telegram-bot-api",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* NbkristWeb Project Card */}
          <div
            ref={secondCardRef}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={webLogo}
                    alt="NbkristWeb Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-amber-800 mb-1">
                    NbkristWeb
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://tobioffice.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm"
                    >
                      <FaGlobe />
                      <span>Visit Site</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-3">
                  A comprehensive web platform that extends the functionality of
                  NbkristQik bot with advanced features like activity tracking,
                  detailed statistics, and a personalized dashboard for each
                  student.
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-amber-700 mb-1">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-0.5">
                    <li>User authentication system</li>
                    <li>Personalized dashboard</li>
                    <li>Activity tracking & analytics</li>
                    <li>Detailed statistics visualization</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-amber-700 mb-1">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "JavaScript",
                    "Express",
                    "React.js",
                    "Cheerio",
                    "PostgreSQL",
                    "JWT",
                    "Bcrypt",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
