import React from 'react';
import { Phone, ArrowDown, Truck, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { COMPANY_INFO, JUICES } from '../data/juices';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenQuickAdd: (juiceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu, onOpenQuickAdd }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    '¡Hola Sabor Tropical! Me gustaría hacer un pedido de jugos naturales para entrega a domicilio en Santo Domingo Oeste.'
  )}`;

  const heroJuices = JUICES.slice(0, 6);

  return (
    <section id="hero" className="relative bg-[#FFFBEB] pt-8 pb-12 sm:pt-12 sm:pb-20 overflow-hidden">
      {/* Decorative SVG Tropical Leaves background pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location & Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D9F99D] border border-[#84CC16] text-[#365314] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 w-fit shadow-sm">
              <span className="text-sm">📍</span>
              <span>Santo Domingo Oeste, República Dominicana</span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-[#166534] italic">
              100% NATURAL,<br />
              <span className="text-[#F59E0B] not-italic drop-shadow-sm">100% DOMINICANO</span>
            </h2>

            {/* Paragraph */}
            <p className="text-lg sm:text-xl font-medium text-emerald-950/80 mb-8 max-w-2xl leading-relaxed">
              Disfruta la frescura auténtica de nuestras tierras. Preparamos jugos artesanales de{' '}
              <strong className="text-[#166534] font-black">Cereza, Piña, Remolacha, Chinola, Tamarindo, Fruit Punch, Limón, Mango</strong> y más. Sin conservantes, sin colorantes artificiales.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-center cursor-pointer group"
              >
                <span>Pedir por WhatsApp</span>
                <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
              </a>

              <button
                onClick={onScrollToMenu}
                className="bg-white border-4 border-[#166534] text-[#166534] hover:bg-emerald-50 px-8 py-4 rounded-2xl font-black text-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Menú y Precios</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>

            {/* Trust Pills Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-emerald-900/5 border border-emerald-800/10 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#F59E0B] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                  🇩🇴
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-emerald-900/60 leading-none">Cosecha</p>
                  <p className="text-xs font-black text-[#166534]">100% Local RD</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-emerald-900/60 leading-none">Entregas</p>
                  <p className="text-xs font-black text-[#166534]">En SDO a Domicilio</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#EC4899] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-emerald-900/60 leading-none">Calidad</p>
                  <p className="text-xs font-black text-[#166534]">Cero Aditivos</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Fruit Cards Collage */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-amber-100/60 p-6 rounded-3xl border-2 border-amber-200/80 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-xs uppercase tracking-widest text-[#92400E] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Los Más Pedidos de Hoy</span>
                </h3>
                <span className="text-[11px] font-extrabold text-emerald-800 bg-[#D9F99D] px-2.5 py-0.5 rounded-full">
                  Recién Exprimidos
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {heroJuices.map((juice) => (
                  <div
                    key={juice.id}
                    onClick={() => onOpenQuickAdd(juice.id)}
                    className={`${juice.colorBg} p-3.5 rounded-2xl flex flex-col items-center text-center border ${juice.borderColor} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden`}
                  >
                    <div className="text-4xl mb-1 group-hover:scale-110 transition-transform">
                      {juice.emoji}
                    </div>
                    <span className="font-black text-xs uppercase text-slate-900 leading-tight">
                      {juice.name.replace('Jugo de ', '')}
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 mt-1">
                      Desde RD${juice.prices.size16oz}
                    </span>
                    <div className="mt-2 text-[9px] font-black bg-white/90 text-emerald-800 px-2 py-0.5 rounded-full uppercase tracking-wider group-hover:bg-[#166534] group-hover:text-white transition-colors">
                      Pedir 🛒
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-white/80 rounded-2xl border border-amber-200 text-center">
                <p className="text-xs font-extrabold text-[#78350F] flex items-center justify-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                  <span>¿Prefieres sin azúcar añadida o con miel? ¡Lo hacemos como a ti te gusta!</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
