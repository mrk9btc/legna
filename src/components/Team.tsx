import { BadgeCheck, GraduationCap, HeartHandshake } from "lucide-react";

const staffIconMap = {
  BadgeCheck,
  GraduationCap,
  HeartHandshake
};

const staffLocal = [
  {
    icon: "BadgeCheck",
    title: "Estándar de servicio",
    description: "Protocolo italiano adaptado a Caracas."
  },
  {
    icon: "GraduationCap",
    title: "Formación continua",
    description: "Workshops semanales con el equipo."
  },
  {
    icon: "HeartHandshake",
    title: "Cultura LEGNA",
    description: "Hospitalidad auténtica y detalle."
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-pearl to-cream">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="eyebrow mb-4 text-copper">Maestria Italiana</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-charcoal mb-8 leading-tight">
            Nuestro equipo italiano
          </h2>
          <p className="text-large text-ash max-w-4xl mx-auto leading-relaxed">
            Equipo residente: Executive Chef, Chef, Sous Chef, Sommelier, Head Camarero y Club Manager. 
            Formación del staff local en servicio, brasa y vino.
          </p>
        </div>

        {/* Local Staff Section - Elevated Panel */}
        <div className="bg-gradient-to-br from-charcoal to-smoke rounded-3xl p-8 md:p-12 shadow-dramatic">
          <div className="text-center mb-8 md:mb-12">
            <div className="eyebrow mb-4 text-gold">STAFF LOCAL</div>
            <h3 className="font-display text-2xl font-medium text-cream">
              Formación y Excelencia
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {staffLocal.map((feature, index) => {
              const IconComponent = staffIconMap[feature.icon as keyof typeof staffIconMap];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-lg font-medium text-cream mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-cream/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Números del equipo italiano */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-12">
          <div className="text-center">
            <div className="text-4xl font-display font-medium text-copper mb-2">15+</div>
            <p className="text-ash text-sm uppercase tracking-wider">Años experiencia promedio</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium text-copper mb-2">6</div>
            <p className="text-ash text-sm uppercase tracking-wider">Especialistas residentes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium text-copper mb-2">3</div>
            <p className="text-ash text-sm uppercase tracking-wider">Regiones italianas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium text-copper mb-2">200+</div>
            <p className="text-ash text-sm uppercase tracking-wider">Etiquetas seleccionadas</p>
          </div>
        </div>

        {/* Elegant Quote */}
        <div className="text-center mt-12 md:mt-20">
          <div className="max-w-3xl mx-auto">
            <blockquote className="font-accent text-2xl md:text-3xl italic text-copper leading-relaxed">
              "La mesa italiana no es solo comida, es familia"
            </blockquote>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-8 h-px bg-gold"></div>
              <p className="text-slate-500 font-medium">Filosofía del equipo LEGNA</p>
              <div className="w-8 h-px bg-gold"></div>
            </div>
          </div>
        </div>

        {/* Timeline esperienza italiana */}
        <div className="bg-gradient-to-r from-slate-50 to-cream rounded-3xl p-8 md:p-12 mt-12 md:mt-16">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4 text-copper">Trayectoria</div>
            <h3 className="font-display text-2xl font-medium text-charcoal">
              De Italia a Caracas
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-3 h-3 bg-copper rounded-full mx-auto mb-4"></div>
              <h4 className="font-display text-lg font-medium text-charcoal mb-3">Formación en Italia</h4>
              <p className="text-ash text-sm leading-relaxed">
                Escuelas culinarias de Emilia-Romagna, Toscana y Piemonte. 
                Técnicas tradicionales de brasa y servicio familiar.
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-4"></div>
              <h4 className="font-display text-lg font-medium text-charcoal mb-3">Experiencia Internacional</h4>
              <p className="text-ash text-sm leading-relaxed">
                Restaurantes estrella Michelin en Milano, Roma y Nueva York. 
                Adaptación de la tradición italiana a mercados globales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-ember rounded-full mx-auto mb-4"></div>
              <h4 className="font-display text-lg font-medium text-charcoal mb-3">LEGNA Caracas</h4>
              <p className="text-ash text-sm leading-relaxed">
                Fusión de tradición italiana con ingredientes y cultura venezolana. 
                Formación continua del equipo local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};