import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative z-0">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto p-8">
                    <h2 className="text-6xl font-bold tracking-widest mb-16">
                        <span className="pb-4 border-b-4 border-red-600">CONTACT</span> US
                    </h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm">
                                    First Name <span className="text-red-600">*</span>
                                </label>
                                <input 
                                    type="text"
                                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm">
                                    Last Name <span className="text-red-600">*</span>
                                </label>
                                <input 
                                    type="text"
                                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">
                                E-mail <span className="text-red-600">*</span>
                            </label>
                            <input 
                                type="email"
                                placeholder="example@example.com"
                                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">
                                Message <span className="text-red-600">*</span>
                            </label>
                            <textarea 
                                rows="6"
                                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300"
                        >
                            SUBMIT
                        </button>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;