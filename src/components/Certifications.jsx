import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Shield, Code, Laptop } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Google Cybersecurity",
      provider: "Google via Coursera",
      date: "March 2025",
      description: "Comprehensive cybersecurity specialization covering network security, incident response, and security risk management.",
      skills: ["Network Security", "Incident Response", "Risk Management", "Security Tools", "Linux", "SQL", "Python"],
      credential: "https://coursera.org/share/75a86cb0ed3647966eb97a7de65584a2", 
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop",
      verified: true,
      icon: Shield,
      color: "bg-red-50 border-red-200 text-red-700"
    },
    {
      name: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "2022",
      description: "Frontend development certification covering HTML, CSS, responsive design principles, and accessibility.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Accessibility"],
      credential: "https://www.freecodecamp.org/certification/obedav/responsive-web-design",
      logo: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=100&fit=crop",
      verified: true,
      icon: Laptop,
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      date: "2022",
      description: "Advanced JavaScript programming covering algorithms, data structures, and functional programming concepts.",
      skills: ["JavaScript ES6+", "Algorithms", "Data Structures", "Functional Programming", "Problem Solving"],
      credential: "https://www.freecodecamp.org/certification/obedav/javascript-algorithms-and-data-structures-v8",
      logo: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=100&h=100&fit=crop",
      verified: true,
      icon: Code,
      color: "bg-yellow-50 border-yellow-200 text-yellow-700"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized training programs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-200">
                {/* Certificate Header */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${cert.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {cert.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.name}</h3>
                  <div className="flex items-center space-x-2 text-slate-600 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{cert.provider}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">{cert.description}</p>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all font-medium group"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Commitment to Excellence</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Industry Recognition</h4>
                <p className="text-slate-600 text-sm">Certified by leading technology companies and educational platforms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Security Focused</h4>
                <p className="text-slate-600 text-sm">Specialized knowledge in cybersecurity and secure development practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Continuous Learning</h4>
                <p className="text-slate-600 text-sm">Regularly updating skills through structured learning and hands-on projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;