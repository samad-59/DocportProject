import React from "react";
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-16 md:py-24"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

function HeroText() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        Increase your productivity with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">docport</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        docport brings all of your logistics processes into one place, helps you keep an eye on everything at all times and makes it easier to see the big picture.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button
          onClick={() => navigate('/signup')}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-green-500"
        >
          Sign In
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
          <p className="text-gray-600">Enterprise-grade security for your data</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
          <p className="text-gray-600">Lightning-fast document processing</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">🌐 Global</h3>
          <p className="text-gray-600">Access from anywhere, anytime</p>
        </div>
      </div>
    </div>
  );
}

function HeroImage() {
  const heroImage = "https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=740&t=st=1709033125~exp=1709033725~hmac=e6d9c9e7df7a28c706c4707cd09d5d3c4a5c61c5c0487f6b4c5f60ebc0f7c58f";
  return (
    <div className="w-full lg:w-1/2">
      <img 
        src={heroImage}
        alt="Hero" 
        className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}

export default HeroSection;
