import contentData from "@/content.json";

export const Marketing = () => {
  const pillars = [
    {
      icon: "🔥",
      label: "FOOD",
      description: "brasa"
    },
    {
      icon: "🍷",
      label: "WINE",
      description: "italiano"
    },
    {
      icon: "🎵",
      label: "CLUB",
      description: "nightlife"
    }
  ];

  const timeline = [
    {
      week: "−4",
      content: "Teaser \"La ciudad necesita fuego\""
    },
    {
      week: "−3",
      content: "Serie \"Del fuego al plato\" + \"Bottle of the week\""
    },
    {
      week: "−2",
      content: "Teaser escaleras (POV ascendente)"
    },
    {
      week: "−1",
      content: "Influencer preview dinner + PR local"
    }
  ];

  const handleSocialClick = (network: string) => {
    window.dataLayer?.push({
      event: "social_click",
      network: network.toLowerCase(),
      location: "marketing_section"
    });
  };

  return (
    <section id="marketing" className="py-20 bg-gradient-to-br from-iron via-carbon to-iron overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wood mb-6">
            {contentData.marketing.title}
          </h2>
          <p className="text-xl text-wood/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {contentData.marketing.management}
          </p>
          
          {/* Targets KPI */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {contentData.marketing.targets.map((target, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-display font-bold text-ember mb-2">
                  {target.value}
                </div>
                <div className="text-wood/70 text-sm">
                  {target.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-copper to-ember rounded-full mx-auto flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 mb-4">
                <span className="text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-wood">
                {pillar.label}
              </h3>
              <p className="text-wood/80">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Pre-opening timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8 text-wood">
            Pre-opening (4 semanas)
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-wood/10 rounded-lg p-6 shadow-elegant hover:bg-wood/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-ember rounded-full flex items-center justify-center text-wood font-bold text-lg mx-auto mb-4">
                    {item.week}
                  </div>
                  <p className="text-wood/80 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opening & Post-opening */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-wood/10 rounded-lg p-8 shadow-elegant">
            <h3 className="text-xl font-display font-semibold mb-4 text-wood">
              Opening
            </h3>
            <ul className="space-y-3 text-wood/80">
              <li>• Cobertura live en redes sociales</li>
              <li>• Filtro IG "glow brasa"</li>
              <li>• Pulseras NFC "IGNITE LEGNA"</li>
              <li>• Evento de prensa gastronómica</li>
            </ul>
          </div>
          
          <div className="bg-wood/10 rounded-lg p-8 shadow-elegant">
            <h3 className="text-xl font-display font-semibold mb-4 text-wood">
              Post-opening
            </h3>
            <ul className="space-y-3 text-wood/80">
              <li>• Chef talk semanal</li>
              <li>• Maridajes temáticos</li>
              <li>• DJ recap nocturno</li>
              <li>• UGC #ComparteLaBrasa</li>
            </ul>
          </div>
        </div>

        {/* Social CTA */}
        <div className="text-center mt-16">
          <p className="text-wood/80 mb-6">Síguenos para no perderte nada</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/legna_caracas"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("Instagram")}
              className="bg-gradient-to-r from-copper to-ember text-wood px-6 py-3 rounded-full font-medium hover:shadow-ember transition-all duration-300"
              data-analytics="social_click"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@legnacaracas"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("TikTok")}
              className="bg-carbon text-wood px-6 py-3 rounded-full font-medium hover:bg-iron transition-all duration-300"
              data-analytics="social_click"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};