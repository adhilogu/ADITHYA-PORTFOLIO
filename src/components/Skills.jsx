import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Cpu, Smartphone, Settings } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend & Frameworks",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Linux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "AI", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Machine Learning", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Deep Learning", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "AWS", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Cloud Computing", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "React", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Native", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "DevOps", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "CI/CD", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Git", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", level: 87, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 py-20 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fadeInUp {
          from { 
            transform: translateY(50px); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }

        @keyframes scaleInBounce {
          0% { 
            transform: scale(0.5); 
            opacity: 0; 
          }
          50% { 
            transform: scale(1.05); 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }

        @keyframes slideInFromLeft {
          from { 
            transform: translateX(-100px); 
            opacity: 0; 
          }
          to { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }

        @keyframes slideInFromRight {
          from { 
            transform: translateX(100px); 
            opacity: 0; 
          }
          to { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }

        @keyframes progressFill {
          from { 
            width: 0%; 
            opacity: 0;
          }
          to { 
            width: var(--progress-width); 
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleInBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-in-left {
          animation: slideInFromLeft 0.7s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInFromRight 0.7s ease-out forwards;
        }

        .animate-progress {
          animation: progressFill 1.5s ease-out forwards;
        }

        .opacity-0-no-anim-up {
          opacity: 0;
          transform: translateY(50px);
        }

        .opacity-0-no-anim-scale {
          opacity: 0;
          transform: scale(0.5);
        }

        .skill-card-enter {
          opacity: 0;
          transform: translateX(-100px);
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0-no-anim-up'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 text-xl mt-4">
            Expertise across the full technology stack
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const delay = categoryIndex * 150;
            
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  isVisible 
                    ? 'animate-scale-in' 
                    : 'opacity-0-no-anim-scale'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`${isVisible ? 'animate-slide-in-left' : 'skill-card-enter'}`}
                        style={{ 
                          animationDelay: `${delay + 200 + (skillIndex * 150)}ms`,
                          opacity: isVisible ? 1 : 0
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2 group">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-7 h-7 object-contain"
                              style={{ 
                                filter: skill.name === 'CI/CD' ? 'invert(1)' : 'none' 
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                              <span className={`text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {skill.level}%
                              </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${category.color} ${isVisible ? 'animate-progress' : ''}`}
                                style={{ 
                                  '--progress-width': `${skill.level}%`,
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  animationDelay: `${delay + 400 + (skillIndex * 150)}ms`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-80 animate-float-delayed" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Skills;