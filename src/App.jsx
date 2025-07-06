import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PersonalProjects from './components/PersonalProjects';
import ClientWork from './components/ClientWork';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import AWSJourney from './components/AWSJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Hero />
      <About />
      <PersonalProjects />
      <ClientWork />
      <TechStack />
      <AWSJourney />
      <Certifications /> 
      <Contact />
      <Footer />
    </div>
  );
};

export default App;