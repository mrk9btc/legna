import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Stairs = () => {
  const stairsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Track when stairs section is viewed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            window.dataLayer?.push({
              event: "stairs_view",
              location: "stairs_section"
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    if (stairsRef.current) {
      observer.observe(stairsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    const element = document.querySelector("#club");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    window.dataLayer?.push({
      event: "cta_click",
      location: "stairs_section",
      label: "unirte_club"
    });
  };

  return (
    <section 
      id="stairs" 
      ref={stairsRef}
      className="relative min-h-screen bg-gradient-to-b from-carbon via-iron to-carbon flex items-center justify-center overflow-hidden"
      data-stairs
    >
      {/* Background video fallback for mobile */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
          aria-label="Escalera con luz de brasa"
        >
          <source src="/assets/stairs-fallback.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Interactive stairs for desktop */}
      <div className="hidden md:block absolute inset-0">
        <div className="stairs-track relative w-full h-full flex items-center justify-center">
          {/* Steps */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="step absolute"
              data-step={i + 1}
              style={{
                left: `${20 + i * 8}%`,
                top: `${60 - i * 5}%`,
                transform: `rotate(${-15 + i * 2}deg)`,
              }}
            />
          ))}
          
          {/* Walls */}
          <div className="walls absolute inset-0" data-walls />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-custom">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-on-dark">
          La metamorfosis comienza aquí
        </h2>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light text-on-dark-muted">
          No es una escalera: es el umbral. La brasa pulsa. La luz respira. Arriba, la noche.
        </p>
        
        <p className="text-lg font-display italic text-copper mb-8">
          "La scala non conduce: inizia la metamorfosi."
        </p>
        
        <p className="text-sm text-on-dark-muted mb-12">
          Tu momento para Instagram vive aquí.
        </p>
        
        {/* LEGNA mark - will be animated */}
        <div className="legna-mark" aria-hidden="true">
          LEGNA
        </div>
        
        <Button 
          size="lg"
          className="bg-ember hover:bg-ember/90 text-on-dark shadow-glow px-8 py-3 text-lg font-medium mt-8"
          onClick={handleCTAClick}
          data-analytics="cta_click"
        >
          Unirte al club
        </Button>
      </div>
      
      {/* Ambient lighting effects */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ember/20 to-transparent pointer-events-none"></div>
    </section>
  );
};