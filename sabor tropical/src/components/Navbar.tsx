import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/juices';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'menu', label: 'Menú de Jugos' },
    { id: 'pedido', label: 'Hacer Pedido' },
    { id: 'cosecha', label: 'Nuestra Cosecha RD' },
    { id: 'entregas', label: 'Zonas de Entrega' },
    { id: 'faq', label: 'Preguntas' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    '¡Hola Sabor Tropical! Quisiera consultar sobre el menú de jugos naturales disponible hoy.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#F59E0B] shadow-md border-b border-[#D97706]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Title */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform">
              🍹
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-white drop-shadow-sm">
                SABOR TROPICAL
              </h1>
              <p className="text-[11px] font-bold text-amber-100 uppercase tracking-widest hidden sm:block">
                Santo Domingo Oeste • 100% Natural 🇩🇴
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-bold uppercase text-xs tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 px-3 rounded-full transition-colors ${
                  activeSection === link.id
                    ? 'bg-white text-[#92400E] shadow-sm font-extrabold'
                    : 'hover:bg-amber-600/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative bg-[#166534] hover:bg-[#14532d] text-white px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Mi Pedido</span>
              {cartCount > 0 && (
                <span className="bg-[#BEF264] text-[#365314] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-inner">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>+1 829-726-9955</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-amber-600 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#D97706] border-t border-amber-600 px-4 pt-3 pb-6 space-y-2 text-white">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-100 mb-3 px-2">
            <MapPin className="w-3.5 h-3.5 text-amber-200" />
            <span>Atención en Santo Domingo Oeste, RD</span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider hover:bg-amber-800/40 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-md mt-4"
          >
            <Phone className="w-4 h-4" />
            <span>Pedir por WhatsApp: +1 829-726-9955</span>
          </a>
        </div>
      )}
    </header>
  );
};
