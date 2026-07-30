import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JuiceCard } from './components/JuiceCard';
import { JuiceModal } from './components/JuiceModal';
import { OrderBuilder, CartItem } from './components/OrderBuilder';
import { DominicanProcess } from './components/DominicanProcess';
import { DeliveryCalculator } from './components/DeliveryCalculator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { JUICES, Juice, COMPANY_INFO } from './data/juices';
import { Search, Sparkles, Filter, Phone, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedJuiceForModal, setSelectedJuiceForModal] = useState<Juice | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // Add item to cart
  const handleAddToCart = (
    juice: Juice,
    sizeKey: 'size16oz' | 'size32oz' | 'gallon',
    price: number,
    sweetness: string = 'Normal'
  ) => {
    const sizeLabels = {
      size16oz: '16 oz (Porción Personal)',
      size32oz: '32 oz (1 Litro)',
      gallon: 'Galón (Presentación Especial)'
    };

    const cartId = `${juice.id}-${sizeKey}-${sweetness}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);
      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartId,
          juice,
          sizeKey,
          sizeLabel: sizeLabels[sizeKey],
          unitPrice: price,
          quantity: 1,
          sweetness,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Filter juices
  const categories = [
    { id: 'todos', label: 'Todos los Jugos' },
    { id: 'citricos', label: '🍋 Cítricos & Agrios' },
    { id: 'dulces', label: '🍍 Dulces Naturales' },
    { id: 'nutritivos', label: '🍷 Nutritivos & Hierro' },
    { id: 'especiales', label: '🍹 Mezclas Especiales' },
  ];

  const filteredJuices = JUICES.filter((j) => {
    const matchesCategory = selectedCategory === 'todos' || j.category === selectedCategory;
    const matchesSearch =
      j.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenQuickAdd = (juiceId: string) => {
    const juice = JUICES.find((j) => j.id === juiceId);
    if (juice) {
      setSelectedJuiceForModal(juice);
    }
  };

  const whatsappFloatingUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    '¡Hola Sabor Tropical! Quisiera consultar la disponibilidad de jugos hoy.'
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-slate-900 flex flex-col selection:bg-amber-200 selection:text-amber-900">
      
      {/* Sticky Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToMenu={handleScrollToMenu}
          onOpenQuickAdd={handleOpenQuickAdd}
        />

        {/* Menu Section */}
        <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#F59E0B] text-[#92400E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Menú de Jugos Artesanales</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#166534] tracking-tight">
              Escoge tu Sabor Tropical Favorito
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
              Elaborados diariamente con frutas y vegetales 100% cultivados en República Dominicana.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-amber-200 shadow-sm mb-10 space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar jugo por nombre o fruta (ej. Chinola, Cereza)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`py-2 px-4 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#166534] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Juice Cards Grid */}
          {filteredJuices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJuices.map((juice) => (
                <JuiceCard
                  key={juice.id}
                  juice={juice}
                  onSelectJuice={(j) => setSelectedJuiceForModal(j)}
                  onAddToCart={(j, size, price) => handleAddToCart(j, size, price)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-amber-200 p-8">
              <p className="text-4xl mb-3">🍹</p>
              <h3 className="text-lg font-black text-slate-800">No encontramos ese jugo en la búsqueda</h3>
              <p className="text-xs text-slate-500 font-medium mt-1 mb-4">
                Prueba buscando otro término o limpia los filtros. ¡Preparamos combinaciones personalizadas a pedido!
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todos');
                }}
                className="bg-[#166534] text-white font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow"
              >
                Ver Todos los Jugos
              </button>
            </div>
          )}
        </section>

        {/* 100% Dominican Harvest Process Section */}
        <DominicanProcess />

        {/* Delivery Zones Section */}
        <DeliveryCalculator />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Juice Modal Details */}
      <JuiceModal
        juice={selectedJuiceForModal}
        onClose={() => setSelectedJuiceForModal(null)}
        onAddToCart={(j, size, price, sweetness) => handleAddToCart(j, size, price, sweetness)}
      />

      {/* Order Builder / Cart Drawer */}
      <OrderBuilder
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Button - WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Cart Quick Trigger if items exist */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-[#166534] hover:bg-[#14532d] text-white p-3.5 rounded-full shadow-2xl border-2 border-amber-300 flex items-center gap-2 transform hover:scale-105 transition-all"
            title="Ver carrito de pedido"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="bg-[#BEF264] text-[#365314] text-xs font-black px-2 py-0.5 rounded-full">
              {totalCartCount}
            </span>
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 transform hover:scale-110 transition-all border-2 border-white group"
          title="Escribir por WhatsApp a Sabor Tropical (+1 829-726-9955)"
        >
          <Phone className="w-6 h-6 fill-current" />
          <span className="hidden group-hover:inline text-xs font-black uppercase tracking-wider pr-1">
            WhatsApp Directo
          </span>
        </a>
      </div>

    </div>
  );
}
