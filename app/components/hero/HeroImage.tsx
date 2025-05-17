
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  animationDelay?: number;
}

export default function HeroImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  animationDelay = 0 
}: HeroImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, { 
        y: 50, 
        opacity: 0,
        scale: 1.1,
        rotate: gsap.utils.random(-5, 5)
      });
      
      gsap.to(imageRef.current, { 
        y: 0, 
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5, 
        delay: animationDelay,
        ease: "power3.out"
      });
      
      const randomDelay = gsap.utils.random(0, 2);
      const randomDuration = gsap.utils.random(3, 5);
      const randomY = gsap.utils.random(-8, 8);
      const randomRotate = gsap.utils.random(-3, 3);

      gsap.to(imageRef.current, {
        y: randomY,
        rotate: randomRotate,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: animationDelay + randomDelay
      });
    });
    
    return () => ctx.revert();
  }, [animationDelay]);

  return (
    <div 
      ref={imageRef} 
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60" />
      
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
    </div>
  );
}