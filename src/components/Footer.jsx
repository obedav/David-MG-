import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/obedav", 
      label: "GitHub",
      color: "hover:bg-slate-700"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:info@davidmakinde.com", 
      label: "Email",
      color: "hover:bg-green-600"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#personal-projects" },
    { label: "Client Work", href: "#client-work" },
    { label: "Skills", href: "#tech-stack" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Application Development",
    "Full-Stack Development",
    "Frontend Development",
    "Backend API Development",
    "E-commerce Solutions",
    "AWS Cloud Solutions"
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>

      <footer 
        ref={footerRef}
        className="bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <div className={`lg:col-span-2 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    David Makinde-George
                  </span>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                  Professional web developer creating scalable solutions that drive real business results. 
                  From personal applications to client success stories, I bring ideas to life through code.
                </p>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${200 + index * 100}ms` }}
                        title={social.label}
                      >
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '400ms' }}>
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: `${600 + index * 50}ms` }}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const element = document.getElementById(link.href.slice(1));
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '600ms' }}>
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li 
                      key={index}
                      className={`text-slate-400 text-sm transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 50}ms` }}
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-slate-800 py-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-slate-400 text-sm mb-4 md:mb-0">
                  <span>© 2025 David Makinde-George. Built with React & Tailwind CSS.</span>
                </div>
                
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <span>Available for new projects</span>
                  <div className="flex items-center space-x-1">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                    <span>in Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
      </footer>
    </>
  );
};

export default Footer;