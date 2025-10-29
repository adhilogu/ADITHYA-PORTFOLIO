import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;