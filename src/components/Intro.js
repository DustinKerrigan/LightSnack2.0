import React from "react";
const Intro = () => {
    return (
        <>
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: `url('/slide4.JPG')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white/30 z-0"></div>

        <div className="relative z-10">
        <div className ="pt-24">
        <section class="bg-transparent dark:bg-gray-900 relative z-0">
            <div class="container px-6 py-8">
                <h1 className="text-3xl font-bold text-center mb-12">Welcome</h1>

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
                <div className="max-w-6xl mx-auto p-8">
                    <div className="relative flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2 relative">
                            <img 
                                src="slide1.PNG" 
                                alt="Light Snack" 
                                className="w-full h-full object-cover rounded-lg shadow-xl"
                            />
                            <h2 className="absolute -right-[16rem] -top-2 text-6xl font-bold tracking-widest z-10">
                            <span className="pb-4 border-b-4 border-red-600">ABOUT</span> US
                            </h2>
                        </div>
        
                        <div className="md:w-1/2 space-y-6 md:pt-32">        
                            <p className="text-gray-600 leading-relaxed text-lg mt-16">
                                Welcome to Light Snack, a brand that represents overcoming obstacles in life. We believe that any goal, big or small, can be accomplished when looked at as a "Light Snack" - something easily manageable and within reach. Our company was founded by Cristian Orth, a former Division 1 football player, turned endurance athlete. At Light Snack, we understand that life is full of challenges, whether it be in the form of physical goals or other aspirations. However, we believe that these obstacles can be tackled and overcome when viewed as a Light Snack. That is why we aim to inspire and motivate individuals to reach their full potential by embracing the idea of Light Snacking. Whether you're looking for workout gear, nutrition tips, or just some motivation to get started, Light Snack has got you covered. So, grab a snack, and let's get started on your journey to reaching your full potential!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-12">
                        <div className="w-24 h-2 bg-red-600"></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </div>
        </div>
        </>
    );
}

export default Intro;