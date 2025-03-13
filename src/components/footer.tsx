
import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold heading-gradient">CodeWithEdison</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 text-gray-400 text-sm">
            <p>© {currentYear} Edison. All Rights Reserved</p>
            <span className="hidden md:block mx-2">|</span>
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in Kigali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
