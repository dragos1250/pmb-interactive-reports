import { useEffect, useState } from "react";
import logo from "../assets/logo-blue-b.png";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("darkMode") === "true";
        setDarkMode(saved);
        document.documentElement.classList.toggle("dark", saved);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-[#1a202c]/80 backdrop-blur-md shadow-md rounded-full px-6 py-3 w-[95%] flex justify-between items-center transition-all">

            {/* Stânga: logo și text */}
            <div className="flex items-center space-x-2 font-bold text-xl">
                <img src={logo} alt="Logo Primăria" className="h-10 w-auto" />
                <div className="leading-[1.1rem] text-[#266E99] dark:text-white">
                    <div>Primăria</div>
                    <div>Capitalei</div>
                </div>
            </div>

            {/* Meniu desktop */}
            <ul className="hidden md:flex space-x-6 text-[#266E99] dark:text-gray-200 font-medium transition-opacity duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2">
                <li>{/* Butonul Acasă */}
                    <a
                        href="https://www.pmb.ro/"
                        rel="noopener noreferrer"
                        className="relative inline-block transition-colors duration-300 hover:text-[#266E99] dark:hover:text-gray-200
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
              after:w-0 after:h-[2px] after:bg-[#266E99] dark:after:bg-gray-200
              after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Acasă
                    </a>
                </li>
                <li>{/* Butonul Hartă Sesizări */}
                    <a
                        href="/harta"
                        className="relative inline-block transition-colors duration-300 hover:text-[#266E99] dark:hover:text-gray-200
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
              after:w-0 after:h-[2px] after:bg-[#266E99] dark:after:bg-gray-200
              after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Hartă sesizări
                    </a>
                </li>
                <li>{/* Butonul Contact */}
                    <a
                        href="#contact"
                        className="relative inline-block transition-colors duration-300 hover:text-[#266E99] dark:hover:text-gray-200
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
              after:w-0 after:h-[2px] after:bg-[#266E99] dark:after:bg-gray-200
              after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Dreapta: toggle & hamburger */}
            <div className="flex items-center gap-3">
                {/* Toggle dark mode */}
                <label className="relative inline-flex items-center cursor-pointer w-14 h-8 shrink-0">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <div
                        className={`w-14 h-8 rounded-full flex items-center justify-between px-1
              ${darkMode ? "bg-blue-900" : "bg-blue-200"} transition-colors`}
                    >
                        <span className="text-white text-sm">{darkMode ? "🌙" : ""}</span>
                        <span className="text-yellow-500 text-sm">{!darkMode ? "☀" : ""}</span>
                    </div>
                    <div
                        className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform
              ${darkMode ? "translate-x-6" : "translate-x-0"}`}
                    ></div>
                </label>

                {/* Buton hamburger - doar pe mobil */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Deschide meniul">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#266E99] dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Meniu mobil */}
            {menuOpen && (
                <div
                    className={`absolute top-full right-4 mt-3 bg-white dark:bg-[#1f2937] shadow-lg rounded-xl p-4 space-y-4 md:hidden
                    font-medium flex flex-col transform transition-all ease-out duration-300 origin-top ${menuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}

                >
                    <a
                        href="https://www.pmb.ro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline text-[#266E99] dark:text-white hover:text-[#266E99] dark:hover:text-gray-200 transition-colors duration-300
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%]
    after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100
    after:bg-[#266E99] dark:after:bg-gray-200
    after:transition-transform after:duration-300 after:origin-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Acasă
                    </a>
                    <a
                        href="/harta"
                        className="relative inline text-[#266E99] dark:text-white hover:text-[#266E99] dark:hover:text-gray-200 transition-colors duration-300
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%]
    after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100
    after:bg-[#266E99] dark:after:bg-gray-200
    after:transition-transform after:duration-300 after:origin-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Hartă sesizări
                    </a>
                    <a
                        href="#contact"
                        className="relative inline text-[#266E99] dark:text-white hover:text-[#266E99] dark:hover:text-gray-200 transition-colors duration-300
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%]
    after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100
    after:bg-[#266E99] dark:after:bg-gray-200
    after:transition-transform after:duration-300 after:origin-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>


            )}
        </nav>
    );
}

export default Navbar;
