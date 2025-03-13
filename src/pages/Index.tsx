
import React, { useEffect, useState } from 'react';
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

const Index = () => {
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

    return () => {
      // Cleanup
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <InteractiveCursor />
        <InteractiveParticles />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
