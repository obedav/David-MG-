import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const testimonials = [
    {
      name: "Dr. Ahmed Oladele",
      role: "Medical Student",
      company: "Tundua Client",
      image: "/img/testimonial1.png",
      rating: 5,
      text: "David's professional guidance made my medical school dreams in Canada come true! The Tundua platform he built is intuitive and helped me navigate the entire application process smoothly.",
      industry: "Education"
    },
    {
      name: "Mrs. Blessing Eze",
      role: "Business Owner",
      company: "StreetNG",
      image: "/img/testimonial2.png",
      rating: 5,
      text: "Working with David was a game-changer for our business. He seamlessly integrated our restaurant, tailoring, and real estate services into one beautiful platform. Exceptional attention to detail!",
      industry: "Hospitality"
    },
    {
      name: "Engr. Michael Adeyemi",
      role: "Energy Director",
      company: "Deusel Consult",
      image: "/img/testimonial3.png",
      rating: 5,
      text: "David delivered a professional corporate website that perfectly showcases our renewable energy solutions. His technical expertise and understanding of our business needs were outstanding.",
      industry: "Energy"
    },
    {
      name: "Prof. Grace Nwosu",
      role: "Academy Director",
      company: "Eliban Music Academy",
      image: "/img/testimonial4.png",
      rating: 5,
      text: "The music learning platform transformed how we connect with students. Video streaming, booking, and payment integration work flawlessly. David truly understands modern web development.",
      industry: "Education"
    }
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            What Clients Say
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto drop-shadow-lg">
            Real feedback from satisfied clients across multiple industries
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-cyan-300" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, index) => (
                  <Star key={index} className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-1 animate-pulse" style={{ animationDelay: `${index * 100}ms` }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed italic drop-shadow-lg">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white drop-shadow-md">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-cyan-200 text-sm drop-shadow-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-cyan-300 text-xs drop-shadow-sm">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Industry Badge */}
              <div className="flex justify-center mt-6">
                <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-200 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
                  {testimonials[activeTestimonial].industry}
                </span>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-orange-500/10 opacity-50"></div>
          </div>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeTestimonial
                  ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-blue-600'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`cursor-pointer group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 ${
                index === activeTestimonial ? 'border-cyan-400/50 bg-white/10' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-cyan-200">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                {testimonial.text}
              </p>

              <div className="mt-4">
                <span className="text-xs text-cyan-400 font-medium">{testimonial.industry}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-400/30">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <ThumbsUp className="w-12 h-12 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                <p className="text-emerald-200 text-sm">Client Satisfaction</p>
              </div>
              <div className="group">
                <Star className="w-12 h-12 text-yellow-400 fill-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-bold text-white mb-2">5.0</h4>
                <p className="text-cyan-200 text-sm">Average Rating</p>
              </div>
              <div className="group">
                <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-bold text-white mb-2">15+</h4>
                <p className="text-purple-200 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
