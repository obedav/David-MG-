import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Database, Cloud } from 'lucide-react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
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
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for ocean effects
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

  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      oceanColor: "from-cyan-400/30 to-blue-500/30",
      coralColor: "bg-cyan-400/20",
      skills: [
        { name: "Vue.js", level: 90 },
        { name: "React", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "Backend", 
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      oceanColor: "from-emerald-400/30 to-teal-500/30",
      coralColor: "bg-emerald-400/20",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Laravel/PHP", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "JWT Authentication", level: 80 }
      ]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-orange-500 to-amber-500",
      oceanColor: "from-orange-400/30 to-amber-500/30",
      coralColor: "bg-orange-400/20",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Supabase", level: 85 },
        { name: "MySQL", level: 70 }
      ]
    },
    {
      category: "Tools & Cloud",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      oceanColor: "from-purple-400/30 to-pink-500/30",
      coralColor: "bg-purple-400/20",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Vite", level: 85 },
        { name: "AWS (Learning)", level: 60 }
      ]
    }
  ];

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Deep Ocean Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 165, 0, 0.12) 0%, transparent 50%),
            linear-gradient(145deg, 
              #0c4a6e 0%, 
              #075985 25%, 
              #0369a1 50%, 
              #0284c7 75%, 
              #0891b2 100%
            )
          `
        }}
      />

      {/* Coral Reef Background Elements */}
      <div className="absolute inset-0">
        {/* Sea Anemones */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-15"
            style={{
              left: `${5 + i * 12}%`,
              bottom: `${-10 + Math.random() * 30}%`,
              animation: `seaweed${(i % 3) + 1} ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <div className="w-8 h-32 bg-gradient-to-t from-emerald-400/40 via-teal-400/30 to-transparent rounded-t-full transform origin-bottom"></div>
          </div>
        ))}

        {/* Floating Coral Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-coral-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${3 + Math.random() * 8}px`,
              height: `${3 + Math.random() * 8}px`,
              backgroundColor: `hsla(${180 + Math.random() * 60}, 70%, 60%, 0.3)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Ocean Current Waves */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px opacity-20"
            style={{
              top: `${30 + i * 25}%`,
              left: 0,
              right: 0,
              background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
              animation: `oceanCurrent ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-transparent animate-shimmer-text">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto drop-shadow-lg">
            Full-stack development skills with modern technologies and cloud platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`relative overflow-hidden transition-all duration-700 transform hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Ocean Glass Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700 overflow-hidden">
                  
                  {/* Coral Header */}
                  <div className={`p-6 text-center transition-all duration-300 relative overflow-hidden ${category.coralColor}`}>
                    {/* Underwater Bubble Effect */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white/10 animate-bubble-tiny"
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            width: `${2 + i}px`,
                            height: `${2 + i}px`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Icon Container - Like a Treasure Chest */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/30 transition-all duration-300 relative overflow-hidden ${
                      hoveredCategory === index ? 'scale-110 rotate-6 shadow-xl' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                      
                      {/* Treasure Shimmer */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-transform duration-500 ${
                        hoveredCategory === index ? 'translate-x-full' : '-translate-x-full'
                      }`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{category.category}</h3>
                  </div>

                  {/* Skills List - Like Sea Creatures */}
                  <div className="p-6 space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`transition-all duration-500 ${
                          hoveredCategory === index ? 'translate-x-1' : ''
                        }`}
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-cyan-100 drop-shadow-sm">{skill.name}</span>
                          <span className="text-sm text-cyan-200 font-semibold drop-shadow-sm">{skill.level}%</span>
                        </div>
                        
                        {/* Ocean Wave Progress Bar */}
                        <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white/20">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 200) + (skillIndex * 150)}ms`
                            }}
                          >
                            {/* Ocean Wave Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-ocean-shimmer"></div>
                            
                            {/* Floating Bubbles in Progress Bar */}
                            <div className="absolute inset-0">
                              {Array.from({ length: 2 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white/60 rounded-full animate-bubble-progress"
                                  style={{
                                    left: `${20 + i * 40}%`,
                                    animationDelay: `${i * 0.8}s`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ocean Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                    hoveredCategory === index ? 'opacity-100' : ''
                  }`}
                    style={{
                      background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${category.oceanColor.replace('/30', '/20')}, transparent 60%)`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ocean-themed Skills Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Why Choose My Tech Stack?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Modern & Scalable",
                  description: "Using cutting-edge technologies that grow with your business",
                  icon: "🚀",
                  gradient: "from-cyan-400/20 to-blue-500/20"
                },
                {
                  title: "Performance Focused",
                  description: "Optimized code and best practices for lightning-fast applications",
                  icon: "⚡",
                  gradient: "from-yellow-400/20 to-orange-500/20"
                },
                {
                  title: "Future Ready",
                  description: "Continuously learning new technologies like AWS cloud services",
                  icon: "🌟",
                  gradient: "from-purple-400/20 to-pink-500/20"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`text-center group transition-all duration-500 hover:scale-105 relative overflow-hidden rounded-2xl p-6 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${1000 + index * 200}ms`,
                    background: `linear-gradient(135deg, ${item.gradient})`
                  }}
                >
                  {/* Floating Background Element */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300 drop-shadow-md">
                      {item.title}
                    </h4>
                    <p className="text-cyan-100 text-sm leading-relaxed drop-shadow-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ocean Animation Styles */}
      <style>{`
        @keyframes seaweed1 {
          0%, 100% { transform: rotate(-5deg) scaleY(1); }
          50% { transform: rotate(5deg) scaleY(1.1); }
        }
        
        @keyframes seaweed2 {
          0%, 100% { transform: rotate(3deg) scaleY(0.9); }
          50% { transform: rotate(-8deg) scaleY(1.2); }
        }
        
        @keyframes seaweed3 {
          0%, 100% { transform: rotate(-3deg) scaleY(1.1); }
          50% { transform: rotate(6deg) scaleY(0.8); }
        }
        
        @keyframes coral-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes oceanCurrent {
          0% { transform: translateX(-100%) scaleX(0); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(100%) scaleX(1); opacity: 0; }
        }
        
        @keyframes bubble-tiny {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-30px) scale(1.5); opacity: 0; }
        }
        
        @keyframes bubble-progress {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-4px); opacity: 0.8; }
        }
        
        @keyframes ocean-shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        
        @keyframes shimmer-text {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-coral-float {
          animation: coral-float linear infinite;
        }
        
        .animate-bubble-tiny {
          animation: bubble-tiny linear infinite;
        }
        
        .animate-bubble-progress {
          animation: bubble-progress ease-in-out infinite 2s;
        }
        
        .animate-ocean-shimmer {
          animation: ocean-shimmer 3s ease-in-out infinite;
        }
        
        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmer-text 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;