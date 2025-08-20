import contentData from "@/content.json";

export const Wine = () => {
  const handleWineCardClick = () => {
    window.dataLayer?.push({
      event: "wine_card_click",
      location: "wine_section"
    });
  };

  return (
    <section id="wine" className="py-20 bg-cream text-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            {contentData.wineProgram.title}
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-6">
            {contentData.wineProgram.description}
          </p>
          <div className="inline-block px-6 py-2 bg-gold/10 text-gold font-semibold rounded-full">
            {contentData.wineProgram.highlight}
          </div>
        </div>

        {/* Wine inspiration gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-dramatic">
            <img 
              src="/img/vini.jpeg"
              alt="Selezione vini italiani LEGNA - cantina curata"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-xl font-medium text-cream mb-2">
                Selezione Curata
              </h3>
              <p className="text-cream/80 text-sm">
                Oltre 200 etichette dalle migliori regioni d'Italia
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-dramatic">
            <img 
              src="/img/vini1.jpeg"
              alt="Degustazione vini italiani - esperienza sommelier LEGNA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-xl font-medium text-cream mb-2">
                Degustazione Guidata
              </h3>
              <p className="text-cream/80 text-sm">
                Esperienza sommelier con abbinamenti personalizzati
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {contentData.wine.map((wine, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-ember transition-all duration-300 cursor-pointer hover-ember group"
              onClick={handleWineCardClick}
            >
              {/* Wine bottle illustration */}
              <div className="mb-4 text-center">
                <div className="w-16 h-24 bg-gradient-to-b from-carbon to-iron rounded-full mx-auto relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-copper rounded-t"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-ember rounded group-hover:bg-copper transition-colors"></div>
                </div>
              </div>
              
              <h3 className="font-display font-semibold text-carbon mb-2 text-center">
                {wine.name}
              </h3>
              
              <p className="text-sm text-copper mb-3 text-center font-medium">
                {wine.region}
              </p>
              
              <p className="text-iron text-sm leading-relaxed text-center">
                {wine.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mini-mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          <div className="aspect-square rounded-lg overflow-hidden shadow-elegant transform rotate-2">
            <img
              src="https://source.unsplash.com/400x400/?decanter,wine"
              alt="Decantación de vino"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-elegant transform -rotate-1">
            <img
              src="https://source.unsplash.com/400x400/?wine,bottles"
              alt="Botellero premium"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-elegant transform rotate-1">
            <img
              src="https://source.unsplash.com/400x400/?sommelier,tasting"
              alt="Servicio de sommelier"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 text-center">
          <p className="text-iron italic">
            Sommelier italiano selecciona cada etiqueta, maridajes pensados para nuestra cocina de brasa
          </p>
        </div>


      </div>
    </section>
  );
};