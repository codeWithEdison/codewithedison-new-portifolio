
import React, { useEffect, useState, useRef } from 'react';
import { Navigation } from '../components/navigation';
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { SkillsSection } from '../components/skills-section';
import { ProjectsSection } from '../components/projects-section';
import { ContactSection } from '../components/contact-section';
import { Footer } from '../components/footer';
import { ThemeProvider } from '../components/theme-provider';
import { InteractiveCursor } from '../components/interactive-cursor';
import { InteractiveParticles } from '../components/interactive-particles';
import { Button } from '../components/ui/button';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Set up scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <InteractiveCursor />
        <InteractiveParticles />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        
        {/* Scroll to top button */}
        <div 
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="secondary"
            className="rounded-full w-12 h-12 bg-primary/10 backdrop-blur-sm hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 shadow-lg group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 text-primary group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
