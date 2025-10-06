import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { Links } from "./constants/links";
import { useMenuToggle } from "./hooks/useMenuToggle";

function App() {
  const { isOpen, toggleMenu } = useMenuToggle();

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

export default App;
