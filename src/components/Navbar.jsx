import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 👈 NEW STATE

  const titles = ['ADITHYA', 'DEVELOPER', 'AI ENGINEER'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false); // 👈 Close menu after clicking a link
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl'
          : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo with Rolling Text */}
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-52 flex items-center overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap animate-pulse">
                    {titles[currentTitleIndex]}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm tracking-wider py-2 group ${
                  activeSection === item.toLowerCase() ? 'text-pink-400' : ''
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // 👈 Toggle
          >
            {mobileMenuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-gray-300 hover:text-pink-400 font-semibold tracking-wider transition-all ${
                  activeSection === item.toLowerCase() ? 'text-pink-400' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/50">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
