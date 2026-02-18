
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIGRSection from './components/AIGRSection';
import ProductsSection from './components/ProductsSection';
import ROISection from './components/ROISection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmartChat from './components/SmartChat';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        {/* NEDEN - Vizyon (Space) */}
        <Hero />
        
        {/* NASIL - Teknoloji (Atmosphere/High View) */}
        <AIGRSection />
        
        {/* NE - Ürünler (Ground Level) */}
        <ProductsSection />
        
        {/* ROI & Veri (Root/Underground) */}
        <ROISection />
        
        {/* İletişim */}
        <Contact />
      </main>

      <Footer />
      <SmartChat />
    </div>
  );
};

export default App;
