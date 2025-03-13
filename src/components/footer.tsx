
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from './language-provider';

export function Footer() {
  const { t } = useLanguage();
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
              {t('home')}
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              {t('about')}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              {t('projects')}
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              {t('skills')}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              {t('contact')}
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 text-gray-400 text-sm">
            <p>© {currentYear} Edison. {t('allRightsReserved')}</p>
            <span className="hidden md:block mx-2">|</span>
            <p className="flex items-center">
              {t('madeWith')} <Heart size={14} className="mx-1 text-red-500" /> {t('inKigali')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
