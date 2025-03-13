
import React, { useEffect, useRef } from 'react';
import { useTheme } from './theme-provider';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  growing: boolean;
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full width and height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.06), 120);
      particlesRef.current = [];

      const lightColors = ['#E6F1FE', '#CCE3FD', '#99C8FB', '#66ACF9', '#a1c4fd', '#c2e9fb'];
      const darkColors = ['#004693', '#005EC4', '#0075F5', '#3391F7', '#7F00FF', '#6a11cb'];
      
      const colors = theme === 'light' ? lightColors : darkColors;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.3,
          growing: Math.random() > 0.5
        });
      }
    };

    // Update particles
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Pulse animation
        if (particle.growing) {
          particle.size += 0.03;
          if (particle.size > 5) {
            particle.growing = false;
          }
        } else {
          particle.size -= 0.03;
          if (particle.size < 1) {
            particle.growing = true;
          }
        }

        // Gravitational pull to mouse
        const dx = mousePositionRef.current.x - particle.x;
        const dy = mousePositionRef.current.y - particle.y;
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 50);
        
        // Apply gravitational pull
        if (distance < 180) {
          const forceX = dx / (distance * 7);
          const forceY = dy / (distance * 7);
          particle.speedX += forceX;
          particle.speedY += forceY;
          
          // Increase opacity when near mouse
          particle.opacity = Math.min(0.9, particle.opacity + 0.02);
        } else {
          // Decrease opacity when away from mouse
          particle.opacity = Math.max(0.3, particle.opacity - 0.01);
        }
        
        // Limit speed
        const maxSpeed = 2.5;
        const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (currentSpeed > maxSpeed) {
          const ratio = maxSpeed / currentSpeed;
          particle.speedX *= ratio;
          particle.speedY *= ratio;
        }
      });
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const rgbaColor = particle.color.startsWith('#') 
          ? hexToRgba(particle.color, particle.opacity)
          : particle.color;
        ctx.fillStyle = rgbaColor;
        ctx.fill();
      });

      // Draw connections between nearby particles
      ctx.beginPath();
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            const alpha = 1 - distance / 120;
            ctx.strokeStyle = theme === 'light' 
              ? `rgba(59, 130, 246, ${alpha * 0.2})` 
              : `rgba(96, 165, 250, ${alpha * 0.3})`;
            ctx.lineWidth = 0.5;
          }
        }
      }
      ctx.stroke();
    };

    // Utility to convert hex to rgba
    const hexToRgba = (hex: string, opacity: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    // Setup
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
