import contentData from "@/content.json";

export const Brace = () => {
  return (
    <section id="brace" className="py-20 bg-gradient-to-br from-carbon via-iron to-carbon overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wood mb-6">
            {contentData.brasa.title}
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {contentData.brasa.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-wood/80">
                <div className="w-2 h-2 bg-ember rounded-full"></div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual element */}
        <div className="relative max-w-lg mx-auto mb-12">
          <div className="aspect-square bg-gradient-to-br from-ember/20 to-copper/20 rounded-full flex items-center justify-center">
            <div className="aspect-square w-3/4 bg-gradient-to-br from-ember to-copper rounded-full flex items-center justify-center shadow-glow">
              <div className="text-wood text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="font-display font-semibold">BRASA</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-copper/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-ember/30 rounded-full animate-pulse delay-1000"></div>
        </div>




      </div>
    </section>
  );
};