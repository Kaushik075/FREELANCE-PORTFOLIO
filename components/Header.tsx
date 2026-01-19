'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuBlinking, setIsMenuBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsMenuBlinking(true);
      setTimeout(() => setIsMenuBlinking(false), 100);
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform cursor-pointer">
          <span className="font-pacifico">KAUSHIK YEDDANAPUDI</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleScrollToSection('about')}
            className="hover:scale-110 transition-transform cursor-pointer font-medium"
          >
            About
          </button>
          <button 
            onClick={() => handleScrollToSection('projects')}
            className="hover:scale-110 transition-transform cursor-pointer font-medium"
          >
            Work
          </button>
          <button 
            onClick={() => handleScrollToSection('services')}
            className="hover:scale-110 transition-transform cursor-pointer font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => handleScrollToSection('contact-form')}
            className="hover:scale-110 transition-transform cursor-pointer font-medium"
          >
            Contact
          </button>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <div className="relative">
            <div className={`w-8 h-8 rounded-full border-2 border-black bg-white transition-all duration-150 ${isMenuBlinking ? 'scale-y-0' : 'scale-y-100'}`}>
              <div className="absolute w-2 h-2 bg-black rounded-full top-2 left-2"></div>
              <div className="absolute w-1 h-1 bg-white rounded-full top-2.5 left-2.5"></div>
            </div>
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-black/10 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => handleScrollToSection('about')}
                className="hover:scale-105 transition-transform cursor-pointer font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleScrollToSection('projects')}
                className="hover:scale-105 transition-transform cursor-pointer font-medium text-left"
              >
                Work
              </button>
              <button 
                onClick={() => handleScrollToSection('services')}
                className="hover:scale-105 transition-transform cursor-pointer font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleScrollToSection('contact-form')}
                className="hover:scale-105 transition-transform cursor-pointer font-medium text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
