import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface NavBarProps {
  links: Array<{
    name: string;
    link: string;
  }>;
  toggleMenu: () => void;
  isOpen: boolean;
}

const NavBar = ({ links, toggleMenu, isOpen }: NavBarProps) => {
  return (
    <div className="navbar bg-gradient-to-r from-amber-100 to-amber-200 md:rounded-lg shadow-md h-[10vh] px-4 md:px-15 overflow-auto relative z-50 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-['Underdog']">
          Tobify
        </h1>
      </div>
      <div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-amber-800 hover:bg-white/80 text-lg font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:hidden">
          <button
            className="btn btn-ghost border-none text-amber-800 hover:text-amber-600 hover:bg-transparent"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <IoIosCloseCircleOutline size={28} />
            ) : (
              <CiMenuFries size={28} />
            )}
          </button>
          <ul
            className={`
                        z-50 mx-5
                        fixed top-[6vh] right-0
                        bg-gradient-to-r from-amber-100 to-amber-200
                        rounded-lg shadow-lg mt-10
                        p-4 w-[calc(100%-40px)]
                        transition-all duration-300 ease-in-out
                        transform origin-top-right
                        ${
                          isOpen
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }
                    `}
          >
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-2 text-amber-800 text-lg font-medium
                                    hover:bg-white/60 rounded-md transition-colors duration-200
                                    whitespace-nowrap text-center"
                  onClick={() => toggleMenu()}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
