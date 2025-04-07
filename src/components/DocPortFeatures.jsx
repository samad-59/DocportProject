import React from 'react';

const DocPortFeatures = () => {
  const features = [
    "Overview of all of your processes",
    "Easily usable",
    "Unlimited partners",
    "Simple document management",
    "Integrations"
  ];

  return (
    <div id="benefits" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-white gap-x-10">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">DocPort gives you:</h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-green-500 mr-3 text-xl">✔️</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://docport.co/assets/images/landingpage/benefits.png"
          alt="DocPort Preview"
          className="rounded-2xl shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default DocPortFeatures;
