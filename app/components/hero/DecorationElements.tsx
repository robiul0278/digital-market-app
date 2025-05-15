'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function DecorationElements() {
  const decorationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select all decoration elements
      const elements = decorationsRef.current?.querySelectorAll('.decoration-element');
      
      if (elements) {
        // Set initial state
        gsap.set(elements, { 
          opacity: 0, 
          scale: 0, 
          rotation: gsap.utils.random(-45, 45, 15)
        });
        
        // Animate in with stagger
        gsap.to(elements, { 
          opacity: 0.8,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          stagger: 0.15,
          delay: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
        
        // Add random floating animation to each element
        elements.forEach(el => {
          const xMovement = gsap.utils.random(10, 30);
          const yMovement = gsap.utils.random(10, 30);
          const duration = gsap.utils.random(3, 6);
          
          gsap.to(el, {
            x: `+=${xMovement}`,
            y: `+=${yMovement}`,
            rotation: gsap.utils.random(-10, 10),
            duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 2)
          });
        });
      }
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={decorationsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right decorations */}
      <div className="decoration-element absolute top-[10%] right-[15%] w-20 h-20 rounded-full bg-primary/5 blur-xl" />
      <div className="decoration-element absolute top-[20%] right-[25%] w-12 h-12 rounded-full bg-primary/10 blur-lg" />
      
      {/* Bottom left decorations */}
      <div className="decoration-element absolute bottom-[15%] left-[10%] w-16 h-16 rounded-full bg-primary/5 blur-xl" />
      <div className="decoration-element absolute bottom-[25%] left-[20%] w-10 h-10 rounded-full bg-primary/10 blur-lg" />
      
      {/* Center decorations */}
      <div className="decoration-element absolute top-[40%] left-[50%] w-24 h-24 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 blur-2xl" />
      
      {/* Additional subtle elements */}
      <div className="decoration-element absolute top-[60%] right-[30%] w-14 h-14 rounded-full bg-primary/5 blur-xl" />
      <div className="decoration-element absolute bottom-[40%] right-[60%] w-16 h-16 rounded-full bg-primary/10 blur-xl" />
    </div>
  );
}