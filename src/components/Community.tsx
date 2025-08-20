export const Community = () => {
  const pillars = [
    {
      title: "Mesa social",
      description: "Platos diseñados para compartir, conversaciones que fluyen"
    },
    {
      title: "Rituales en mesa",
      description: "Servicio informal-cuidado, cada momento pensado"
    },
    {
      title: "Domenica LEGNA",
      description: "Domingos de brasa y vino, tradición italiana en Caracas"
    }
  ];

  return (
    <section id="community" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-carbon">
            Compartir es nuestro menú
          </h2>
          
          <p className="text-xl text-iron max-w-3xl mx-auto font-light">
            Platos al centro, servicio informal-cuidado, brindis entre desconocidos. 
            En LEGNA, la comunidad se construye alrededor del fuego.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-ember rounded-full mx-auto flex items-center justify-center shadow-ember group-hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl text-wood">
                    {index === 0 && "🍽️"}
                    {index === 1 && "🤝"}
                    {index === 2 && "🍷"}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4 text-carbon">
                {pillar.title}
              </h3>
              
              <p className="text-iron leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-display italic text-ember max-w-2xl mx-auto">
            "La mesa italiana no es solo comida, es familia"
          </blockquote>
          <p className="text-iron mt-4">— Tradición que traemos a Caracas</p>
        </div>
      </div>
    </section>
  );
};