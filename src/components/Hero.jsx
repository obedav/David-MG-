import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Profile Image */}


        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional Web Developer
          <span className="block text-orange-300">with Proven Client Success</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Building scalable applications and websites that businesses depend on
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
          From study abroad platforms to renewable energy consulting - I create solutions that scale
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-300">15+</div>
            <div className="text-sm text-blue-200">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-300">4</div>
            <div className="text-sm text-blue-200">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-300">100%</div>
            <div className="text-sm text-blue-200">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('personal-projects')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 group"
          >
            <span>View My Applications</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('client-work')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2"
          >
            <Globe className="w-5 h-5" />
            <span>See Client Success</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;