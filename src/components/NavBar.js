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
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl"><a href="#welcome"><img src = 'homeLogo2.png' alt = "Logo" className = "h-14 w-auto"></img></a></div>
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
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact">Programs</Link>
                    <Link className={`font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 
                    ${isScrolled 
                        ? 'text-white hover:text-black after:bg-black' 
                        : 'text-black hover:text-red-600 after:bg-red-600'
                    }`} to="/contact"><i className="fas fa-shopping-cart text-xl"></i></Link>
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
                <div className="md:hidden"> {/*if the menu is open (mobile only, may need to enhance this) */}
                    <Link className="block text-white p-2" to="/about">About</Link>
                    <Link className="block text-white p-2" to="/contact">Contact</Link>
                    <Link className="block text-white p-2" to="/nil">NIL</Link>
                    <Link className="block text-white p-2" to="/contact">Programs</Link>
                    <Link className="block text-white p-2" to="/contact"><i className="fas fa-shopping-cart text-xl"></i></Link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;