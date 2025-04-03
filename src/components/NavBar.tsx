import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-between items-center p-4 relative h-[10vh]">
            <div>
                <h1 className="text-2xl font-bold">My App</h1>
            </div>
            <div className={`
                    absolute right-0 top-0 mt-15 mx-5
                    w-[calc(100%-2.5rem)]
                    flex flex-col items-center
                    bg-green-500 text-white
                    rounded-2xl p-5 gap-2 shadow-lg
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
                    md:static md:flex-row
                    md:bg-transparent md:text-gray-800
                    md:shadow-none md:p-0 md:m-0
                    md:gap-0 md:translate-0 md:opacity-100
                `}>
                <a href="#" className="hover:bg-green-600 p-4 rounded-lg w-full">Home</a>
                <a href="#" className="hover:bg-green-600 p-4 rounded-lg w-full">Products</a>
                <a href="#" className="hover:bg-green-600 p-4 rounded-lg w-full">Blog</a>
                <a href="#" className="hover:bg-green-600 p-4 rounded-lg w-full">Portfolio</a>
            </div>
            <div className="flex">
                <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <IoIosCloseCircleOutline size={25} /> : <CiMenuFries size={25} />}
                </button>
            </div>
        </div>
    );
};

export default NavBar;