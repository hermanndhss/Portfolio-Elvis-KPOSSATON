import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Importation de toutes les vraies pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Remet automatiquement la page en haut lors de la navigation */}
      <ScrollToTop />
      
      {/* Header Sticky / Capsule */}
      <Navbar />
      
      {/* Contenu principal de la page */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer épuré */}
      <Footer />
    </div>
  );
}

export default App;