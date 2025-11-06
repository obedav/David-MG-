import React, { useState, useEffect, useRef } from 'react';
import { Globe, ExternalLink, TrendingUp, Building, Zap, Award } from 'lucide-react';

const ClientWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const clientProjects = [
    {
      name: "Tundua",
      category: "Educational Platform",
      description: "Study abroad consultation platform helping students achieve global education dreams. Features comprehensive services and student success stories.",
      url: "https://tundua.com/",
      industry: "Education",
      impact: "Helping students secure admissions in Canada, Germany, UK",
      metrics: [
        { label: "Success Rate", value: "95%" },
        { label: "Countries", value: "15+" }
      ],
      testimonial: "Professional guidance that made my medical school dreams in Canada come true!",
      clientName: "Medical Student",
      image: "/img/tundua_img.png",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "StreetNG",
      category: "Multi-Business Platform",
      description: "Comprehensive platform combining fine dining, bespoke tailoring, and real estate services under one unified brand experience.",
      url: "./img/streetng_img.png",
      industry: "Hospitality & Real Estate",
      impact: "Three business verticals integrated seamlessly",
      metrics: [
        { label: "Services", value: "3" },
        { label: "Customer Rating", value: "4.8/5" }
      ],
      testimonial: "Exceptional attention to detail and craftsmanship in every service.",
      clientName: "Business Owner",
      image: "/img/streetng_img.png",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Deusel Consult",
      category: "Energy Solutions",
      description: "Corporate consulting website for renewable energy solutions with impressive metrics and client testimonials from industry leaders.",
      url: "http://deuselconsult.com/",
      industry: "Renewable Energy",
      impact: "Showcasing 64 MW production capacity",
      metrics: [
        { label: "Production", value: "64 MW" },
        { label: "Efficiency", value: "92%" }
      ],
      testimonial: "Their innovative approach resulted in significant cost savings and environmental benefits.",
      clientName: "Energy Director",
      image: "/img/deusel_img.png",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Eliban Music Academy",
      category: "Music Education",
      description: "Modern music learning web app with video streaming, booking system, and payment integration. Built with Next.js 14, Supabase, TypeScript, and Tailwind CSS.",
      url: "https://eliban.org",
      industry: "Education & Arts",
      impact: "Online music education and booking platform",
      metrics: [
        { label: "Courses", value: "20+" },
        { label: "Students", value: "150+" }
      ],
      testimonial: "The platform transformed how we connect with students and manage bookings.",
      clientName: "Academy Director",
      image: "/img/eliban.png",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "MrCream Hospitality",
      category: "Hospitality & F&B",
      description: "Premium Nigerian hospitality experience featuring yoghurt drinks, water park attractions, and luxury cream liqueur. Full-stack application with .NET backend.",
      url: "#",
      industry: "Hospitality",
      impact: "Multi-service hospitality platform",
      metrics: [
        { label: "Services", value: "3" },
        { label: "Locations", value: "2" }
      ],
      testimonial: "Beautiful website that captures our brand's premium feel perfectly.",
      clientName: "Marketing Manager",
      image: "/img/Mrcream.png",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "St. Patrick's Parish",
      category: "Religious Organization",
      description: "Modern Catholic Church website for St. Patrick's Parish (Lagos). Features online giving (Naira), sermon archive, ministries, and event management.",
      url: "#",
      industry: "Religious",
      impact: "Digital transformation for parish community",
      metrics: [
        { label: "Members", value: "2000+" },
        { label: "Online Giving", value: "Active" }
      ],
      testimonial: "Made it so much easier for our community to stay connected and give.",
      clientName: "Parish Administrator",
      image: "/img/stpatrick_img.png",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="client-work" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Delivering real business results across diverse industries with live websites and satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {clientProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl border border-blue-100/50 transition-all duration-700 transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.industry}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 bg-green-500 rounded-full transition-all duration-300 ${
                    hoveredCard === index ? 'animate-ping' : 'animate-pulse'
                  }`}></div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-orange-600 font-medium text-sm mb-3">{project.category}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Impact Metrics */}
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl mb-4 border border-white/50 group-hover:bg-white/80 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
                    <TrendingUp className={`w-4 h-4 mr-2 text-green-600 transition-transform duration-300 ${
                      hoveredCard === index ? 'scale-110 rotate-12' : ''
                    }`} />
                    Business Impact
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">{project.impact}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center bg-slate-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className={`bg-blue-50/50 backdrop-blur-sm p-4 rounded-xl mb-6 border-l-4 border-blue-500 transition-all duration-300 ${
                  hoveredCard === index ? 'bg-blue-100/50 translate-x-1' : ''
                }`}>
                  <p className="text-slate-700 text-sm italic mb-2">"{project.testimonial}"</p>
                  <p className="text-slate-500 text-xs font-medium">— {project.clientName}</p>
                </div>

                {/* Live Site Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-orange-600 transition-all duration-300 font-medium transform hover:scale-105 group/btn"
                >
                  <Globe className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Elegant glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredCard === index ? 'opacity-100' : ''
              }`}
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.05), transparent 40%)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Client Success Summary */}
        <div className={`mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 border border-blue-200/50 backdrop-blur-sm transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Clients Choose Me</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Building,
                  title: "Business Understanding",
                  description: "Sales background helps me understand client needs and business goals",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Zap,
                  title: "Technical Excellence", 
                  description: "Full-stack expertise with modern technologies and best practices",
                  color: "bg-orange-100 text-orange-600"
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description: "Live websites with real testimonials and measurable business impact",
                  color: "bg-green-100 text-green-600"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className={`text-center group transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  >
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWork;