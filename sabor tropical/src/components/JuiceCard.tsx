import React, { useState } from 'react';
import { Juice, COMPANY_INFO } from '../data/juices';
import { Plus, Info, Check, MapPin, Sparkles } from 'lucide-react';

interface JuiceCardProps {
  juice: Juice;
  onSelectJuice: (juice: Juice) => void;
  onAddToCart: (juice: Juice, size: 'size16oz' | 'size32oz' | 'gallon', price: number) => void;
}

export const JuiceCard: React.FC<JuiceCardProps> = ({
  juice,
  onSelectJuice,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<'size16oz' | 'size32oz' | 'gallon'>('size16oz');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const sizeLabels = {
    size16oz: '16 oz (Individual)',
    size32oz: '32 oz (1 Litro)',
    gallon: 'Galón (Familiar)'
  };

  const handleAdd = () => {
    onAddToCart(juice, selectedSize, juice.prices[selectedSize]);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const directWhatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    `¡Hola Sabor Tropical! Quisiera ordenar 1 ${juice.name} (${sizeLabels[selectedSize]}) por RD$ ${juice.prices[selectedSize]}.`
  )}`;

  return (
    <div className={`bg-white rounded-3xl border-2 ${juice.borderColor} p-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-200 relative group overflow-hidden`}>
      {/* Top Banner Ribbon if Featured */}
      {juice.featured && (
        <div className="absolute top-3 right-3 bg-[#F59E0B] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>Favorito</span>
        </div>
      )}

      <div>
        {/* Header with Emoji & Origin */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`${juice.colorBg} w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner border ${juice.borderColor} group-hover:scale-110 transition-transform`}>
            {juice.emoji}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1 w-fit mb-1">
              <MapPin className="w-2.5 h-2.5" />
              {juice.origin.split(',')[0]}
            </span>
            <h3 className="text-xl font-black text-slate-900 leading-tight">
              {juice.name}
            </h3>
            <p className="text-xs font-semibold text-amber-900/70 mt-0.5">
              {juice.tagline}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {juice.description}
        </p>

        {/* Benefits Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {juice.benefits.slice(0, 2).map((benefit, i) => (
            <span
              key={i}
              className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1"
            >
              <Check className="w-2.5 h-2.5 text-emerald-600" />
              {benefit}
            </span>
          ))}
        </div>

        {/* Size Selection Tabs */}
        <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200 mb-4">
          <p className="text-[10px] font-black uppercase text-slate-500 mb-1 px-1">
            Selecciona el Tamaño:
          </p>
          <div className="grid grid-cols-3 gap-1 text-center">
            <button
              onClick={() => setSelectedSize('size16oz')}
              className={`py-1.5 px-1 rounded-lg text-xs font-black transition-all ${
                selectedSize === 'size16oz'
                  ? 'bg-[#166534] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              16 oz
              <span className="block text-[10px] font-normal opacity-90">RD$ {juice.prices.size16oz}</span>
            </button>

            <button
              onClick={() => setSelectedSize('size32oz')}
              className={`py-1.5 px-1 rounded-lg text-xs font-black transition-all ${
                selectedSize === 'size32oz'
                  ? 'bg-[#166534] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              32 oz (1L)
              <span className="block text-[10px] font-normal opacity-90">RD$ {juice.prices.size32oz}</span>
            </button>

            <button
              onClick={() => setSelectedSize('gallon')}
              className={`py-1.5 px-1 rounded-lg text-xs font-black transition-all ${
                selectedSize === 'gallon'
                  ? 'bg-[#166534] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Galón
              <span className="block text-[10px] font-normal opacity-90">RD$ {juice.prices.gallon}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">Precio actual:</span>
          <span className="text-xl font-black text-[#166534]">
            RD$ {juice.prices[selectedSize]}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {/* Details modal button */}
          <button
            onClick={() => onSelectJuice(juice)}
            className="col-span-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 transition-colors"
            title="Ver beneficios e ingredientes completos"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Detalles</span>
          </button>

          {/* Add to order button */}
          <button
            onClick={handleAdd}
            className={`col-span-3 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all ${
              addedAnimation
                ? 'bg-[#25D366] text-white scale-95'
                : 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Agregado!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>

        {/* Fast Order direct via WhatsApp */}
        <a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-[10px] font-black text-emerald-700 hover:text-emerald-900 underline mt-1"
        >
          Pedir este jugo directo por WhatsApp 📱
        </a>
      </div>
    </div>
  );
};
