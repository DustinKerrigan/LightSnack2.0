import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // Ensure this state is defined
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`p-4 sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-red-600 text-white border-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl"><img src = 'homeLogo2.png' alt = "Logo" className = "h-14 w-auto"></img></div>
                <div className="hidden md:flex space-x-4">
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/about">About</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/services">Socials</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact">Contact</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact">NIL</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact">Programs</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact">Shop</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <svg className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {(isOpen) && (
                <div className="md:hidden"> {/*if the menu is open (mobile only) */}
                    <link className="block text-white p-2" to="/about">About</link>
                    <link className="block text-white p-2" to="/services">Social Media</link>
                    <link className="block text-white p-2" to="/contact">Contact</link>
                    <link className="block text-white p-2" to="/contact">NIL</link>
                    <link className="block text-white p-2" to="/contact">Programs</link>
                    <link className="block text-white p-2" to="/contact">Shop</link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;