
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { GlassPanel } from './ui/glassmorphism';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const roles = [
    'Full Stack Developer',
    'AI/ML Expert',
    'Blockchain Developer',
    'Educator & Mentor'
  ];
  
  const currentRole = roles[currentRoleIndex];

  // Handle mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
  }, [text, isTyping, currentRole, roles]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background to-background/70 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] dark:bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      {/* Moving Blob Background */}
      <div 
        className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-blue-400/10 dark:bg-violet-600/10 blur-3xl"
        style={{ 
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute -z-10 w-[300px] h-[300px] rounded-full bg-violet-400/10 dark:bg-blue-600/10 blur-3xl"
        style={{ 
          transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <GlassPanel 
            className="mb-6 px-4 py-1.5 animate-fade-in"
            intensity="light"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm Edison</span>
          </GlassPanel>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in [animation-delay:300ms] text-gray-900 dark:text-white">
            Crafting Digital Experiences & Building Enterprise Solutions
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8 animate-fade-in [animation-delay:600ms]">
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{text}</span>
              <span className="animate-blink border-r-2 border-blue-600 dark:border-blue-400 ml-1">&nbsp;</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in [animation-delay:900ms]">
            <a href="#projects" className="btn-primary bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600">
              View My Work
            </a>
            <a href="#contact" className="btn-outline border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
              Get In Touch
            </a>
          </div>
          
          {/* Interactive element - floating shapes */}
          <div className="relative w-full h-24 mt-16 hidden md:block">
            <div className="absolute left-1/4 w-12 h-12 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg animate-float" 
                style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
            <div className="absolute left-1/3 w-8 h-8 bg-violet-500/20 dark:bg-violet-400/20 rounded-full animate-float" 
                style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
            <div className="absolute left-1/2 w-16 h-16 bg-indigo-500/20 dark:bg-indigo-400/20 rounded-lg rotate-45 animate-float" 
                style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
            <div className="absolute left-2/3 w-10 h-10 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full animate-float" 
                style={{ animationDelay: '1.5s', animationDuration: '6.5s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 dark:text-gray-400 flex flex-col items-center"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
