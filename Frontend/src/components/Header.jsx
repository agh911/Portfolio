import React from 'react'

export default function Header({ isDarkMode, toggleTheme }) {
    return (
        <nav className={`${isDarkMode ? 'dark' : 'light'} fixed w-full z-20 top-0 start-0 bg-customBg/60 backdrop-blur-sm`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-headline np-font">AG</span>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-sm md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-sm md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block text-headline py-2 px-3" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block text-headline py-2 px-3">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="block text-headline py-2 px-3">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="block text-headline py-2 px-3">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="block text-headline py-2 px-3">Contact</a>
                        </li>
                        <li>
                            <button onClick={toggleTheme} className="p-2">
                                {isDarkMode ? <img src="https://img.icons8.com/?size=100&id=648&format=png&color=FFFFFF" alt="Sun" className="h-6 w-6" /> : <img src="https://img.icons8.com/?size=100&id=11377&format=png&color=000000" alt="Moon" className="h-6 w-6" />}
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
