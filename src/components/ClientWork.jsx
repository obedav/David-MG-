import React from 'react';
import { Globe, ExternalLink, TrendingUp, Building, Zap, Award } from 'lucide-react';

const ClientWork = () => {
  const clientProjects = [
    {
      name: "Tundua",
      category: "Educational Platform",
      description: "Study abroad consultation platform helping students achieve global education dreams. Features comprehensive services and student success stories.",
      url: "https://tundua.com/",
      industry: "Education",
      impact: "Students studying in Canada, Germany, UK",
      testimonial: "Professional guidance that made my medical school dreams in Canada come true!",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
    },
    {
      name: "StreetNG",
      category: "Multi-Business Platform",
      description: "Comprehensive platform combining fine dining, bespoke tailoring, and real estate services under one unified brand experience.",
      url: "https://streetngsl.com/",
      industry: "Hospitality & Real Estate",
      impact: "Three business verticals, unified experience",
      testimonial: "Exceptional attention to detail and craftsmanship in every service.",
      image: "https://images.unsplash.com/photo-1559329007-40df8410f686?w=600&h=400&fit=crop"
    },
    {
      name: "Deusel Consult",
      category: "Energy Solutions",
      description: "Corporate consulting website for renewable energy solutions with impressive metrics and client testimonials from industry leaders.",
      url: "http://deuselconsult.com/",
      industry: "Renewable Energy",
      impact: "64 MW production, 92% efficiency rate",
      testimonial: "Their innovative approach resulted in significant cost savings and environmental benefits.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="client-work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Delivering real business results across diverse industries with live websites and satisfied clients
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {clientProjects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-blue-100">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.industry}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                <p className="text-orange-600 font-medium text-sm mb-3">{project.category}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Impact Metrics */}
                <div className="bg-white/60 p-4 rounded-lg mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Business Impact
                  </h4>
                  <p className="text-slate-600 text-sm">{project.impact}</p>
                </div>

                {/* Client Testimonial */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 text-sm italic">"{project.testimonial}"</p>
                </div>

                {/* Live Site Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all font-medium"
                >
                  <Globe className="w-4 h-4" />
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client Success Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Clients Choose Me</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Business Understanding</h4>
                <p className="text-slate-600 text-sm">Sales background helps me understand client needs and business goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Technical Excellence</h4>
                <p className="text-slate-600 text-sm">Full-stack expertise with modern technologies and best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Proven Results</h4>
                <p className="text-slate-600 text-sm">Live websites with real testimonials and measurable business impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWork;