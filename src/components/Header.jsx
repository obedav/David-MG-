import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section tracking
      const sections = ['hero', 'about', 'personal-projects', 'client-work', 'tech-stack', 'certifications', 'aws-journey', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'personal-projects', label: 'Projects' },
    { id: 'client-work', label: 'Client Work' },
    { id: 'tech-stack', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
        : 'bg-white/70 backdrop-blur-md border-b border-slate-200/30'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          
          {/* Animated Logo - Responsive sizing */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex flex-col items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-bold text-xs sm:text-sm leading-none">D</span>
                <span className="text-white font-bold text-[10px] sm:text-xs leading-none">M-G</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl opacity-20 group-hover:scale-110 transition-all duration-500"></div>
            </div>
            
            {/* Responsive text sizing - Shorter on tablets */}
            <span className="text-sm lg:text-lg xl:text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-orange-500 transition-all duration-500">
              <span className="lg:hidden xl:inline">David Makinde-George</span>
              <span className="hidden lg:inline xl:hidden">D. Makinde-George</span>
            </span>
          </div>

          {/* Navigation Container with better flex management */}
          <div className="flex items-center space-x-2 lg:space-x-4 flex-1 justify-end">
            
            {/* Tablet & Desktop Navigation - Show from xl (1280px) and up */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm 2xl:text-base font-medium transition-all duration-300 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50/50 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Compact Navigation for Tablets and Large Phones (640px - 1279px) */}
            <nav className="hidden sm:flex xl:hidden items-center space-x-0.5 lg:space-x-1 flex-1 justify-center max-w-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs lg:text-sm font-medium transition-all duration-300 hover:text-blue-600 px-1 lg:px-2 py-2 rounded-md hover:bg-blue-50/50 whitespace-nowrap ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {/* Show shortened labels for iPad and similar */}
                  {item.id === 'hero' && 'Home'}
                  {item.id === 'about' && 'About'}
                  {item.id === 'personal-projects' && 'Work'}
                  {item.id === 'client-work' && 'Client'}
                  {item.id === 'tech-stack' && 'Skills'}
                  {item.id === 'certifications' && 'Certs'}
                  {item.id === 'contact' && 'Contact'}
                  
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Animated CTA Button - Show from sm (640px) and up */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-2 lg:px-4 xl:px-6 py-1.5 xl:py-2.5 rounded-lg xl:rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group text-xs xl:text-base flex-shrink-0 whitespace-nowrap"
            >
              <Mail className="w-3 h-3 xl:w-4 xl:h-4 xl:mr-2" />
              <span className="hidden xl:inline">Let's Connect</span>
              <span className="xl:hidden sr-only">Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button - Show only on mobile (below sm - 640px) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 flex-shrink-0"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute inset-0 transform transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only show on mobile (below sm - 640px) */}
      <div className={`sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <nav className="container mx-auto px-4 py-6 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-slate-600 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50/50 transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;