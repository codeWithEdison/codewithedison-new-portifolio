
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GlassPanel } from './ui/glassmorphism';

const roles = [
  "Full Stack Developer",
  "AI/ML Expert",
  "Blockchain Developer",
  "Educator & Mentor"
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const currentRole = roles[currentRoleIndex];

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping, currentRole]);

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-violet-50"></div>
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      {/* Animated circles */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 animate-float"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-400/10 animate-float [animation-delay:2s]"></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <GlassPanel 
            className="mb-6 px-4 py-1.5 animate-fade-in"
            intensity="light"
          >
            <span className="text-blue-600 font-medium">Hello, I'm Edison</span>
          </GlassPanel>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in [animation-delay:300ms]">
            Crafting Digital Experiences & Building Enterprise Solutions
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8 animate-fade-in [animation-delay:600ms]">
            <h2 className="text-xl md:text-2xl text-gray-700">
              <span className="text-blue-600 font-semibold">{text}</span>
              <span className="animate-blink border-r-2 border-blue-600 ml-1">&nbsp;</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in [animation-delay:900ms]">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 flex flex-col items-center"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
