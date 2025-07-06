import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              From Sales Professional to Full-Stack Developer
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Combining business insight with technical expertise to create solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100/50 hover:shadow-lg transition-shadow duration-500 group">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  My Journey
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Started as a sales representative, where I learned to understand client needs and translate business requirements into actionable solutions. This background gives me a unique perspective in web development.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Now I build applications and websites that solve real business problems, having delivered solutions across education, energy consulting, hospitality, and e-commerce industries.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-green-50/50 rounded-xl border border-green-200/50 hover:bg-green-100/50 transition-colors duration-300 group">
                <CheckCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-800 font-medium">Currently expanding skills with AWS cloud technologies</span>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-slate-50/50 p-8 rounded-2xl hover:bg-slate-100/50 transition-colors duration-500 group border border-slate-200/50 hover:border-slate-300/50">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center group-hover:text-blue-600 transition-colors duration-300">
                  <Users className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  What Sets Me Apart
                </h4>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Business understanding from sales background',
                    'Full-stack development expertise',
                    'Proven track record with live client websites',
                    'Industry diversity across multiple sectors'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start opacity-0 animate-slideIn transition-opacity duration-500`}
                      style={{ 
                        animationDelay: `${600 + index * 100}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/50 p-8 rounded-2xl hover:bg-blue-100/50 transition-colors duration-500 group border border-blue-200/50 hover:border-blue-300/50">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center group-hover:text-orange-600 transition-colors duration-300">
                  <TrendingUp className="w-5 h-5 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  Current Focus
                </h4>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'AWS Solutions Architect certification',
                    'Cloud-native application development',
                    'Serverless architecture patterns',
                    'Modern DevOps practices'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start opacity-0 animate-slideIn`}
                      style={{ 
                        animationDelay: `${800 + index * 100}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;