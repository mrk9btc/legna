import contentData from "@/content.json";
import { Utensils, Bell } from "lucide-react";

export const Cocina = () => {
  return (
    <section id="cocina" className="py-24 bg-cream">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="eyebrow mb-4 text-copper">Inspiración Culinaria</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-charcoal mb-8 leading-tight">
            {contentData.cocina.title}
          </h2>
          <p className="text-large text-ash max-w-3xl mx-auto leading-relaxed">
            Platos icónicos que trascienden la técnica para convertirse en experiencia. 
            Cada preparación narra una historia de fuego, tiempo y precisión italiana.
          </p>
        </div>

        {/* Premium Gallery Layout - SENZA FILTRI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {contentData.cocina.inspo.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] shadow-medium hover:shadow-large transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Elegant caption on hover */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-cream text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rituales de servicio - Elevated Design */}
        <div className="bg-gradient-to-br from-charcoal to-smoke rounded-3xl p-12 text-center shadow-dramatic">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="flex items-center gap-3">
              <Utensils className="w-6 h-6 text-gold" />
              <Bell className="w-6 h-6 text-copper" />
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          
          <h3 className="font-display text-3xl md:text-4xl font-medium text-cream mb-6">
            {contentData.cocina.rituales.title}
          </h3>
          
          <p className="text-large text-cream/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            {contentData.cocina.rituales.description}
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-gold/10 border border-gold/20 rounded-full">
            <span className="text-gold font-medium italic">
              {contentData.cocina.rituales.note}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};