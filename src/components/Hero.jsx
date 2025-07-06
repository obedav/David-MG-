import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Elegant typewriter effect
  const words = ['Professional Web Developer', 'Full-Stack Engineer', 'Problem Solver', 'Team Collaborator'];
  
  useEffect(() => {
    const word = words[currentWord];
    let timeout;
    
    if (isTyping) {
      if (typedText.length < word.length) {
        timeout = setTimeout(() => {
          setTypedText(word.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentWord]);

  // Smooth mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ocean Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 165, 0, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, 
              #1e3a8a 0%, 
              #1e40af 25%, 
              #2563eb 50%, 
              #0891b2 75%, 
              #06b6d4 100%
            )
          `
        }}
      />

      {/* Animated Ocean Waves */}
      <div className="absolute inset-0">
        {/* Wave Layer 1 - Deep Ocean */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-800/60 to-transparent rounded-t-full animate-wave-slow"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`,
            animation: 'oceanWave1 8s ease-in-out infinite'
          }}
        />
        
        {/* Wave Layer 2 - Mid Ocean */}
        <div 
          className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-600/50 to-transparent rounded-t-full"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01 + 1) * 8}px)`,
            animation: 'oceanWave2 6s ease-in-out infinite reverse'
          }}
        />
        
        {/* Wave Layer 3 - Surface Waves */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-orange-400/30 to-transparent rounded-t-full"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01 + 2) * 6}px)`,
            animation: 'oceanWave3 4s ease-in-out infinite'
          }}
        />

        {/* Floating Bubbles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
              width: `${4 + Math.random() * 12}px`,
              height: `${4 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Floating Ocean Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translateY(${Math.sin(scrollY * 0.002 + i) * 30}px) rotate(${scrollY * 0.05 + i * 45}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-300/30 to-orange-300/30 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Sparkling Effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Typography with Ocean Glow */}
        <div className="mt-20 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-transparent animate-shimmer-text">
              Hi, I'm David Makinde-George
            </span>
          </h1>
          
          {/* Typewriter Effect with Ocean Theme */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-cyan-100 min-h-[1em] drop-shadow-lg">
              <span className="border-r-2 border-orange-300 pr-1 animate-pulse">
                {typedText}
              </span>
            </h2>
          </div>
        </div>

        {/* Description with Ocean Glow */}
        <div className="mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto leading-relaxed mb-4 drop-shadow-lg">
            Building scalable applications and websites that businesses depend on
          </p>
          <p className="text-lg text-cyan-100/80 max-w-2xl mx-auto drop-shadow-md">
            From study abroad platforms to renewable energy consulting - I create solutions that scale
          </p>
        </div>

        {/* Stats with Ocean Theme */}
        <div className="mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { label: "Projects", value: "15+", delay: 0 },
              { label: "Industries", value: "4", delay: 100 },
              { label: "Satisfaction", value: "100%", delay: 200 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300 opacity-0 animate-fadeInUp"
                style={{ 
                  animationDelay: `${1000 + stat.delay}ms`, 
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-200 to-orange-200 bg-clip-text text-transparent drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm text-cyan-200/80 drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ocean-themed CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fadeInUp" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
          <button
            onClick={() => scrollToSection('personal-projects')}
            className="group bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20"
          >
            <span>View My Applications</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('client-work')}
            className="group border-2 border-cyan-300/60 text-cyan-100 px-8 py-4 rounded-xl font-semibold hover:border-orange-300 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>See Client Success</span>
          </button>
        </div>
      </div>

      {/* Ocean Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-200/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-cyan-200 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Ocean CSS Animations - FIXED: Removed jsx attribute */}
      <style>
        {`
        @keyframes oceanWave1 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          25% { transform: translateX(-25px) scaleY(1.1); }
          50% { transform: translateX(0) scaleY(0.9); }
          75% { transform: translateX(25px) scaleY(1.1); }
        }
        
        @keyframes oceanWave2 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          33% { transform: translateX(30px) scaleY(1.2); }
          66% { transform: translateX(-20px) scaleY(0.8); }
        }
        
        @keyframes oceanWave3 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-15px) scaleY(1.3); }
        }
        
        @keyframes bubble {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer-text {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-bubble {
          animation: bubble linear infinite;
        }
        
        .animate-sparkle {
          animation: sparkle ease-in-out infinite;
        }
        
        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmer-text 3s linear infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Hero;