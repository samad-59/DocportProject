import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WhatToExpectSection from './components/WhatToExpectSection';
import DocPortFeatures from './components/DocPortFeatures';
import ContactSection from './components/ContactSection';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify'; // ✅ Import ONCE
import 'react-toastify/dist/ReactToastify.css';  // ✅ Import ONCE

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <FeaturesSection />
              <WhatToExpectSection />
              <DocPortFeatures />
              <ContactSection />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
