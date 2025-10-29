import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);

    // Auto scroll to about section after 3 seconds
    const scrollTimer = setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Tech Stack Icons */}
            <div className="flex gap-4">
              {/* Python Icon */}
              <div 
                className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-purple-500/30 hover:border-blue-400 shadow-lg hover:shadow-blue-500/50 group animate-bounce p-3"
                style={{ animationDelay: '0s' }}
                title="Python"
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="w-full h-full group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Django Icon */}
              <div 
                className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-purple-500/30 hover:border-green-400 shadow-lg hover:shadow-green-500/50 group animate-bounce p-3"
                style={{ animationDelay: '0.1s' }}
                title="Django"
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                  alt="Django"
                  className="w-full h-full group-hover:scale-110 transition-transform brightness-0 invert"
                />
              </div>

              {/* AI Icon */}
               <div 
                className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-purple-500/30 hover:border-blue-400 shadow-lg hover:shadow-blue-500/50 group animate-bounce p-3"
                style={{ animationDelay: '0s' }}
                title="AI"
              >
                <img 
                  src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg
          "
                  alt="Python"
                  className="w-full h-full group-hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white">Welcome To My</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent">
                  PortFolio Website
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mt-4">
                Creating stunning digital experiences with passion and precision
              </p>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-gray-700 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-gray-800">
              View Featured Project
            </button>
          </div>

          {/* Right Side - Profile Image with Circle */}
          <div 
            className={`flex justify-center items-center transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-75'
            }`}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-gray-600 animate-spin-slow blur-sm opacity-75" />
              
              {/* Second Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700 to-purple-600 animate-pulse" />
              
              {/* Inner Background Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-800" />
              
              {/* Profile Image Container - Positioned at top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-64 h-64 md:w-72 md:h-72">
                <div className="relative w-full h-full">
                  {/* Glowing effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-gray-600 rounded-full blur-xl opacity-50 animate-pulse" />
                  
                  {/* Image container with border */}
                  <div className="relative w-full h-full rounded-full border-4 border-purple-500/50 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                    {/* Replace this div with your actual image */}
                    <img 
                      src="/adithya-bg-removed.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                    {/* If you don't have an image yet, use this placeholder */}
                    {/* <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-purple-900 to-gray-900">
                      👨‍💻
                    </div> */}
                  </div>
                  
                  {/* Decorative elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-ping" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Optional: Floating particles */}
              <div className="absolute top-1/4 left-0 w-2 h-2 bg-purple-400 rounded-full animate-float" />
              <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-gray-400 rounded-full animate-float-delayed" />
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;