import React from 'react';
import { Mail, Phone, Globe, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to turn your ideas into reality? I'm available for new projects and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-slate-300">info@davidmakinde.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-slate-300">+234 815 623 7243</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-slate-300">Lagos, Nigeria</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/obedav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://twitter.com/obedav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  >
                    <span className="text-white font-bold">X</span>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-green-900/50 p-6 rounded-xl border border-green-700">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Available for new projects</span>
                </div>
                <p className="text-green-200 text-sm">
                  Open to freelance work, full-time opportunities, and collaborative projects. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Web Application Development</option>
                    <option>Website Design & Development</option>
                    <option>E-commerce Platform</option>
                    <option>API Development</option>
                    <option>AWS Cloud Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;