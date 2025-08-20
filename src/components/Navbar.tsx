import { useState, useEffect } from "react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Visión", href: "#vision" },
  { label: "Brasa", href: "#brace" },
  { label: "Cocina", href: "#cocina" },
  { label: "Vino", href: "#wine" },
  { label: "Comunidad", href: "#community" },
  { label: "Firma Visual", href: "#signature-experience" },
  { label: "Club", href: "#club" },
  { label: "Marketing", href: "#marketing" },
  { label: "Team", href: "#team" },
  { label: "Brand Identity", href: "#brand-identity" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(href);
      
      // Analytics tracking
      window.dataLayer?.push({
        event: "nav_click",
        section: href.replace("#", "")
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-cream/95 backdrop-blur-lg shadow-soft border-b border-slate-200" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Modern Logo */}
          <div 
            className={`font-display text-2xl font-medium cursor-pointer transition-all duration-300 hover:text-gold flex items-center gap-2 ${
              isScrolled ? "text-charcoal" : "text-cream"
            }`}
            onClick={() => handleNavClick("#hero")}
          >
            <span className="relative">
              L
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold opacity-0 hover:opacity-100 transition-opacity"></span>
            </span>
            <span className="text-gold">E</span>
            <span>G</span>
            <span>N</span>
            <span className="text-copper">A</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-gold ${
                  activeSection === item.href 
                    ? "text-gold" 
                    : isScrolled ? "text-charcoal" : "text-cream"
                }`}
              >
                {item.label}
                {/* Gold indicator */}
                <span 
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden hover:text-gold transition-colors p-2 ${
              isScrolled ? "text-charcoal" : "text-cream"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu" 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-[400px] opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-cream/98 backdrop-blur-md border-t border-slate-200 py-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg mx-2 ${
                    activeSection === item.href 
                      ? "text-gold bg-gold/10" 
                      : "text-charcoal hover:bg-slate-100 hover:text-gold"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};