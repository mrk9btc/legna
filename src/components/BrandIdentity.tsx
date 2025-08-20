import contentData from "@/content.json";
import { Check, X } from "lucide-react";

const paletteUsage = [
  "Colore principale per wordmark",
  "Accent color per interfacce",
  "Background per testi su chiaro",
  "Color cobre per accenti premium"
];

const typographySpecs = [
  { name: "Display", font: "Cormorant Garamond", weight: "500-600", usage: "Headings e wordmark" },
  { name: "Body", font: "Inter", weight: "400-600", usage: "Testi e interfacce" },
  { name: "Accent", font: "Crimson Text", weight: "400-600", usage: "Citazioni e decorazioni" }
];

const dosAndDonts = [
  { type: "do", text: "Rispetta le proporzioni originali" },
  { type: "dont", text: "Non stirare o deformare il logo" },
  { type: "dont", text: "Non applicare glow eccessivi" },
  { type: "dont", text: "Non usare gradienti non-brand" }
];

export const BrandIdentity = () => {
  return (
    <section id="brand-identity" className="py-24 bg-gradient-to-br from-charcoal to-smoke">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="eyebrow mb-4 text-gold">Design System</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-cream mb-8 leading-tight">
            {contentData.brandIdentity.title}
          </h2>
          <p className="text-large text-cream/70 max-w-3xl mx-auto">
            Identità visiva contemporanea che riflette l'eleganza culinaria italiana 
            e l'eccellenza del design internazionale.
          </p>
        </div>

        {/* 6 Cards Layout - Premium Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Wordmark Specimen */}
          <div className="bg-cream/10 border border-slate-600 rounded-3xl p-8 col-span-full lg:col-span-1 backdrop-blur-sm">
            <h3 className="font-display text-xl font-medium text-cream mb-8">Wordmark Specimen</h3>
            <div className="bg-cream p-8 rounded-2xl text-center mb-6">
              <div className="font-display text-4xl font-medium text-charcoal mb-3 tracking-tight">
                <span className="text-charcoal">L</span>
                <span className="text-gold">E</span>
                <span className="text-charcoal">G</span>
                <span className="text-charcoal">N</span>
                <span className="text-copper">A</span>
              </div>
              <div className="text-ash text-base relative">
                <span className="font-accent italic">by Gino's Padova</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[1px] bg-gold mt-2"></div>
              </div>
            </div>
          </div>

          {/* 2. Palette */}
          <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Palette</h3>
            <div className="space-y-4">
              {contentData.brandIdentity.palette.map((color, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-lg border border-[#2A2A2A]"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <div>
                    <div className="text-white text-sm font-medium">{color.name}</div>
                    <div className="text-gray-500 text-xs font-mono">{color.color}</div>
                    <div className="text-gray-500 text-xs">{paletteUsage[index] || "Uso generale"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Tipografia */}
          <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Tipografia</h3>
            <div className="space-y-4">
              {typographySpecs.map((spec, index) => (
                <div key={index} className="border-b border-[#2A2A2A] pb-3 last:border-b-0">
                  <div className="text-white font-medium text-sm">{spec.name}</div>
                  <div className="text-[#B87333] text-sm">{spec.font} {spec.weight}</div>
                  <div className="text-gray-500 text-xs">{spec.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Lockup & Varianti */}
          <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Lockup & Varianti</h3>
            <div className="space-y-4">
              {contentData.brandIdentity.usage.variants.map((variant, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg">
                  <span className="text-gray-300 text-sm capitalize">{variant}</span>
                  <div className="w-8 h-8 bg-[#B87333]/20 rounded border border-[#B87333]/30 flex items-center justify-center">
                    <span className="text-[#B87333] text-xs font-bold">L</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Clear-space & Min-size */}
          <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Clear-space & Min-size</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#1A1A1A] rounded-lg">
                <div className="text-[#B87333] text-sm font-medium mb-2">Clear Space</div>
                <div className="text-gray-300 text-sm">spazio = H di "L"</div>
                <div className="mt-3 text-xs text-gray-500">Mantieni sempre lo spazio libero equivalente all'altezza della "L"</div>
              </div>
              <div className="p-4 bg-[#1A1A1A] rounded-lg">
                <div className="text-[#B87333] text-sm font-medium mb-2">Min Size</div>
                <div className="text-gray-300 text-sm">min 24mm / 160px</div>
                <div className="mt-3 text-xs text-gray-500">Dimensione minima per leggibilità</div>
              </div>
            </div>
          </div>

          {/* 6. Do/Don't VISIVI */}
          <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Do/Don't</h3>
            <div className="space-y-3">
              {dosAndDonts.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                    item.type === "do" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {item.type === "do" ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <X className="w-3 h-3" />
                    )}
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};