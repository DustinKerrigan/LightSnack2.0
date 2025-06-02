import React from "react";
const Intro = () => {
    return (
        <>
        <div className ="pt-24">
        <section class="bg-transparent dark:bg-gray-900 relative z-0">
            <div class="container px-6 py-8">
                <h1 className="text-3xl font-roboto text-center mb-12">Welcome</h1>

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
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative z-0">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto border-2 border-gray-200 rounded-lg p-8 bg-white shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-8 relative">
                        About Light Snack
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></div>
                    </h2>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2">
                                <img 
                                    src="modernLogo.PNG" 
                                    alt="Light Snack" 
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    Your about paragraph goes here. This section will include a smooth transition
                                    and modern layout with responsive design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default Intro;