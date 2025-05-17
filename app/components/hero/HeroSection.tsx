
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import HeroImage from './HeroImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      gsap.fromTo(
        textContainerRef.current,
        {
          x: 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      const animateTextEls = textContainerRef.current?.querySelectorAll('.animate-text');
      if (animateTextEls) {
        gsap.fromTo(
          animateTextEls,
          {
            x: 50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            delay: 0.3
          }
        );
      }

      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 1.8,
          ease: "back.out(1.7)"
        }
      );
    });

    return () => ctx.revert();
  }, []);


  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden bg-background p-2"
    >
      {/* <DecorationElements /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4  p-6 lg:p-8 border-4 border-y-red-700 border-x-cyan-700 rounded-2xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:gap-12 lg:gap-12 gap-4">
          <div ref={textContainerRef} className="space-y-2 md:space-y-8  lg:space-y-8 text-center lg:text-left">
            <div className="animate-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Premium Digital Products
            </div>

            <div className="space-y-2">
              <h1 className="animate-text text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Elevate Your Digital Experience
                </span>
              </h1>

              <p className="animate-text md:text-xl lg:text-xl text-sm text-muted-foreground max-w-2xl">
                Discover our curated collection of premium digital services designed to enhance your productivity and creativity.
              </p>
            </div>

            <div ref={ctaRef} className="pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="relative h-[230px] md:h-[430px] lg:h-[430px] w-full max-w-lg">
            <div className="absolute inset-0 grid grid-cols-2 gap-2">
              <div className="space-y-6">
                <HeroImage
                  src="https://image.cnbcfm.com/api/v1/image/106199081-1571858526194gettyimages-887454120.jpeg?v=1701360669"
                  alt="Team collaboration"
                  priority={true}
                  className="h-[100px] md:h-[200px] lg:h-[200px]"
                  animationDelay={0.8}
                />
                <HeroImage
                  src="https://i.insider.com/5ddd41d5fd9db2334764cfd3?width=700"
                  alt="Creative workspace"
                       className="h-[100px] md:h-[200px] lg:h-[200px]"
                  animationDelay={1.0}
                />
              </div>
              <div className="space-y-2">
                <HeroImage
                  src="https://sadesign.ai/pictures/picfullsizes/2024/11/27/ijt1732694230.jpg"
                  alt="Digital innovation"
                       className="h-[100px] md:h-[200px] lg:h-[200px]"
                  animationDelay={1.2}
                />
                <HeroImage
                  src="https://gameloverbd.com/public/uploads/all/ME9lV1SHF38JjRVKWzETSECLuVDAIBYBHgcoVHLn.jpg"
                  alt="Modern technology"
                     className="h-[100px] md:h-[200px] lg:h-[200px]"
                  animationDelay={1.4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}