import React, { useState } from 'react';
import { Juice, COMPANY_INFO } from '../data/juices';
import { X, CheckCircle2, ShieldCheck, MapPin, ShoppingBag, Phone, Sparkles } from 'lucide-react';

interface JuiceModalProps {
  juice: Juice | null;
  onClose: () => void;
  onAddToCart: (juice: Juice, size: 'size16oz' | 'size32oz' | 'gallon', price: number, sweetness: string) => void;
}

export const JuiceModal: React.FC<JuiceModalProps> = ({
  juice,
  onClose,
  onAddToCart,
}) => {
  if (!juice) return null;

  const [selectedSize, setSelectedSize] = useState<'size16oz' | 'size32oz' | 'gallon'>('size16oz');
  const [sweetness, setSweetness] = useState<string>('Normal');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const price = juice.prices[selectedSize] * quantity;

  const sizeNames = {
    size16oz: '16 oz (Porción Personal)',
    size32oz: '32 oz (1 Litro Familiar)',
    gallon: '1 Galón (Presentación Especial / Fiesta)'
  };

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(juice, selectedSize, juice.prices[selectedSize], sweetness);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  const whatsappMessage = `¡Hola Sabor Tropical! Quisiera ordenar:\n- ${quantity}x ${juice.name}\n- Tamaño: ${sizeNames[selectedSize]}\n- Nivel de Dulzura: ${sweetness}\n- Total: RD$ ${price}\n- Ubicación para entrega: Santo Domingo Oeste.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className={`${juice.colorBg} p-6 border-b ${juice.borderColor} relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-md">
              {juice.emoji}
            </div>
            <div>
              <span className="inline-flex items-center gap-1 bg-[#166534] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1">
                <MapPin className="w-3 h-3" />
                Cosechado en {juice.origin}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {juice.name}
              </h2>
              <p className="text-xs font-bold text-amber-900/80">
                {juice.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
              Descripción del Jugo
            </h4>
            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              {juice.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#166534] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Beneficios para la Salud</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {juice.benefits.map((b, idx) => (
                <div key={idx} className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-emerald-950">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#92400E] mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Ingredientes 100% Naturales</span>
            </h4>
            <p className="text-xs font-bold text-amber-950">
              {juice.ingredients.join(' • ')}
            </p>
          </div>

          {/* Size & Options Selector */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Elige el Tamaño:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['size16oz', 'size32oz', 'gallon'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      selectedSize === s
                        ? 'border-[#166534] bg-[#166534] text-white shadow-md'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-black uppercase">
                      {s === 'size16oz' ? '16 oz' : s === 'size32oz' ? '32 oz (1L)' : 'Galón'}
                    </p>
                    <p className="text-sm font-extrabold mt-0.5">
                      RD$ {juice.prices[s]}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Sweetness Preference */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Preferencia de Dulzura:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Sin Azúcar Añadida', 'Normal', 'Con Miel Natural'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSweetness(opt)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                      sweetness === opt
                        ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <span className="text-xs font-black uppercase text-slate-700">Cantidad de Envases:</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white border border-slate-300 font-black text-slate-700 flex items-center justify-center hover:bg-slate-100"
                >
                  -
                </button>
                <span className="text-lg font-black text-slate-900 w-6 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white border border-slate-300 font-black text-slate-700 flex items-center justify-center hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Direct Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-500 block font-bold">Total estimado:</span>
            <span className="text-2xl font-black text-[#166534]">
              RD$ {price}
            </span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleAdd}
              className="flex-1 sm:flex-none bg-[#166534] hover:bg-[#14532d] text-white px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{added ? '¡Agregado!' : 'Al Pedido'}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Pedir Ya 📱</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
