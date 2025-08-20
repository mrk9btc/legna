import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion) {
    return; // Skip animations if user prefers reduced motion
  }

  // Initialize smooth scroll (optional - can be replaced with Lenis)
  const smoothScroll = () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // General section fade-in animations
  const initSectionAnimations = () => {
    document.querySelectorAll("section").forEach(section => {
      gsap.from(section.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true
        }
      });
    });
  };

  // Signature stairs animation
  const initStairsAnimation = () => {
    const stairsSection = document.querySelector("#stairs");
    if (!stairsSection) return;

    // Only run on desktop
    if (window.innerWidth < 768) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#stairs",
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // Track progress for analytics
          if (self.progress > 0.6 && !stairsSection.hasAttribute('data-viewed')) {
            stairsSection.setAttribute('data-viewed', 'true');
            window.dataLayer?.push({
              event: "stairs_view",
              location: "stairs_section",
              progress: self.progress
            });
          }
        }
      }
    });

    // Phase 1: Brasa (0→30%) - Steps glow
    timeline.to(".step", {
      boxShadow: "0 0 24px hsl(8 85% 54%)",
      backgroundColor: "hsl(8 85% 54%)",
      stagger: 0.06,
      duration: 1,
      ease: "power2.out"
    });

    // Phase 2: Respiro (30→70%) - Walls breathing effect
    timeline.to("[data-walls]", {
      backgroundPositionX: "80%",
      filter: "brightness(1.2) blur(1px)",
      duration: 1.5,
      ease: "sine.inOut"
    }, "<0.5");

    // Phase 3: Revel Logo (70→100%) - LEGNA emerges
    timeline.fromTo(".legna-mark", {
      opacity: 0,
      scale: 0.8,
      rotationY: 180
    }, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  };

  // Hero particle animation enhancement
  const initHeroAnimations = () => {
    const heroTitle = document.querySelector(".hero-glow");
    if (heroTitle) {
      gsap.to(heroTitle, {
        textShadow: "0 0 40px hsl(8 85% 54% / 0.8)",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }
  };

  // Wine cards hover enhancement
  const initWineCardAnimations = () => {
    document.querySelectorAll('.wine-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 10px 30px hsl(8 85% 54% / 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 4px 15px hsl(0 0% 7% / 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  };

  // Team cards stagger animation
  const initTeamAnimations = () => {
    const teamCards = document.querySelectorAll('#team .group');
    if (teamCards.length > 0) {
      gsap.from(teamCards, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#team",
          start: "top 70%",
          once: true
        }
      });
    }
  };

  // FAQ accordion animation
  const initFAQAnimations = () => {
    // This will be handled by the component's state, but we can add entrance animations
    const faqItems = document.querySelectorAll('#faq .bg-card');
    if (faqItems.length > 0) {
      gsap.from(faqItems, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#faq",
          start: "top 80%",
          once: true
        }
      });
    }
  };

  // Signature Experience enhanced animations
  const initSignatureAnimations = () => {
    const signatureSection = document.querySelector("#signature-experience");
    if (!signatureSection) return;

    // Enhanced scroll-triggered animations for the signature experience
    gsap.from(signatureSection.querySelectorAll('.tech-spec'), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: signatureSection,
        start: "top 75%",
        once: true
      }
    });

    // Logo emergence effect
    const legnaEmerge = signatureSection.querySelector('.legna-emerge');
    if (legnaEmerge) {
      gsap.from(legnaEmerge, {
        opacity: 0,
        scale: 0.8,
        rotationY: 180,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: signatureSection,
          start: "top 60%",
          once: true
        }
      });
    }
  };

  // Initialize all animations
  smoothScroll();
  initSectionAnimations();
  initStairsAnimation();
  initHeroAnimations();
  initWineCardAnimations();
  initTeamAnimations();
  initFAQAnimations();
  initSignatureAnimations();

  // Refresh ScrollTrigger on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};

// Cleanup function for component unmount
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};