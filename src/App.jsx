import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}