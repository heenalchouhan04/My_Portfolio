import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import ToolsAndProcess from './components/ToolsAndProcess';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CvModal from './components/CvModal';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="portfolio-app">
      {/* NAVBAR */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCvModal={() => setIsCvModalOpen(true)} 
      />

      {/* MAIN SECTIONS */}
      <main>
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Expertise />
        <ToolsAndProcess />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
