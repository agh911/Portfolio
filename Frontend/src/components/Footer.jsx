import React from 'react'

export default function Footer({ isDarkMode }) {
    return (
        <footer className={`${isDarkMode ? 'dark' : 'light'} bg-customBg pb-15 rounded-sm`}>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-headline text-2xl font-semibold whitespace-nowrap np-font">AG</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:underline me-4 md:me-6">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">&copy; 2024 <span className="np-font">
                    AG</span>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
