import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Clock, Target, CheckCircle, Code, BookOpen, Award, Zap } from 'lucide-react';

const AWSJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
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

  const learningProgress = [
    { name: "AWS Fundamentals", progress: 75, color: "from-blue-500 to-blue-600" },
    { name: "EC2 & VPC", progress: 60, color: "from-green-500 to-green-600" },
    { name: "S3 & CloudFront", progress: 70, color: "from-orange-500 to-orange-600" },
    { name: "Lambda & Serverless", progress: 55, color: "from-purple-500 to-purple-600" }
  ];

  const awsServices = [
    { name: "EC2", description: "Compute", color: "bg-blue-100 text-blue-700", icon: "💻" },
    { name: "S3", description: "Storage", color: "bg-green-100 text-green-700", icon: "🗄️" },
    { name: "Lambda", description: "Serverless", color: "bg-orange-100 text-orange-700", icon: "⚡" },
    { name: "RDS", description: "Database", color: "bg-purple-100 text-purple-700", icon: "🗃️" },
    { name: "CloudFront", description: "CDN", color: "bg-cyan-100 text-cyan-700", icon: "🌐" },
    { name: "IAM", description: "Security", color: "bg-red-100 text-red-700", icon: "🔐" }
  ];

  const upcomingProjects = [
    "Deploy portfolio on AWS S3 + CloudFront",
    "Build serverless contact form with Lambda",
    "Create AWS-powered API backend",
    "Implement CI/CD pipeline with CodePipeline",
    "Set up monitoring with CloudWatch"
  ];

  const milestones = [
    {
      icon: BookOpen,
      title: "Foundation Learning",
      description: "Completed AWS Cloud Practitioner study materials",
      status: "completed",
      date: "Dec 2024"
    },
    {
      icon: Code,
      title: "Hands-on Practice",
      description: "Building practice projects with core AWS services",
      status: "current",
      date: "Jan 2025"
    },
    {
      icon: Award,
      title: "Solutions Architect Associate",
      description: "Target certification completion",
      status: "upcoming",
      date: "Mar 2025"
    },
    {
      icon: Zap,
      title: "Advanced Specialization",
      description: "Pursuing specialized AWS certifications",
      status: "upcoming",
      date: "Q2 2025"
    }
  ];

  return (
    <section 
      id="aws-journey" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              AWS Learning Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expanding into cloud technologies to build scalable, modern applications
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Learning Progress */}
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 border border-blue-200/50 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">AWS Solutions Architect</h3>
                    <p className="text-slate-600">Current Learning Focus</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-slate-700">Currently studying AWS fundamentals and architecture patterns</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">Goal: AWS Solutions Architect Associate certification</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-8">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Building practice projects with AWS services</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Learning Progress</h4>
                  <div className="space-y-4">
                    {learningProgress.map((item, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: `${400 + index * 150}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">{item.name}</span>
                          <span className="text-sm text-slate-500 font-semibold">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-2000 ease-out relative`}
                            style={{ 
                              width: isVisible ? `${item.progress}%` : '0%',
                              transitionDelay: `${600 + index * 200}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Services & Projects */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '400ms' }}>
              {/* AWS Services */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-slate-800 mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-3 text-blue-600" />
                  AWS Services Learning
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {awsServices.map((service, index) => (
                    <div 
                      key={index}
                      className={`${service.color} p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className={`text-2xl mb-2 transition-transform duration-300 ${
                        hoveredService === index ? 'scale-125 rotate-12' : ''
                      }`}>
                        {service.icon}
                      </div>
                      <div className="text-sm font-medium">{service.name}</div>
                      <div className="text-xs opacity-80">{service.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Projects */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-slate-800 mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-3 text-orange-500" />
                  Upcoming Projects
                </h4>
                <ul className="space-y-3">
                  {upcomingProjects.map((project, index) => (
                    <li 
                      key={index}
                      className={`flex items-start space-x-3 text-slate-600 text-sm transition-all duration-500 hover:translate-x-2 hover:text-slate-800 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Timeline */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Learning Milestones</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div 
                    key={index}
                    className={`text-center group transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${800 + index * 150}ms` }}
                  >
                    <div className={`relative mb-6 ${
                      milestone.status === 'completed' ? 'opacity-100' :
                      milestone.status === 'current' ? 'opacity-90' : 'opacity-60'
                    }`}>
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 ${
                        milestone.status === 'completed' ? 'bg-green-100 text-green-600' :
                        milestone.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      {milestone.status === 'completed' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {milestone.status === 'current' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {milestone.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-2 leading-relaxed">{milestone.description}</p>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                      milestone.status === 'current' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {milestone.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why AWS Section */}
          <div className={`mt-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 border border-blue-200/50 max-w-4xl mx-auto">
              <h4 className="font-bold text-slate-800 mb-4">Why AWS?</h4>
              <p className="text-slate-600 leading-relaxed">
                Cloud computing is the future of web development. Learning AWS positions me to build scalable, 
                cost-effective solutions that can grow with business needs. This knowledge will enhance both 
                my personal projects and client work capabilities, enabling me to deliver modern, cloud-native applications.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: "🌐", title: "Global Scale", desc: "Deploy applications worldwide" },
                  { icon: "💰", title: "Cost Effective", desc: "Pay only for what you use" },
                  { icon: "⚡", title: "High Performance", desc: "Lightning-fast and reliable" }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 150}ms` }}
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <h5 className="font-semibold text-slate-800 mb-1">{benefit.title}</h5>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AWSJourney;