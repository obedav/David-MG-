import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Download, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Full-stack development expertise (Frontend & Backend)",
    "Business-first mindset from sales background",
    "Proven track record with 15+ live client websites",
    "Modern tech stack (React, Vue.js, Node.js, Next.js)",
    "Experience across EdTech, HealthTech, FinTech sectors",
    "Fast learner, currently expanding AWS cloud skills"
  ];

  return (
    <section
      id="cta-section"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Animated Ocean Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 165, 0, 0.2) 0%, transparent 50%),
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

      {/* Ocean Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 12}px`,
              height: `${4 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Whether you need a complete web application, a modern website, or technical consulting, I'm here to help turn your vision into reality.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-cyan-100 text-sm leading-relaxed drop-shadow-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="https://github.com/obedav"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-cyan-300/60 text-cyan-100 px-8 py-4 rounded-xl font-semibold hover:border-orange-300 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View GitHub Profile</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:obedav@live.com"
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-cyan-200 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
              </a>
              <a
                href="https://github.com/obedav"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-cyan-200 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/davidmakindegeorge"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-cyan-200 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
              </a>
            </div>

            {/* Value Proposition */}
            <div className="text-center">
              <p className="text-cyan-200 text-sm drop-shadow-md">
                <strong className="text-white">Available for:</strong> Full-time positions, Freelance projects, Technical consulting
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            {[
              { value: "33+", label: "Repositories" },
              { value: "15+", label: "Clients" },
              { value: "5", label: "Industries" },
              { value: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-200 to-orange-200 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-cyan-200 drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-150px) scale(1); opacity: 0; }
        }

        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
