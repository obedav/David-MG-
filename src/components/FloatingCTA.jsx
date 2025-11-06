import React, { useState, useEffect } from 'react';
import { Mail, X, Send } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Card */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 animate-fadeInUp mb-2">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 p-1 hover:bg-slate-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
            Let's Build Together!
          </h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Looking for a developer who understands both business and technology? Let's discuss your project.
          </p>

          <div className="space-y-3">
            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send a Message</span>
            </button>

            <a
              href="mailto:obedav@live.com"
              className="w-full border-2 border-slate-300 text-slate-700 px-4 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Available for full-time, freelance, and contract work
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Contact me"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>

        {/* Icon */}
        <div className="relative">
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </div>

        {/* Notification Badge */}
        {!isExpanded && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            1
          </div>
        )}
      </button>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute bottom-full right-0 mb-2 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Let's talk about your project
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
