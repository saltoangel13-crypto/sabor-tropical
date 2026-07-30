import React from 'react';
import { Sparkles, ShieldCheck, Heart, Leaf, Truck, RefreshCw } from 'lucide-react';

export const DominicanProcess: React.FC = () => {
  const pillars = [
    {
      icon: '🇩🇴',
      title: '100% Cosecha Dominicana',
      description: 'Apoyamos directamente a agricultores de Cotuí, Constanza, Baní, Monte Plata y el Cibao. Frutas seleccionadas a mano en su punto óptimo.',
      badge: 'Orgullo Nacional'
    },
    {
      icon: '🌿',
      title: 'Cero Preservantes Artificiales',
      description: 'Extracción natural en frío sin aditivos químicos, espesantes artificiales ni colorantes. El sabor real y saludable de la fruta viva.',
      badge: 'Saludable'
    },
    {
      icon: '❄️',
      title: 'Cadena de Frío e Higiene',
      description: 'Lavado profundo con agua purificada y embotellado hermético en frío para preservar vitaminas, enzimas y antioxidantes intactos.',
      badge: 'Máxima Calidad'
    },
    {
      icon: '🛵',
      title: 'Entrega Rápida en SDO',
      description: 'Enviamos tus jugos en bolsas térmicas bien fríos directamente a tu hogar, oficina o negocio en Santo Domingo Oeste.',
      badge: 'A Domicilio'
    }
  ];

  return (
    <section id="cosecha" className="py-16 bg-white border-y border-amber-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#F59E0B] text-[#92400E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Nuestra Cosecha Dominicana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#166534] tracking-tight">
            ¿Por qué Sabor Tropical es el preferido de Santo Domingo Oeste?
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
            No usamos concentrados ni polvos sintéticos. Cada sorbo es jugo puro exprimido del campo dominicano a tu mesa.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#FFFBEB] p-6 rounded-3xl border-2 border-amber-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{p.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#166534] text-white px-2.5 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200/60 flex items-center gap-2 text-[#166534] text-xs font-bold">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Garantía de Frescura</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#166534] to-[#14532d] text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#BEF264] text-[#365314] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block">
              Presentaciones Familiares e Industriales
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              ¿Tienes un evento, fiesta o cafetería en SDO?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Preparamos galones y pedidos especiales al por mayor con descuentos por volumen. ¡Contáctanos para presupuestos en minutos!
            </p>
          </div>

          <a
            href="https://wa.me/18297269955?text=Hola%20Sabor%20Tropical%2C%20quisiera%20cotizar%20jugos%20por%20galones%20para%20un%20evento%2Fnegocio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-md transition-all shrink-0 hover:scale-105"
          >
            Cotizar Galones en WhatsApp 📱
          </a>
        </div>

      </div>
    </section>
  );
};
