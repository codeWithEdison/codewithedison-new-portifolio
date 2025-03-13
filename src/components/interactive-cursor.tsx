
import React, { useEffect, useState } from 'react';

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    const linkElements = document.querySelectorAll('a, button, [role="button"]');
    linkElements.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      linkElements.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  // Only show custom cursor on devices that support hover
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className={`pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference transition-transform duration-150 ease-out ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div 
          className={`relative h-6 w-6 rounded-full bg-white transition-all duration-300 ${
            clicked ? 'scale-75' : linkHovered ? 'scale-150' : 'scale-100'
          }`}
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        />
      </div>
    </>
  );
}
