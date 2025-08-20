import { Button } from "@/components/ui/button";
import contentData from "@/content.json";

export const Photocall = () => {
  const content = contentData as any;

  const handleShareClick = () => {
    window.dataLayer?.push({
      event: "social_engagement",
      location: "photocall_section",
      action: "share_moment"
    });
  };

  return (
    <section id="photocall" className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            {content.photoMoments.title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {content.photoMoments.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photocall Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-ember rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📸</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">
                  Área signature
                </h3>
                <p className="text-gray-300">
                  Espacio diseñado especialmente para capturar tu experiencia LEGNA
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-ember rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🦬</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">
                  Parete con mucca
                </h3>
                <p className="text-gray-300">
                  Gráfica artística italiana que celebra la tradición gastronómica
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-ember rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🪶</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">
                  Parete con ali
                </h3>
                <p className="text-gray-300">
                  Proyección interactiva que responde a tu presencia
                </p>
              </div>
            </div>

          </div>

          {/* Photocall visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-dramatic">
              <img 
                src="/img/photocall.png"
                alt="Photocall LEGNA - set Instagram-ready con brand identity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-cream font-display text-lg font-medium mb-2">
                  Instagram-ready moments
                </p>
                <p className="text-gold text-sm font-semibold">
                  #ComparteLaBrasa
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Photo Moments Features con MISURE */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {contentData.photoMoments.features.map((feature: any, index: number) => (
              <div key={index} className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-2xl p-6 transition-all duration-300 hover:border-[#B87333]/50">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 font-medium">
              {contentData.photoMoments.summary}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="outline"
              className="border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white px-8 py-3 transition-all duration-300"
              onClick={handleShareClick}
              data-analytics="social_engagement"
            >
              #ComparteLaBrasa
            </Button>
          </div>
      </div>
    </section>
  );
};