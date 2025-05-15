'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0 
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate card
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          delay,
          ease: "power3.out"
        }
      );
      
      // Animate icon with a slight delay
      gsap.fromTo(
        iconRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          rotate: -10
        },
        { 
          opacity: 1, 
          scale: 1,
          rotate: 0,
          duration: 0.6, 
          delay: delay + 0.3,
          ease: "back.out(1.7)"
        }
      );
    });
    
    return () => ctx.revert();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group p-6 rounded-2xl bg-card border border-primary/10 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "overflow-hidden relative",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        ref={iconRef}
        className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10"
      >
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
      
      {/* Decorative accent */}
      <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    </div>
  );
}