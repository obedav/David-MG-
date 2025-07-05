import React from 'react';
import { CheckCircle, Github, ExternalLink, ArrowRight } from 'lucide-react';

const PersonalProjects = () => {
  const projects = [
    {
      name: "Finance Tracker",
      category: "Financial Management",
      tech: ["Vue.js 3", "Pinia", "Tailwind CSS", "Supabase", "Vite"],
      description: "Complete financial management system with real-time tracking, analytics dashboard, and budget management. Features income/expense tracking, visual reports, and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: ["Real-time Analytics", "Budget Tracking", "Expense Categories", "Financial Reports"],
      github: "https://github.com/obedav/Finance-Tracker",
      demo: "#"
    },
    {
      name: "TaskFlow - Task Manager",
      category: "Productivity Platform",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      description: "Enterprise-level task management platform with team collaboration, progress tracking, and analytics. Built with MERN stack and JWT authentication.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      features: ["Team Collaboration", "Progress Analytics", "Time Tracking", "Mobile Responsive"],
      github: "https://github.com/obedav/Task-Manager",
      demo: "#"
    }
  ];

  return (
    <section id="personal-projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Personal Applications
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Production-ready applications showcasing full-stack expertise and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <p className="text-slate-600 mb-4">
              <strong>Ready for deployment</strong> but currently seeking cost-effective hosting solutions. 
              Both applications are production-ready with complete functionality.
            </p>
            <a
              href="https://github.com/obedav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>View all repositories on GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;