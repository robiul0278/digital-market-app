'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export default function AnimatedText({ 
  children, 
  className, 
  delay = 0,
  duration = 1,
  staggerChildren = false,
  staggerDelay = 0.1
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (staggerChildren && textRef.current) {
        // Animate each child element with staggered timing
        gsap.fromTo(
          textRef.current.children,
          { 
            opacity: 0, 
            y: 30 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration, 
            stagger: staggerDelay,
            delay,
            ease: "power3.out"
          }
        );
      } else {
        // Animate the entire element
        gsap.fromTo(
          textRef.current,
          { 
            opacity: 0, 
            y: 30 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration, 
            delay,
            ease: "power3.out"
          }
        );
      }
    });
    
    return () => ctx.revert();
  }, [delay, duration, staggerChildren, staggerDelay]);

  return (
    <div ref={textRef} className={cn(className)}>
      {children}
    </div>
  );
}