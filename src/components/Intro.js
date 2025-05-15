import React from "react";
/*https://themesbrand.com/zooki/layout/index-1.html*/
const Intro = () => {
    return (
        
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10">
                <h1 class="w-48 h-4 mx-auto dark:bg-gray-700 text-center">Welcome to Light Snack</h1>

                <p class="w-64 h-2 mx-auto mt-4 dark:bg-gray-700 text-center">"Our mission at Light Snack is to create a powerful fitness brand while revolutionizing the world of healthy snacks and supplements."</p>
                <br></br>
                <br></br>
                <br></br>
                <div class ='flex justify-end'>
                <p class="text-right p-8">About Paragraph</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">Test</div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">NIL</div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">Shop</div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;