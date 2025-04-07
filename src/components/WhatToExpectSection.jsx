import React from "react";

function WhatToExpectSection() {
  return (
    <section id="about" className="bg-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <div className="md:w-2/3 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What should you expect?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Docport hosts a variety of features that aim to make your life easier
              and provide a better overview of all of your logistics processes
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-[#4EBA94] text-white px-6 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <img
              src="https://docport.co/assets/images/landingpage/DesktopandApp.png"
              alt="Desktop and App"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Desktop and App</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              creating and tracking shipments has never been this easy. everything can be done with
              a simple link share
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://docport.co/assets/images/landingpage/Documents.png"
              alt="Documents"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Documents</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              at docport we generate documents like CMR for you and make them easily accessible
              whenever, wherever
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://docport.co/assets/images/landingpage/Analytics.png"
              alt="Analytics"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              docport dashboard provides a comprehensive overview of all of your processes by
              visualising your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToExpectSection;
