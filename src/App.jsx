import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import WhatToExpectSection from './components/WhatToExpectSection'
import DocPortFeatures from './components/DocPortFeatures'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <>
        
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhatToExpectSection />
      <DocPortFeatures />
      <ContactSection />

    </>
  )
}

export default App