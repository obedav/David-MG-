import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import PersonalProjects from './components/PersonalProjects';
import ClientWork from './components/ClientWork';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import AWSJourney from './components/AWSJourney';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Hero />
      <About />
      <Metrics />
      <PersonalProjects />
      <ClientWork />
      <Testimonials />
      <TechStack />
      <AWSJourney />
      <Certifications />
      <CTASection />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;