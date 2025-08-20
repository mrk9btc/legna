export const Vision = () => {
  return (
    <section id="vision" className="py-32 bg-gradient-to-b from-cream to-pearl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="eyebrow mb-6 text-copper">La Filosofia</div>
          
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-12 text-charcoal leading-tight">
            Donde el fuego se convierte en comunidad
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="font-accent text-2xl md:text-3xl leading-relaxed text-ash italic">
              La brasa no corre, respira. Reúne. En LEGNA el fuego no quema: abraza.
            </p>
            
            <div className="flex items-center justify-center gap-6 my-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
            
            <p className="text-large text-ash font-light leading-relaxed mb-8">
              La mesa es un ritual, el vino nuestra lengua, Caracas la ciudad que encendemos.
            </p>
            
            <p className="text-large text-ash font-light leading-relaxed">
              Aquí, cada llama cuenta una historia. Cada plato es un encuentro. 
              Cada copa, una conversación que trasciende fronteras.
            </p>
          </div>
          
          {/* Elegant decorative quote */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <blockquote className="font-accent text-xl italic text-copper">
              "Il fuoco unisce, la tavola accoglie, la tradizione ci guida"
            </blockquote>
            <p className="text-small text-slate-500 mt-2">— Filosofia LEGNA</p>
          </div>
        </div>
      </div>
    </section>
  );
};