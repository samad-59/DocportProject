import React from "react";

function HeroSection() {
  return (
    <section
      id="home" // 🔹 ID added for internal navigation
      className="bg-[#f3f8f7] px-8 py-24 flex flex-col-reverse md:flex-row items-center justify-between"
    >
      <HeroText />
      <HeroImage />
    </section>
  );
}

function HeroText() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
        Increase your
        productivity<br />
        with <span className="text-[#4eac82]">docport</span>
      </h1>
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        docport brings all of your logistics processes into one place, helps you keep an eye on everything at all times and makes it easier to see the big picture
      </p>
      <div className="flex items-center space-x-6">
        <button className="bg-[#4eac82] hover:bg-green-600 text-white px-6 py-3 rounded text-lg">Find out more</button>
        <button className="flex items-center space-x-2 text-gray-600 text-lg">
          <span className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center">
            ▶
          </span>
          <span>view more</span>
        </button>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="w-full md:w-1/2 mb-10 md:mb-0">
      <img src="https://docport.co/assets/images/landingpage/landinghome.png" alt="Hero" className="w-full h-auto max-h-[300px] object-contain" />
    </div>
  );
}

export default HeroSection;
