import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); //this is the state for the mobile menu
    const [isScrolled, setIsScrolled] = useState(false); //state for pc menu
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
        <nav className={`p-4 fixed top-0 w-full transition-colors duration-300 z-50 ${isScrolled ? 'bg-red-600 text-white border-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {/* Logo section */}
                <div className="w-full md:w-auto flex justify-between items-center">
                    <a href="#welcome">
                        <img src='homeLogo2.png' alt="Logo" className="h-10 md:h-14 w-auto" />
                    </a>
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden text-current p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-4">
                    <a
                        className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                        ${isScrolled 
                            ? 'text-white hover:text-black after:bg-black' 
                            : 'text-black hover:text-red-600 after:bg-red-600'
                        }`}
                        href="#about-section"
                    >
                        About
                    </a>
                    <a
                        className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                        ${isScrolled 
                            ? 'text-white hover:text-black after:bg-black' 
                            : 'text-black hover:text-red-600 after:bg-red-600'
                        }`}
                        href="#contact-section"
                    >
                        Contact
                    </a>
                    <Link
                        className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                            ${isScrolled 
                            ? 'text-white hover:text-black after:bg-black' 
                            : 'text-black hover:text-red-600 after:bg-red-600'
                            }`}
                        to="/nil"
                        >
                        NIL
                    </Link>
                    <Link
                        className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                            ${isScrolled 
                            ? 'text-white hover:text-black after:bg-black' 
                            : 'text-black hover:text-red-600 after:bg-red-600'
                            }`}
                        to="/programs"
                        >
                        Programs
                    </Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/shop"><i className="fas fa-shopping-cart text-xl"></i></Link>
                </div>

                {/* Mobile navigation dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-white w-full rounded-lg shadow-lg"> 
                        <a 
                            className="block text-black hover:bg-red-600 hover:text-white p-4 transition-colors duration-200" 
                            href="#about-section"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a 
                            className="block text-black hover:bg-red-600 hover:text-white p-4 transition-colors duration-200" 
                            href="#contact-section"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                        <Link 
                            className="block text-black hover:bg-red-600 hover:text-white p-4 transition-colors duration-200" 
                            to="/nil"
                            onClick={() => setIsOpen(false)}
                        >
                            NIL
                        </Link>
                        <Link 
                            className="block text-black hover:bg-red-600 hover:text-white p-4 transition-colors duration-200" 
                            to="/programs"
                            onClick={() => setIsOpen(false)}
                        >
                            Programs
                        </Link>
                        <Link 
                            className="block text-black hover:bg-red-600 hover:text-white p-4 transition-colors duration-200" 
                            to="/shop"
                            onClick={() => setIsOpen(false)}
                        >
                            <i className="fas fa-shopping-cart text-xl"></i>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;