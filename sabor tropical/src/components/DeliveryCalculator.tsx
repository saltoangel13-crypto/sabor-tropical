import React, { useState } from 'react';
import { DELIVERY_ZONES, COMPANY_INFO } from '../data/juices';
import { MapPin, Clock, Truck, Phone, Search, Navigation } from 'lucide-react';

export const DeliveryCalculator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<typeof DELIVERY_ZONES[0] | null>(DELIVERY_ZONES[0]);

  const filteredZones = DELIVERY_ZONES.filter((z) =>
    z.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="entregas" className="py-16 bg-[#FFFBEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D1FAE5] border border-[#10B981] text-[#065F46] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Cobertura de Entregas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#166534] tracking-tight">
            Entregas a Domicilio en Santo Domingo Oeste
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
            Llegamos a tu puerta bien fríos y en el menor tiempo posible. Consulta tu sector a continuación:
          </p>
        </div>

        {/* Interactive Zone Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Zone List */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border-2 border-amber-200 shadow-sm space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar tu sector (Ej. Las Caobas, Herrera, Manoguayabo)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* List */}
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {filteredZones.map((zone) => (
                <div
                  key={zone.name}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    selectedZone?.name === zone.name
                      ? 'border-[#166534] bg-emerald-50/80 shadow-xs'
                      : 'border-slate-100 hover:border-amber-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#92400E] flex items-center justify-center font-black">
                      🛵
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">
                        {zone.name}
                      </h4>
                      <p className="text-[11px] font-bold text-emerald-800">
                        {zone.zone}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-[#166534] block">
                      Tarifa: {zone.fee}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {zone.estimate}
                    </span>
                  </div>
                </div>
              ))}

              {filteredZones.length === 0 && (
                <div className="text-center py-8 text-slate-500 text-xs font-bold">
                  No encontramos sectores con ese nombre. ¡Escríbenos a WhatsApp para consultar tu calle!
                </div>
              )}
            </div>
          </div>

          {/* Right Selected Zone Card & Direct Action */}
          <div className="lg:col-span-5 bg-[#166534] text-white p-6 sm:p-8 rounded-3xl shadow-lg border-4 border-amber-400 space-y-6">
            <div className="flex items-center gap-3 border-b border-emerald-700/80 pb-4">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                📍
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-200">
                  Sector Seleccionado
                </span>
                <h3 className="text-2xl font-black">
                  {selectedZone ? selectedZone.name : 'Santo Domingo Oeste'}
                </h3>
              </div>
            </div>

            {selectedZone && (
              <div className="space-y-3 bg-emerald-900/40 p-4 rounded-2xl border border-emerald-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-200 font-bold">Tiempo estimado:</span>
                  <span className="font-black bg-[#BEF264] text-[#365314] px-2.5 py-0.5 rounded-full">
                    {selectedZone.estimate}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-200 font-bold">Costo de envío:</span>
                  <span className="font-black text-amber-300 text-sm">
                    {selectedZone.fee}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-200 font-bold">Estado de pedidos:</span>
                  <span className="font-bold text-emerald-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Abierto para pedidos hoy
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-xs text-emerald-100 font-medium">
                ¿Vives en una calle o residencial específico dentro de Santo Domingo Oeste? Escríbenos directamente para enviarte tu motorizado asignado.
              </p>

              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
                  `¡Hola Sabor Tropical! Quisiera pedir un jugo para entregar en el sector ${
                    selectedZone ? selectedZone.name : 'Santo Domingo Oeste'
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir a Domicilio en {selectedZone ? selectedZone.name : 'SDO'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
