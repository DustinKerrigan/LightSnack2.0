import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, ShoppingCart } from 'lucide-react';

const Programs = () => {
  const [activeSection, setActiveSection] = useState(null); //state for the dropdown menus

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const programs = [
    {
      title: "Strength",
      description: "Strength brought to you by Light Snack.",
      planTitle: "Plan:",
      resources: [
        { name: "Light Snack Lifting Program", file: "Light Snack 10 Week Lifting Program2.pdf" }
      ]
    },
    {
      title: "4 Mile",
      description: "Professional plan to prepare you for your next event.",
      planTitle: "Plan:",
      resources: [
        { name: "Light Snack 4 Mile Program", file: "Light Snack 4 Mile Running Program.pdf" }
      ]
    },
    {
      title: "Hybrid",
      description: "Maintaining your strength while staying in shape.",
      planTitle: "Workout schedule:",
      resources: [
        { name: "Light Snack Hybrid Program", file: "Light Snack 6 Week Hybrid Program2.pdf" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4 rounded-b-lg">
        <div className="flex items-center justify-start">
          <a 
            href="https://lightsnack.net/" 
            className="text-white hover:text-gray-300 transition-colors mr-4"
            aria-label="Home"
          >
            <Home size={24} />
          </a>
          <a 
            href="https://lightsnack.net/shop.html" 
            className="text-white hover:text-gray-300 transition-colors mr-6"
            aria-label="Shop"
          >
            <ShoppingCart size={24} />
          </a>
          <h1 className="text-2xl font-medium">Light Snack Programs</h1>
        </div>
      </header>

      {/* Main Container with Background */}
      <div 
        className="min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/modernLogo.PNG')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="w-full max-w-4xl space-y-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              {/* Section Header */}
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                  {program.title}
                </h2>
                <div className="text-gray-600 group-hover:text-red-600 transition-all duration-300">
                  {activeSection === index ? (
                    <ChevronUp size={24} className="transform rotate-0" />
                  ) : (
                    <ChevronDown size={24} className="transform rotate-0" />
                  )}
                </div>
              </div>

              {/* Expandable Details */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSection === index 
                    ? 'max-h-96 opacity-100 mt-6' 
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">
                      {program.planTitle}
                    </p>
                    
                    <ul className="space-y-2">
                      {program.resources.map((resource, resourceIndex) => (
                        <li key={resourceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                          <a 
                            href={resource.file}
                            className="text-blue-600 hover:text-red-600 hover:underline transition-colors text-sm font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;