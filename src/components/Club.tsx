import { Button } from "@/components/ui/button";
import contentData from "@/content.json";

export const Club = () => {
  const handleVIPClick = () => {
    window.dataLayer?.push({
      event: "cta_click",
      location: "club_section",
      label: "lista_privada"
    });
  };

  return (
    <section id="club" className="py-20 bg-gradient-to-br from-carbon via-iron to-carbon overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wood mb-6">
            {contentData.club.title}
          </h2>
          <p className="text-xl text-wood/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {contentData.club.description}
          </p>
          
          {/* Club Policy */}
          <div className="max-w-2xl mx-auto space-y-4 text-wood/90">
            <p className="text-lg">¿Cenaste con nosotros? Acceso al club <span className="font-semibold">gratis +3</span> invitados.</p>
            <p className="text-md">{contentData.club.rental}</p>
            <p className="text-md italic">{contentData.club.dressCode}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contentData.club.features.map((feature: string, index: number) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-ember rounded-full mx-auto flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 mb-4">
                <span className="text-2xl">
                  {index === 0 && "💡"}
                  {index === 1 && "🎵"}
                  {index === 2 && "🍸"}
                  {index === 3 && "🎧"}
                </span>
              </div>
              <p className="text-wood/70 font-medium text-sm">{feature}</p>
            </div>
          ))}
        </div>

        {/* Special Benefits */}
        <div className="bg-ember/10 rounded-lg p-8 mb-12 border border-ember/20">
          <div className="text-center">
            <h3 className="text-2xl font-display font-semibold text-wood mb-4">
              Beneficio exclusivo
            </h3>
            <p className="text-lg text-copper font-medium">
              Acceso exclusivo al club para comensales
            </p>
          </div>
        </div>

        {/* Rental Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-wood/5 rounded-lg p-8 border border-wood/10">
            <h3 className="text-xl font-display font-semibold mb-4 text-wood">
              Eventos Privados
            </h3>
            <p className="text-wood/80 mb-4">
              Sala VIP y Club disponibles para eventos privados (by request)
            </p>
            <ul className="space-y-2 text-wood/70 text-sm">
              <li>• Capacidad personalizable</li>
              <li>• Sistema audiovisual de última generación</li>
              <li>• Servicio gastronómico dedicado</li>
              <li>• Ambiente exclusivo</li>
            </ul>
          </div>
          
          <div className="bg-wood/5 rounded-lg p-8 border border-wood/10">
            <h3 className="text-xl font-display font-semibold mb-4 text-wood">
              Experiencias Visuales
            </h3>
            <p className="text-wood/80 mb-4">
              Efectos audiovisuales que transforman la noche
            </p>
            <ul className="space-y-2 text-wood/70 text-sm">
              <li>• Proyecciones interactivas</li>
              <li>• Paredes artísticas immersivas</li>
              <li>• Iluminación exterior espectacular</li>
              <li>• Photocall signature</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-ember hover:bg-ember/90 text-wood shadow-glow px-8 py-3 text-lg font-medium"
            onClick={handleVIPClick}
            data-analytics="cta_click"
          >
Acceso exclusivo · Lista reservada
          </Button>
        </div>




      </div>
    </section>
  );
};