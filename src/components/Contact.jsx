import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', 'error'
  const sectionRef = useRef(null);

  // EmailJS configuration - Your actual values
  const EMAIL_CONFIG = {
    serviceId: 'service_3ig13pj',       // Your Outlook service ID
    templateId: 'template_4jlrtxf',    // Your contact form template ID
    publicKey: 'jm8tQzCHGs_UnBwQ5'     // Your public key
  };

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (templateParams) => {
 
    return emailjs.send(
      EMAIL_CONFIG.serviceId, 
       EMAIL_CONFIG.templateId, 
       templateParams, 
       EMAIL_CONFIG.publicKey
     );
    
    // REMOVE THIS SIMULATION IN PRODUCTION:
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'David Makinde-George',
        reply_to: formData.email
      };

      await sendEmail(templateParams);
      
      setFormStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(''), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@davidmakinde.com",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+234 813 623 7243",
      color: "bg-orange-500"
    },
    {
      icon: Globe,
      label: "Location",
      value: "Lagos, Nigeria",
      color: "bg-green-600"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/obedav", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@davidmakinde.com", label: "Email" }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
              transform: `rotate(${45 + i * 15}deg)`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`
            }}
          >
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to turn your ideas into reality? I'm available for new projects and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 group transition-all duration-500 hover:translate-x-2 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.label}</div>
                          <div className="text-slate-300">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '800ms' }}>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
                        title={social.label}
                      >
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className={`bg-green-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-700/50 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '1000ms' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Available for new projects</span>
                </div>
                <p className="text-green-200 text-sm leading-relaxed">
                  Open to freelance work, full-time opportunities, and collaborative projects. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-700/50 rounded-xl flex items-center space-x-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-700/50 rounded-xl flex items-center space-x-3 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300">Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', required: true }
                    ].map((field, index) => (
                      <div key={field.name} className="relative">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          required={field.required}
                          disabled={formStatus === 'sending'}
                          className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                            focusedField === field.name 
                              ? 'border-blue-400 bg-white/20 transform scale-[1.02]' 
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          placeholder={field.placeholder}
                        />
                        {focusedField === field.name && (
                          <div className="absolute inset-0 rounded-xl bg-blue-400/20 pointer-events-none animate-pulse"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                      disabled={formStatus === 'sending'}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        focusedField === 'projectType' 
                          ? 'border-blue-400 bg-white/20 transform scale-[1.02]' 
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application Development</option>
                      <option value="website">Website Design & Development</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="api">API Development</option>
                      <option value="aws">AWS Cloud Solutions</option>
                      <option value="other">Other</option>
                    </select>
                    {focusedField === 'projectType' && (
                      <div className="absolute inset-0 rounded-xl bg-blue-400/20 pointer-events-none animate-pulse"></div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      disabled={formStatus === 'sending'}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        focusedField === 'message' 
                          ? 'border-blue-400 bg-white/20 transform scale-[1.02]' 
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute inset-0 rounded-xl bg-blue-400/20 pointer-events-none animate-pulse"></div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 group ${
                      formStatus === 'sending'
                        ? 'bg-slate-600 cursor-not-allowed text-slate-300'
                        : 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:from-blue-700 hover:to-orange-600'
                    }`}
                  >
                    <Mail className={`w-5 h-5 transition-transform duration-300 ${
                      formStatus === 'sending' ? 'animate-pulse' : 'group-hover:rotate-12'
                    }`} />
                    <span>
                      {formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
                    </span>
                  </button>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;