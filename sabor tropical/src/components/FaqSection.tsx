import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/juices';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Los jugos son realmente 100% naturales?',
      a: '¡Totalmente! Todos nuestros jugos se preparan con frutas y vegetales frescos de agricultores dominicanos (Cotuí, Constanza, Baní, Monte Plata, etc.). No agregamos concentrados químicos, saborizantes sintéticos ni colorantes.'
    },
    {
      q: '¿Cómo puedo pedir jugos con poca azúcar o sin azúcar añadida?',
      a: 'Al momento de hacer tu pedido por el sitio web o por WhatsApp, puedes indicarnos la preferencia de dulzura: "Sin azúcar añadida", "Con miel natural" o "Dulzura normal". Preparamos tu envase tal como lo solicitas.'
    },
    {
      q: '¿A qué sectores de Santo Domingo Oeste entregan a domicilio?',
      a: 'Cubrimos Las Caobas, Herrera, Manoguayabo, Alameda, Prolongación 27 de Febrero, Bayona, El Café, KM 12 de Luperón y zonas aledañas. Hacemos envíos rápidos en bolsas térmicas.'
    },
    {
      q: '¿Tienen presentaciones familiares o en galones para eventos?',
      a: 'Sí, disponemos de envases de 16 oz, 32 oz (1 Litro) y Galones completos. Los galones son ideales para desayunos familiares, reuniones, empresas o fiestas. También ofrecemos descuentos por compras al por mayor.'
    },
    {
      q: '¿Cuánto tiempo duran los jugos en la nevera?',
      a: 'Al ser 100% naturales sin conservantes artificiales, recomendamos mantenerlos bien fríos en nevera y consumirlos dentro de las 48 a 72 horas para disfrutar del máximo sabor y valor nutricional.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-white border-t border-amber-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#F59E0B] text-[#92400E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#166534] tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-slate-600 font-medium text-sm mt-2">
            Respuestas a las dudas más comunes sobre nuestros jugos y envíos en Santo Domingo Oeste.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-amber-200/80 rounded-2xl overflow-hidden transition-all bg-[#FFFBEB]/50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-black text-slate-900 text-sm sm:text-base hover:bg-amber-100/50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-amber-600">❓</span>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-700 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-medium text-slate-700 border-t border-amber-200/60 leading-relaxed bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-10 p-6 bg-amber-100 border border-amber-300 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-black text-slate-900 text-base">
              ¿Tienes otra pregunta sobre combinaciones o precios?
            </h4>
            <p className="text-xs text-amber-900 font-semibold mt-0.5">
              Estamos en WhatsApp listos para atenderte inmediatamente.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hola%20Sabor%20Tropical%2C%20tengo%20una%20pregunta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar en WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
