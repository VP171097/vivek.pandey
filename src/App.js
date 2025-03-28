import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="bg-gray-950">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeSection === 'about' && <About />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'certifications' && <Certifications />}
          {activeSection === 'contact' && <Contact />}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;