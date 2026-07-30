import React from 'react';
import { COMPANY_INFO } from '../data/juices';
import { MapPin, Phone, Clock, Heart, ShieldCheck, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    '¡Hola Sabor Tropical! Quisiera hacer un pedido.'
  )}`;

  return (
    <footer className="bg-[#166534] text-white pt-12 pb-8 border-t-4 border-[#F59E0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Features Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-emerald-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl shadow-inner">
              🚛
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-amber-300 tracking-widest">
                Entregas a Domicilio
              </p>
              <p className="font-bold text-sm text-white">
                Santo Domingo Oeste y zonas aledañas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl shadow-inner">
              🇩🇴
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-amber-300 tracking-widest">
                Origen Certificado
              </p>
              <p className="font-bold text-sm text-white">
                100% Frutas de República Dominicana
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl shadow-inner">
              🌿
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-amber-300 tracking-widest">
                Frescura Garantizada
              </p>
              <p className="font-bold text-sm text-white">
                Sin preservantes ni aditivos químicos
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner">
                🍹
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">
                SABOR TROPICAL
              </h3>
            </div>
            <p className="text-xs text-emerald-100 font-medium leading-relaxed max-w-sm">
              Empresa dominicana dedicada a la elaboración y distribución de jugos 100% naturales con frutas criollas cosechadas en nuestra tierra. Llevamos salud y vitalidad a cada hogar de Santo Domingo Oeste.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700 w-fit">
              <span>📍 {COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Menu Juices Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
              Sabor de la Casa
            </h4>
            <ul className="text-xs font-semibold text-emerald-100 space-y-2">
              <li>• Jugo de Cereza Criolla</li>
              <li>• Jugo de Piña Pan de Azúcar</li>
              <li>• Jugo de Remolacha Nutritivo</li>
              <li>• Jugo de Chinola Dominicana</li>
              <li>• Jugo de Tamarindo & Fruit Punch</li>
              <li>• Limonada y Jugo de Mango</li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
              Contacto Directo y Pedidos
            </h4>
            <p className="text-xs text-emerald-100 font-medium">
              Realiza tu pedido o consulta por nuestro canal oficial de WhatsApp:
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: +1 829-726-9955</span>
            </a>

            <div className="text-xs text-emerald-200 space-y-1 pt-2">
              <p className="flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Horario: Lunes a Domingo de 7:00 AM a 7:00 PM</span>
              </p>
              <p className="flex items-center gap-1.5 font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Ubicación: Santo Domingo Oeste, RD</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-700/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-200/80 font-medium gap-2">
          <p>© {new Date().getFullYear()} Sabor Tropical. Todos los derechos reservados. Santo Domingo Oeste, República Dominicana.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con amor dominicano</span>
            <Heart className="w-3 h-3 text-red-400 fill-current" />
            <span>100% Cosecha Local</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
