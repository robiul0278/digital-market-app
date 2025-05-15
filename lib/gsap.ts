'use client';

import { gsap } from 'gsap';

export const animateIn = (element: HTMLElement) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
  );
};

export const animateButton = (element: HTMLElement) => {
  return gsap.to(element, {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: 'power1.inOut',
  });
};

export const createConfetti = () => {
  const confettiCount = 100;
  const colors = ['#FE5568', '#4BB3FD', '#FFE63B', '#8AC53E', '#9B5DE5'];
  
  for (let i = 0; i < confettiCount; i++) {
    // Create a single confetti element
    const confetti = document.createElement('div');
    confetti.className = 'absolute w-2 h-2 rounded-full z-50';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);
    
    // Animate the confetti
    gsap.set(confetti, {
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 50,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 50,
    });
    
    gsap.to(confetti, {
      x: '+=' + (Math.random() - 0.5) * window.innerWidth * 0.8,
      y: window.innerHeight * 1.1,
      rotation: Math.random() * 360,
      duration: 2 + Math.random() * 2,
      ease: 'power1.out',
      onComplete: () => {
        document.body.removeChild(confetti);
      },
    });
  }
};