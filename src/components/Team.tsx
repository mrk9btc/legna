import { BadgeCheck, GraduationCap, HeartHandshake, ChefHat, FlameKindling, UtensilsCrossed, Wine, Users2, Sparkles } from "lucide-react";

const staffIconMap = {
  BadgeCheck,
  GraduationCap,
  HeartHandshake
};

const roleIconMap = {
  ChefHat,
  FlameKindling,
  UtensilsCrossed,
  Wine,
  Users2,
  Sparkles
};

const teamRoles = [
  {
    icon: "ChefHat",
    title: "Executive Chef",
    description: "Dirección culinaria y brasa; diseño de menú; control de calidad y compras clave.",
    label: "Residencia: italiana"
  },
  {
    icon: "FlameKindling",
    title: "Chef",
    description: "Ejecución de partida caliente y parrilla; coordinación de pase y tiempos.",
    label: "Residencia: italiana"
  },
  {
    icon: "UtensilsCrossed",
    title: "Sous Chef",
    description: "Organización de mise en place; turnos y sustitución operativa del chef.",
    label: "Residencia: italiana"
  },
  {
    icon: "Wine",
    title: "Sommelier",
    description: "Selección y rotación de carta italiana; decantación y maridajes en sala.",
    label: "Residencia: italiana"
  },
  {
    icon: "Users2",
    title: "Head Camarero",
    description: "Ritmo de sala y estándares de servicio; formación on-shift del equipo.",
    label: "Residencia: italiana"
  },
  {
    icon: "Sparkles",
    title: "Club Manager",
    description: "Operativa del privè/club; booking de mesas; coordinación AV y bar.",
    label: "Residencia: italiana"
  }
];

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
    <section id="team" className="py-24 bg-gradient-to-b from-pearl to-cream">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="eyebrow mb-4 text-copper">Maestria Italiana</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-charcoal mb-8 leading-tight">
            Nuestro equipo italiano
          </h2>
          <p className="text-large text-ash max-w-4xl mx-auto leading-relaxed">
            Equipo residente: Executive Chef, Chef, Sous Chef, Sommelier, Head Camarero y Club Manager. 
            Formación del staff local en servicio, brasa y vino.
          </p>
        </div>

        {/* Italian Team Roles - Premium Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamRoles.map((role, index) => (
            <div 
              key={index} 
              className="bg-cream border border-slate-200 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="text-center">
                <h3 className="font-display text-xl font-medium text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {role.title}
                </h3>
                
                <p className="text-ash leading-relaxed mb-6">
                  {role.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
                  <span className="text-xs uppercase tracking-wider text-slate-600 font-medium">
                    {role.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Staff Section - Elevated Panel */}
        <div className="bg-gradient-to-br from-charcoal to-smoke rounded-3xl p-12 shadow-dramatic">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4 text-gold">STAFF LOCAL</div>
            <h3 className="font-display text-2xl font-medium text-cream">
              Formación y Excelencia
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
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
        <div className="grid md:grid-cols-4 gap-8 mt-16 mb-16">
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
        <div className="text-center mt-20">
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
        <div className="bg-gradient-to-r from-slate-50 to-cream rounded-3xl p-12 mt-16">
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