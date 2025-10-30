import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:adhilogu2004@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 py-20 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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

        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
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

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

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

        .opacity-0-no-anim-scale {
          opacity: 0;
          transform: scale(0.8);
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0-no-anim-up'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 text-xl mt-4">
            Let's collaborate on your next innovative project 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0-no-anim'
          }`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm always excited to work on innovative projects and collaborate with talented individuals. 
                Whether you have a project idea, want to discuss opportunities, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:adhilogu2004@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors break-all"
                    >
                      adhilogu2004@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-pink-400 font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Mettupalayam, Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/adhilogu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-[#333] transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-purple-500 shadow-lg hover:shadow-purple-500/50"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/adithya-loganathan-a47218283/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-blue-500 shadow-lg hover:shadow-blue-500/50"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-pink-500 shadow-lg hover:shadow-pink-500/50"
                >
                  <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="mailto:adhilogu2004@gmail.com"
                  className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-purple-500/30 hover:border-pink-500 shadow-lg hover:shadow-pink-500/50"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0-no-anim-right'
          }`}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/80 rounded-xl text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/80 rounded-xl text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-900/80 rounded-xl text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;