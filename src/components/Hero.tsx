import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Create floating ember particles
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement("div");
      particle.className = "ember-particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = (4 + Math.random() * 4) + "s";
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 800);
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-smoke"></div>
      
      {/* Ember particles */}
      <div ref={particlesRef} className="ember-particles"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="eyebrow mb-8 text-copper">Caracas, muy pronto</div>
        
        {/* Modern Logo Design */}
        <div className="mb-12">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-medium text-cream mb-4 tracking-tight">
            <span className="relative inline-block">
              L
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 animate-pulse"></span>
            </span>
            <span className="text-gold">E</span>
            <span>G</span>
            <span>N</span>
            <span className="text-copper">A</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <p className="font-accent text-xl md:text-2xl text-cream/90 italic">
              by Gino's Padova
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
        
        <p className="font-accent text-2xl md:text-3xl mb-8 text-cream/80 italic leading-relaxed">
          la brasa que une — <span className="text-copper">La brace che unisce</span>
        </p>
        
        <p className="text-large mb-12 max-w-3xl mx-auto text-cream/75 font-light leading-relaxed">
          Cocina de brasa italiana, vino que cuenta historias y una noche que se transforma en club.
        </p>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-3 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-sm">
            <span className="text-gold font-medium">No es parrilla: es brasa fina</span>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-cream/50 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent"></div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};