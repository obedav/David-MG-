import React from 'react';
import { Code, Server, Database, Cloud } from 'lucide-react';

const TechStack = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
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
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Vite", level: 85 },
        { name: "AWS (Learning)", level: 60 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Full-stack development skills with modern technologies and cloud platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;