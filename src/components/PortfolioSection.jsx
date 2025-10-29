import React, { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = ['All', 'AI/ML', 'Web Dev', 'Mobile', 'Robotics', 'Full Stack'];

  const projects = [
    {
      id: 1,
      title: 'RFID Attendance System',
      shortDescription: 'Automated attendance tracking system using RFID technology with real-time database integration.',
      fullDescription: 'Automated attendance tracking system using RFID technology with real-time database integration and analytics dashboard. Features include instant attendance marking, comprehensive reporting, and seamless integration with existing systems.',
      category: 'Web Dev',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      image: '/rfid.png',
      status: 'Completed',
      github: 'https://github.com/adhilogu/RFID-ATTENDANCE-SYSTEM',
      gradient: 'from-cyan-400 to-blue-500',
      gradientColors: '#22d3ee, #3b82f6'
    },
    {
      id: 2,
      title: 'Online Chatbot Ticketing System',
      shortDescription: 'AI-powered chatbot for automated ticket generation and resolution (SIH 2024).',
      fullDescription: 'AI-powered chatbot for automated ticket generation and resolution with natural language processing capabilities. Built for Smart India Hackathon 2024, featuring multilingual support, automated responses, and intelligent ticket routing system.',
      category: 'AI/ML',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ],
      image: '/chatbot.png',
      status: 'Completed',
      github: 'https://github.com/adhilogu/online_chatbot_ticketing_system',
      gradient: 'from-purple-400 to-pink-500',
      gradientColors: '#c084fc, #ec4899'
    },
    {
      id: 3,
      title: 'Food Ordering Website',
      shortDescription: 'Full-stack food ordering platform with real-time order tracking and payment integration.',
      fullDescription: 'Full-stack food ordering platform with real-time order tracking, payment integration, and restaurant management system. Features include cart management, order history, delivery tracking, and comprehensive admin dashboard.',
      category: 'Web Dev',
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" }
      ],
      image: '/food.png',
      status: 'Completed',
      github: 'https://github.com/adhilogu/cafe',
      gradient: 'from-orange-400 to-red-500',
      gradientColors: '#fb923c, #ef4444'
    },
    {
      id: 4,
      title: 'Group Discussion Portal',
      shortDescription: 'Interactive platform for conducting group discussions with real-time collaboration.',
      fullDescription: 'Interactive platform for conducting group discussions with real-time collaboration, video conferencing, and moderation tools. Built with WebRTC for seamless video communication and Socket.io for real-time messaging.',
      category: 'Full Stack',
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ],
      image: '/group.png',
      status: 'Completed',
      github: 'https://github.com/adhilogu/smart_group_discussion_portal',
      gradient: 'from-green-400 to-emerald-500',
      gradientColors: '#4ade80, #10b981'
    },
    {
      id: 5,
      title: 'Amazon ML Challenge 2025',
      shortDescription: 'Machine learning solution for product categorization and recommendation system.',
      fullDescription: 'Machine learning solution for product categorization and recommendation system using deep learning algorithms. Implemented advanced NLP and computer vision techniques for product analysis and intelligent recommendations.',
      category: 'AI/ML',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" }
      ],
      image: '/amazon.png',
      status: 'Completed',
      github: 'https://github.com/balaji2k423/AMAZON_ML_2025',
      gradient: 'from-yellow-400 to-orange-500',
      gradientColors: '#facc15, #fb923c'
    },
    {
      id: 6,
      title: 'Robocon 2024',
      shortDescription: 'Autonomous robot design and development for international robotics competition.',
      fullDescription: 'Autonomous robot design and development for international robotics competition with advanced navigation and control systems. Implemented computer vision, sensor fusion, and autonomous decision-making algorithms.',
      category: 'Robotics',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "RaspberryPi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" }
      ],
      image: '/robocon.png',
      status: 'Completed',
      github: 'https://github.com/adhilogu',
      gradient: 'from-indigo-400 to-purple-500',
      gradientColors: '#818cf8, #a855f7'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Full Stack'
    ? projects.filter(project => project.category === 'Full Stack')
    : projects.filter(project => project.category === activeFilter || (activeFilter === 'Web Dev' && project.category === 'Full Stack') || (activeFilter === 'Mobile' && project.category === 'Full Stack'));

  return (
    <section ref={sectionRef} id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 py-20 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .flip-card {
          width: 300px;
          height: 450px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }
      `}} />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Portfolio <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-300 text-xl mt-4 max-w-3xl mx-auto">
            Explore my journey through innovative projects and technical achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flip-card ${isVisible ? 'fade-in-scale' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="flip-card-inner"
                style={{
                  transform: hoveredCard === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div 
                    className="relative w-full h-full gradient-border"
                  >
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-lg overflow-hidden">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}></div>
                      </div>

                      {/* Project Info */}
                      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{
                          background: `linear-gradient(135deg, ${project.gradientColors})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'brightness(1.2) contrast(1.1)'
                        }}>
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {project.shortDescription}
                        </p>
                        
                        {/* Tech Stack Preview */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <div 
                              key={i}
                              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/50 rounded-full border border-purple-500/20"
                            >
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span className="text-xs text-gray-300">{tech.name}</span>
                            </div>
                          ))}
                          {project.technologies.length > 3 && (
                            <div className="flex items-center px-2.5 py-1 bg-gray-800/50 rounded-full border border-purple-500/20">
                              <span className={`text-xs bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}>
                                +{project.technologies.length - 3}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* GitHub Icon Hint */}
                        <div className="absolute top-4 right-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center shadow-lg opacity-80`}>
                            <Github className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back">
                  <div 
                    className="relative w-full h-full gradient-border"
                  >
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-lg p-5 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{
                        background: `linear-gradient(135deg, ${project.gradientColors})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* All Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/50 rounded-full border border-purple-500/20"
                          >
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                            <span className="text-xs text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* GitHub Button */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default PortfolioSection;