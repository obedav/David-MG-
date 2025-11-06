import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Briefcase, Award, TrendingUp, Star } from 'lucide-react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    industries: 0,
    satisfaction: 0
  });
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      projects: 33,
      clients: 2,
      industries: 5,
      satisfaction: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const incrementValues = {
      projects: targets.projects / steps,
      clients: targets.clients / steps,
      industries: targets.industries / steps,
      satisfaction: targets.satisfaction / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounts({
        projects: Math.min(Math.floor(incrementValues.projects * currentStep), targets.projects),
        clients: Math.min(Math.floor(incrementValues.clients * currentStep), targets.clients),
        industries: Math.min(Math.floor(incrementValues.industries * currentStep), targets.industries),
        satisfaction: Math.min(Math.floor(incrementValues.satisfaction * currentStep), targets.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets); // Ensure we hit exact targets
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const metrics = [
    {
      icon: Code,
      value: counts.projects,
      suffix: '+',
      label: 'GitHub Repositories',
      description: 'Production-ready projects across multiple domains',
      gradient: 'from-cyan-500 to-blue-600',
      bgGlow: 'bg-cyan-500/10',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Briefcase,
      value: counts.clients,
      suffix: '',
      label: 'Live SaaS Businesses',
      description: 'Royal Health Consult & Tundua serving real customers',
      gradient: 'from-blue-500 to-indigo-600',
      bgGlow: 'bg-blue-500/10',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      value: counts.industries,
      suffix: '',
      label: 'Industries Served',
      description: 'EdTech, HealthTech, FinTech, Hospitality & Energy',
      gradient: 'from-purple-500 to-pink-600',
      bgGlow: 'bg-purple-500/10',
      iconColor: 'text-purple-600'
    },
    {
      icon: Award,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Proven track record of successful deliveries',
      gradient: 'from-orange-500 to-red-600',
      bgGlow: 'bg-orange-500/10',
      iconColor: 'text-orange-600'
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Entrepreneur + Developer',
      description: 'Building and scaling live SaaS businesses while delivering client projects',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Star,
      title: 'Business-First Mindset',
      description: 'Solutions that drive real business value and user engagement',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Code,
      title: 'Full-Stack Versatility',
      description: 'From React/Vue frontends to Node.js/Laravel backends',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-orange-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Numbers that showcase experience, versatility, and commitment to excellence
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200/50 transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${metric.bgGlow} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <IconComponent className={`w-8 h-8 ${metric.iconColor}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                    {metric.value}{metric.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${metric.gradient} transition-all duration-2000 ease-out`}
                    style={{
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                What Makes Me Different
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`text-center group transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      <div className={`w-16 h-16 ${achievement.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
