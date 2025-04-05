import image from "../assets/music-player.jpg";
import MuraliResume from "../assets/MuraliResume.pdf"
import { FaGithub, FaProjectDiagram, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ isOpen }: { isOpen: boolean }) => {
    const textRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const text = "Hi, I am MURALI !";

    const typeWriter = () => {
        if (!textRef.current) return null;

        const tl = gsap.timeline();
        textRef.current.innerHTML = '';

        const baseText = text.split('').map((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            if (i < 8) { // "Hi, I am" part
                span.className = 'font-normal text-amber-700 font-serif italic';
            } else { // "MURALI" part
                span.className = 'font-[Underdog] bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent';
            }
            textRef.current?.appendChild(span);
            return span;
        });

        baseText.forEach((span, _) => {
            tl.to(span, {
                opacity: 1,
                duration: 0.1,
                ease: "none",
            });
        });

        return tl;
    };

    const startAnimation = () => {
        const mainTimeline = gsap.timeline();
        const typewriterTl = typeWriter();

        if (typewriterTl) {
            mainTimeline.add(typewriterTl);
        }

        timelineRef.current = mainTimeline;

        // Repeat the entire sequence
        setTimeout(() => {
            if (textRef.current) {
                textRef.current.innerHTML = '';
            }
            startAnimation();
        }, 5000);
    };

    useEffect(() => {
        startAnimation();

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    return (
        <div className="relative min-h-[90vh] px-6 py-12 bg-gradient-to-r from-amber-100 to-amber-200 md:px-20 md:rounded-2xl overflow-hidden w-full flex items-center justify-center">
            <div className={`z-49 fixed h-full w-full backdrop-blur-sm ${isOpen ? "block" : "hidden"}`}></div>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-12 w-full">
                <div className="flex flex-col space-y-6 text-center md:text-left md:w-1/2">
                    <div className="space-y-4">
                        <h1
                            ref={textRef}
                            className="text-4xl md:text-6xl font-bold inline-block"
                        />
                        <div className="space-y-2">
                            <p className="text-2xl md:text-3xl text-amber-800 font-semibold">Web Developer</p>
                            <p className="text-lg md:text-xl text-amber-700">Crafting beautiful and functional web experiences</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#projects" className="btn bg-amber-800 border-none hover:bg-amber-700">
                            <FaProjectDiagram className="mr-2" />
                            View Projects
                        </a>
                        <a href="https://github.com/tobioffice" target="_blank" rel="noopener noreferrer"
                            className="btn border-none bg-[#24292e] hover:bg-[#2f363d] text-white">
                            <FaGithub className="mr-2" />
                            GitHub
                        </a>
                        <a href="#contact" className="btn bg-white text-gray-700 border-none hover:bg-gray-100">
                            <FaEnvelope className="mr-2" />
                            Contact Me
                        </a>
                        <a href={MuraliResume} download className="btn bg-white text-gray-700 border-none hover:bg-gray-100">
                            <FaFileDownload className="mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="absolute -inset-4 bg-amber-300/30 blur-2xl rounded-full"></div>
                    <img
                        src={image}
                        alt="Murali - Web Developer"
                        className="relative w-72 h-72 md:w-[500px] md:h-[500px] object-cover mix-blend-darken"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;