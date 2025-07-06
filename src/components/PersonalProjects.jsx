import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Github, ExternalLink, ArrowRight } from 'lucide-react';

const PersonalProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Intersection Observer
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

  const personalProjects = [
    {
      name: "Finance Tracker",
      category: "Financial Management",
      tech: ["Vue.js 3", "Pinia", "Tailwind CSS", "Supabase", "Vite"],
      description: "Complete financial management system with real-time tracking, analytics dashboard, and budget management. Features income/expense tracking, visual reports, and responsive design.",
      image: "/img/finance_img.png",
      features: ["Real-time Analytics", "Budget Tracking", "Expense Categories", "Financial Reports"],
      github: "https://github.com/obedav/Finance-Tracker",
      demo: "#",
      gradient: "from-cyan-500 to-blue-600",
      oceanColor: "from-cyan-400/20 to-blue-500/20"
    },
    {
      name: "TaskFlow - Task Manager",
      category: "Productivity Platform", 
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      description: "Enterprise-level task management platform with team collaboration, progress tracking, and analytics. Built with MERN stack and JWT authentication.",
      image: "/img/task_img.png",
      features: ["Team Collaboration", "Progress Analytics", "Time Tracking", "Mobile Responsive"],
      github: "https://github.com/obedav/Task-Manager",
      demo: "#",
      gradient: "from-teal-500 to-cyan-600",
      oceanColor: "from-teal-400/20 to-cyan-500/20"
    }
  ];

  return (
    <section 
      id="personal-projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Ocean Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 165, 0, 0.15) 0%, transparent 50%),
            linear-gradient(180deg, 
              #0891b2 0%, 
              #0284c7 25%, 
              #0369a1 50%, 
              #1e40af 75%, 
              #1e3a8a 100%
            )
          `
        }}
      />

      {/* Underwater Bubble Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm animate-bubble-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
              width: `${6 + Math.random() * 16}px`,
              height: `${6 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Floating Ocean Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `oceanFloat${i % 3 + 1} ${8 + i}s ease-in-out infinite`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-300/40 to-orange-300/40 rounded-full blur-md"></div>
          </div>
        ))}

        {/* Ocean Current Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
              style={{
                top: `${25 + i * 20}%`,
                left: 0,
                right: 0,
                animation: `oceanCurrent ${6 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-transparent animate-shimmer-text">
              Personal Applications
            </span>
          </h2>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto drop-shadow-lg">
            Production-ready applications showcasing full-stack expertise and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {personalProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Ocean Glass Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700">
                
                {/* Project Image with Ocean Overlay */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Ocean Wave Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Ocean Color Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.oceanColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Underwater Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer-wave"></div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300 drop-shadow-lg">
                    {project.name}
                  </h3>
                  <p className="text-cyan-100 mb-6 leading-relaxed drop-shadow-md">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-200 mb-3 drop-shadow-md">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`bg-white/10 backdrop-blur-sm text-cyan-100 border border-white/20 px-3 py-1 rounded-lg text-sm font-medium transform transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                            hoveredProject === index ? 'scale-105 bg-white/15' : ''
                          }`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-200 mb-3 drop-shadow-md">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`flex items-center space-x-2 transition-all duration-300 ${
                            hoveredProject === index ? 'translate-x-1' : ''
                          }`}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 drop-shadow-md" />
                          <span className="text-sm text-cyan-100 drop-shadow-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ocean-themed Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-xl hover:bg-slate-700/80 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 border-2 border-cyan-400/60 text-cyan-100 px-4 py-3 rounded-xl hover:bg-cyan-400/10 hover:border-cyan-300 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>

                {/* Ocean Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                  hoveredProject === index ? 'opacity-100' : ''
                }`}
                  style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ocean-themed Additional Projects Note */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl max-w-2xl mx-auto hover:shadow-cyan-500/20 transition-shadow duration-500">
            <p className="text-cyan-100 mb-6 leading-relaxed drop-shadow-md">
              <strong className="text-white drop-shadow-lg">Ready for deployment</strong> but currently seeking cost-effective hosting solutions. 
              Both applications are production-ready with complete functionality.
            </p>
            <a
              href="https://github.com/obedav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-cyan-200 hover:text-white font-medium group transition-colors duration-300 drop-shadow-md"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View all repositories on GitHub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Ocean Animation Styles */}
      <style>{`
        @keyframes oceanFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes oceanFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes oceanFloat3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(15px) rotate(90deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        
        @keyframes oceanCurrent {
          0% { transform: translateX(-100%) scaleX(0); }
          50% { transform: translateX(50%) scaleX(1); }
          100% { transform: translateX(200%) scaleX(0); }
        }
        
        @keyframes bubble-slow {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-150px) scale(1.2); opacity: 0; }
        }
        
        @keyframes shimmer-wave {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes shimmer-text {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-bubble-slow {
          animation: bubble-slow linear infinite;
        }
        
        .animate-shimmer-wave {
          animation: shimmer-wave 2s ease-in-out infinite;
        }
        
        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmer-text 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PersonalProjects;