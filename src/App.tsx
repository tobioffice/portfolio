import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { useState } from "react";


function App() {

  const Links = [
    { name: "Home", link: "#" },
    { name: "projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar links={Links} toggleMenu={toggleMenu} isOpen={isOpen} />
      <Hero isOpen={isOpen} />
      <div className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Projects />
        </div>
      </div>
      <ContactMe />
    </>
  );
}

export default App
