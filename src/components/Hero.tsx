import image from "../assets/portfolioimage.png";
import MuraliResume from "../assets/MuraliResume.pdf";
import {
  FaGithub,
  FaProjectDiagram,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ isOpen }: { isOpen: boolean }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const text = "Hi, I am MURALI !";

  useEffect(() => {
    if (!textRef.current) return;

    // Create spans only once
    textRef.current.innerHTML = "";
    const spans = text.split("").map((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      if (i < 8) {
        span.className = "font-normal text-amber-700 font-serif italic";
      } else {
        span.className =
          "font-[Underdog] bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent";
      }
      textRef.current?.appendChild(span);
      return span;
    });

    // Create timeline that loops
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Fade in each character
    spans.forEach((span) => {
      tl.to(span, {
        opacity: 1,
        duration: 0.12,
        ease: "none",
      });
    });

    // Fade out all characters at once after a delay
    tl.to(
      spans,
      {
        opacity: 0,
        duration: 0,
        ease: "none",
      },
      "+=2",
    );

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] px-6 py-12 bg-gradient-to-r from-amber-100 to-amber-200 md:px-20 overflow-hidden w-full flex items-center justify-center">
      <div
        className={`z-49 fixed h-full w-full backdrop-blur-sm ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-12 w-full">
        <div className="flex flex-col space-y-6 text-center md:text-left md:w-1/2">
          <div className="space-y-4">
            <h1
              ref={textRef}
              className="text-4xl md:text-6xl font-bold inline-block"
            />
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-amber-800 font-semibold">
                Full Stack - Web Developer
              </p>
              <p className="text-lg md:text-xl text-amber-700">
                Crafting beautiful and functional web experiences
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="text-white btn bg-amber-800 border-none hover:bg-amber-700"
            >
              <FaProjectDiagram className="mr-2" />
              View Projects
            </a>
            <a
              href="https://github.com/tobioffice"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-none bg-[#24292e] hover:bg-[#2f363d] text-white"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="#contact"
              className="btn bg-white text-gray-700 border-none hover:bg-gray-100"
            >
              <FaEnvelope className="mr-2" />
              Contact Me
            </a>
            <a
              href={MuraliResume}
              download
              className="btn bg-white text-gray-700 border-none hover:bg-gray-100"
            >
              <FaFileDownload className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="absolute -inset-4 bg-amber-100 bg-gradient-to-r  blur-3xl rounded-full "></div>
          <img
            src={image}
            alt="Murali - Web Developer"
            className="relative w-72 h-72 md:w-[500px] md:h-[500px] object-cover mix-blend-normal"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
