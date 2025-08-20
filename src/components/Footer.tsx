export const Footer = () => {
  const handleSocialClick = (network: string) => {
    window.dataLayer?.push({
      event: "social_click",
      network: network.toLowerCase(),
      location: "footer"
    });
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal to-smoke text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-20">
          <div className="text-center space-y-12">
            {/* Brand */}
            <div>
              <div className="font-display text-4xl md:text-5xl font-medium text-cream mb-4 tracking-tight">
                <span className="text-cream">L</span>
                <span className="text-gold">E</span>
                <span className="text-cream">G</span>
                <span className="text-cream">N</span>
                <span className="text-copper">A</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                <p className="font-accent text-xl text-cream/90 italic">
                  by Gino's Padova
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              </div>
              <p className="font-accent text-lg text-cream/70 italic">
                la brasa que une — La brace che unisce
              </p>
            </div>

            {/* Hashtags */}
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-gold/10 border border-gold/20 rounded-full text-sm font-medium text-gold">
                #ComparteLaBrasa
              </span>
              <span className="px-6 py-3 bg-copper/10 border border-copper/20 rounded-full text-sm font-medium text-copper">
                #LEGNACaracas
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8">
              <a
                href="https://instagram.com/legna_caracas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("Instagram")}
                className="w-12 h-12 bg-cream/5 border border-cream/10 rounded-2xl flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@legnacaracas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("TikTok")}
                className="w-12 h-12 bg-cream/5 border border-cream/10 rounded-2xl flex items-center justify-center text-cream/60 hover:text-copper hover:border-copper/30 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Presentation Note */}
            <div className="border-t border-slate-600 pt-8">
              <p className="text-cream/50 text-sm mb-2">Investor presentation — contenido conceptual</p>
              <p className="text-cream/60 text-sm">&copy; 2024 LEGNA — by Gino's Padova. Tutti i diritti riservati.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};