import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contentData from "@/content.json";
import { Film, Lightbulb, Sparkles, Play, Monitor, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featureIcons = [Film, Lightbulb, Sparkles];
const techIcons = [Monitor, Cpu, Play];

export const SignatureExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    const visual = visualRef.current;
    const particles = particlesRef.current;
    const steps = stepsRef.current;

    // Create floating light particles
    const createLightParticle = () => {
      if (!particles) return;
      
      const particle = document.createElement("div");
      particle.className = "light-particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 3 + "s";
      
      particles.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 4000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createLightParticle, 600);
    
    // Main timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          // Enhanced particle creation on enter
          for (let i = 0; i < 3; i++) {
            setTimeout(createLightParticle, i * 200);
          }
        }
      }
    });

    // Visual container breathing effect
    if (visual) {
      tl.to(visual, {
        boxShadow: "0 0 60px rgba(184, 115, 51, 0.4), 0 0 120px rgba(184, 115, 51, 0.2)",
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    // Steps lighting sequence
    if (steps) {
      const stepElements = steps.querySelectorAll('.step-item');
      
      // Staggered glow effect
      tl.to(stepElements, {
        boxShadow: "0 0 20px rgba(245, 185, 66, 0.6)",
        backgroundColor: "rgba(245, 185, 66, 0.1)",
        borderColor: "rgba(245, 185, 66, 0.4)",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=1");
    }

    // Feature cards entrance
    const featureCards = section.querySelectorAll('.feature-card');
    gsap.from(featureCards, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true
      }
    });

    return () => {
      clearInterval(particleInterval);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="signature-experience" 
      className="py-32 bg-gradient-to-br from-charcoal via-smoke to-charcoal relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div ref={particlesRef} className="light-particles absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header y canvas en dos columnas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Canvas interattivo con escalera 3D */}
          <div>
            <div className="eyebrow mb-6 text-copper">Tecnología Inmersiva</div>
            <div 
              ref={visualRef}
              className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-charcoal shadow-dramatic"
            >
              {/* Overlay gradients per depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-copper/10" />
              
              {/* Escalera simulata con steps animati */}
              <div ref={stepsRef} className="absolute bottom-0 left-0 right-0 h-full perspective-1000">
                <div className="relative h-full transform-gpu perspective-origin-bottom">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="step-item absolute left-1/2 transform -translate-x-1/2 bg-slate-800/60 border border-slate-600 rounded-lg transition-all duration-500"
                      style={{
                        bottom: `${i * 12}%`,
                        width: `${80 - i * 5}%`,
                        height: '8%',
                        transform: `translateX(-50%) rotateX(${i * 2}deg)`,
                        zIndex: 8 - i
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-gold/20 via-copper/10 to-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Logo LEGNA che emerge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 legna-emerge">
                <div className="font-display text-4xl font-medium text-cream tracking-wider opacity-30">
                  <span className="text-cream">L</span>
                  <span className="text-gold">E</span>
                  <span className="text-cream">G</span>
                  <span className="text-cream">N</span>
                  <span className="text-copper">A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6">
            <div className="eyebrow text-copper">Signature Experience</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-cream leading-tight">
              Firma Visual — de la brasa a la luz
            </h2>
            <p className="text-large text-cream/80 leading-relaxed">
              Escalera inmersiva con proyección de brasa y túnel de luz cálida. 
              Un pasage sensorial que te invita al privé.
            </p>
            <p className="text-cream/60 leading-relaxed">
              Tecnología audiovisual de última generación crea un corredor sensorial único. 
              Proyecciones mapping 6K-8K transforman cada paso en un viaje a través de la brasa italiana,
              desde la llama ardiente hasta la luz dorada del privé.
            </p>
          </div>
        </div>

        {/* Video e foto tunnel immersivo - extended layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Video */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-dramatic">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/tunnel_immersivo.png"
            >
              <source src="/tunnel-immersivo.mp4" type="video/mp4" />
              <img 
                src="/tunnel_immersivo.png"
                alt="Tunnel immersivo LEGNA con proyección de brasa y LED"
                className="w-full h-full object-cover"
              />
            </video>
            
            {/* Fallback image for low-end devices */}
            <img 
              src="/tunnel_immersivo.png"
              alt="Tunnel immersivo LEGNA con proyección de brasa y LED"
              className="absolute inset-0 w-full h-full object-cover md:hidden"
            />
          </div>

          {/* Foto tunnel */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-dramatic">
            <img 
              src="/tunnel_immersivo.png"
              alt="Tunnel immersivo LEGNA - vista statica dettagliata"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
          </div>
        </div>



        {/* Especificaciones técnicas y números - dos columnas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Tech specs indicators */}
          <div>
            <div className="eyebrow mb-4 text-copper">Especificaciones</div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Monitor, label: "6K-8K", desc: "Proyección" },
                { icon: Cpu, label: "2200K", desc: "LED Cálidos" },
                { icon: Play, label: "30-45s", desc: "Loop Video" }
              ].map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <div key={index} className="bg-smoke/30 border border-slate-600 rounded-2xl p-4 text-center backdrop-blur-sm">
                    <IconComponent className="w-6 h-6 text-gold mx-auto mb-2" />
                    <div className="text-cream font-semibold text-sm">{spec.label}</div>
                    <div className="text-slate-400 text-xs">{spec.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resumen técnico */}
          <div className="bg-gradient-to-r from-gold/5 to-copper/5 border border-gold/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span className="text-xs font-semibold text-gold tracking-wider uppercase">RESUMEN TÉCNICO</span>
            </div>
            <p className="text-cream/90 mb-4">{contentData.signatureExperience.specs}</p>
            <p className="text-cream/60 text-sm italic leading-relaxed">
              {contentData.signatureExperience.note} Sistema diseñado para maximizar 
              el engagement digital y crear momentos virales para redes sociales.
            </p>
          </div>
        </div>

        {/* Exterior facade projection view - full width */}
        <div className="mt-12">
          <div className="eyebrow mb-6 text-copper">Vista Exterior</div>
          <div className="relative h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal to-smoke shadow-dramatic">
            <img 
              src="/exterior-projection.png"
              alt="Proyección exterior LEGNA - vista facciata con tecnología immersiva"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-cream/90 text-lg font-medium mb-2">
                Proyección exterior integrada con arquitectura urbana
              </p>
              <p className="text-cream/60 text-sm">
                Sistema seamless interno-externo para continuidad de experiencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};