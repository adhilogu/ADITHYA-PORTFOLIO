import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Award, Briefcase, Code, Download, MessageCircle, Phone } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animation triggers both when entering AND leaving
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '-50px' // Add some offset
      }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/ADITHYA RESUMEpdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Adithya_L_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLetsTalk = () => {
    window.location.href = 'mailto:adithyaloganathan2004@gmail.com';
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 py-20 relative overflow-hidden">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Ensure animations reset when invisible */
        .opacity-0-no-anim {
          opacity: 0;
          transform: translateX(-100px);
        }

        .opacity-0-no-anim-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .opacity-0-no-anim-up {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gray-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0-no-anim-up'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Profile Image */}
          <div className={`flex justify-center items-center transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0-no-anim'
          }`}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-gray-600 animate-spin-slow blur-sm opacity-75" />
              
              {/* Second Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700 to-purple-600 animate-pulse" />
              
              {/* Inner Background Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-800" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-8">
                <div className="relative w-full h-full">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-gray-600 rounded-full blur-xl opacity-50 animate-pulse" />
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full border-4 border-purple-500/50 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                    <img 
                      src="/adithya-bg-removed.png"
                      alt="Adithya L - Full Stack Developer" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-ping" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-500 rounded-full animate-pulse" />
                  <div className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-float" />
                  <div className="absolute bottom-1/4 -right-8 w-5 h-5 bg-cyan-400 rounded-full animate-float-delayed" />
                </div>
              </div>

              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse-ring"></div>
              <div className="absolute inset-0 rounded-full border-2 border-gray-500/30 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0-no-anim-right'
          }`}>
            <div>
              <p className="text-purple-400 text-lg mb-2 font-semibold">Hello, It's Me</p>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-gray-300 bg-clip-text text-transparent mb-2">
                Adithya L
              </h3>
              <p className="text-xl md:text-2xl text-gray-400 mt-2">
                AI Engineer <span className="text-purple-400">&</span> Full-Stack Developer
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Dedicated and innovative developer with extensive experience in creating dynamic web applications and integrating 
              cutting-edge AI solutions. Proven ability to leverage Django, modern frontend technologies, and machine learning frameworks 
              to solve complex challenges and deliver exceptional user experiences. Passionate about building scalable, intelligent systems 
              that drive real-world impact.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L21 9L12 4L3 9L12 14Z" fill="currentColor" fillOpacity="0.3"/>
                    <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9V15.5C3 16.6 6.5 20 12 20C17.5 20 21 16.6 21 15.5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">B.E Information Science & Engineering</p>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="7" width="18" height="13" rx="2" fill="currentColor" fillOpacity="0.3"/>
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">2+ Years Professional Experience</p>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">10+ Successful Projects Delivered</p>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M8 7L3 12L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">20+ Technologies Mastered</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleLetsTalk}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="group px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-xl text-white font-semibold transition-all duration-300 border-2 border-purple-500/30 hover:border-purple-500 hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  <span>Download CV</span>
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/adhilogu"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-[#333] transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-purple-500 shadow-lg hover:shadow-purple-500/50"
              >
                <svg className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/adithya-loganathan-a47218283/?originalSubdomain=inl"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-blue-500 shadow-lg hover:shadow-blue-500/50"
              >
                <svg className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="mailto:adithyaloganathan2004@gmail.com"
                className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-pink-500 shadow-lg hover:shadow-pink-500/50"
              >
                <Mail className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="tel:+919943592806"
                className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-600 hover:to-emerald-600 transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-green-500 shadow-lg hover:shadow-green-500/50"
              >
                <Phone className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;