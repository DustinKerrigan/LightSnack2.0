import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid';
/*https://themesbrand.com/zooki/layout/index-1.html*/
const Intro = () => {
    return (
        
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10">
                <h1 className="text-3xl font-bold text-center mb-12">Welcome to Light Snack</h1>

                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">"Our mission at Light Snack is to create a powerful fitness brand while revolutionizing the world of healthy snacks and supplements."</p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-black">
                            <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center"> 
                                <img src = 'dk.JPG' alt = "Logo" className = "w-full h-full object-cover object-center"></img>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">Dustin Kerrigan</h3>
                                <p className="text-sm text-gray-500 font-medium mt-1">Software Engineer Intern</p>
                            </div>
                            <p className="text-center text-gray-600 text-sm">
                                Computer Science student at the University of North Florida.
                            </p>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-black">
                            <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center"> 
                                <img src = 'dontFold2.JPG' alt = "Logo" className = "w-full h-full object-cover object-center"></img>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">Cristian Orth</h3>
                                <p className="text-sm text-gray-500 font-medium mt-1">Founder & CEO</p>
                            </div>
                            <p className="text-center text-gray-600 text-sm">
                                Student, Coach, and Founder of Light Snack.
                            </p>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-black">
                            <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center"> 
                                <img src = 'dontFold1.JPG' alt = "Logo" className = "w-full h-full object-cover object-center"></img>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">Jordan Haynes</h3>
                                <p className="text-sm text-gray-500 font-medium mt-1">Designer</p>
                            </div>
                            <p className="text-center text-gray-600 text-sm">
                                University of Florida graduate with a passion for art and fitness.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;