import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-2xl font-bold text-white">David M-G</span>
          </div>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Professional web developer creating scalable solutions that drive real business results. 
            From personal applications to client success stories.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/obedav" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/obedav" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="text-lg font-bold">X</span>
            </a>
            <a 
              href="mailto:obedav@example.com" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2025 David Makinde-George. Built with React & Tailwind CSS. Available for new projects.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;