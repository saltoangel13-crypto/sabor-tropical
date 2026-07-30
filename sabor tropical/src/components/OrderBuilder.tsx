import React, { useState } from 'react';
import { Juice, COMPANY_INFO, DELIVERY_ZONES } from '../data/juices';
import { X, Trash2, Send, ShoppingBag, MapPin, Plus, Minus, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export interface CartItem {
  cartId: string;
  juice: Juice;
  sizeKey: 'size16oz' | 'size32oz' | 'gallon';
  sizeLabel: string;
  unitPrice: number;
  quantity: number;
  sweetness: string;
}

interface OrderBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const OrderBuilder: React.FC<OrderBuilderProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0].name);
  const [exactAddress, setExactAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo al recibir');
  const [customNotes, setCustomNotes] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  
  const currentZoneObj = DELIVERY_ZONES.find((z) => z.name === selectedZone) || DELIVERY_ZONES[0];
  const deliveryFeeNumber = currentZoneObj.fee.includes('RD$')
    ? parseInt(currentZoneObj.fee.replace('RD$', '').trim(), 10)
    : 50;

  const grandTotal = subtotal + (cartItems.length > 0 ? deliveryFeeNumber : 0);

  const buildWhatsappMessage = () => {
    let msg = `*🍊 NUEVO PEDIDO - SABOR TROPICAL 🇩🇴*\n\n`;
    
    if (customerName.trim()) {
      msg += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    msg += `📍 *Sector SDO:* ${selectedZone}\n`;
    if (exactAddress.trim()) {
      msg += `🏠 *Dirección exacta:* ${exactAddress.trim()}\n`;
    }
    msg += `💳 *Pago:* ${paymentMethod}\n\n`;

    msg += `*🥤 JUGOS EN EL PEDIDO:*\n`;
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.juice.name}*\n`;
      msg += `   • Tamaño: ${item.sizeLabel}\n`;
      msg += `   • Dulzura: ${item.sweetness}\n`;
      msg += `   • Cantidad: ${item.quantity} x RD$ ${item.unitPrice} = *RD$ ${item.unitPrice * item.quantity}*\n`;
    });

    msg += `\n💵 *Subtotal Jugos:* RD$ ${subtotal}\n`;
    msg += `🛵 *Envío Estimado (${selectedZone}):* ${currentZoneObj.fee}\n`;
    msg += `💰 *TOTAL A PAGAR:* RD$ ${grandTotal}\n`;

    if (customNotes.trim()) {
      msg += `\n📝 *Notas especiales:* ${customNotes.trim()}\n`;
    }

    msg += `\n_Enviado desde el sitio web oficial de Sabor Tropical SDO_`;

    return msg;
  };

  const handleSendWhatsapp = () => {
    if (cartItems.length === 0) return;
    const text = buildWhatsappMessage();
    const url = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
      <div 
        className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l-4 border-[#F59E0B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-[#F59E0B] p-5 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-[#92400E] rounded-full flex items-center justify-center font-black text-xl shadow-inner">
              🛒
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight">Tu Pedido de Jugos</h3>
              <p className="text-xs text-amber-100 font-bold">
                {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} seleccionado(s)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-600 rounded-full transition-colors text-white"
            aria-label="Cerrar pedido"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Cart Items & Order Info Form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-4xl mb-4">
                🍹
              </div>
              <h4 className="text-lg font-black text-slate-800">Tu carrito está vacío</h4>
              <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto mt-1 mb-6">
                Añade tus jugos favoritos (Cereza, Piña, Remolacha, Chinola, Tamarindo, etc.) para armar tu pedido.
              </p>
              <button
                onClick={onClose}
                className="bg-[#166534] hover:bg-[#14532d] text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow transition-colors"
              >
                Explorar Menú de Jugos
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs font-black uppercase text-slate-400">Jugos Seleccionados</span>
                  <button
                    onClick={onClearCart}
                    className="text-[11px] font-bold text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Limpiar todo
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.cartId}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between gap-3 shadow-sm hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl bg-white w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 shadow-inner">
                        {item.juice.emoji}
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-slate-900 leading-tight">
                          {item.juice.name}
                        </h5>
                        <p className="text-[11px] font-bold text-amber-800">
                          {item.sizeLabel} • <span className="text-emerald-700">{item.sweetness}</span>
                        </p>
                        <p className="text-xs font-extrabold text-[#166534] mt-0.5">
                          RD$ {item.unitPrice * item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, -1)}
                          className="p-1.5 hover:bg-slate-100 text-slate-700 font-bold"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black px-2.5 text-slate-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, 1)}
                          className="p-1.5 hover:bg-slate-100 text-slate-700 font-bold"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                        title="Eliminar del pedido"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#92400E] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Datos de Entrega en Santo Domingo Oeste</span>
                </h4>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Tu Nombre:
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. María Rodríguez"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Sector en SDO:
                    </label>
                    <select
                      value={selectedZone}
                      onChange={(e) => setSelectedZone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      {DELIVERY_ZONES.map((zone) => (
                        <option key={zone.name} value={zone.name}>
                          {zone.name} ({zone.fee})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Método de Pago:
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      <option value="Efectivo al recibir">Efectivo al recibir</option>
                      <option value="Transferencia BHD / Banreservas">Transferencia BHD / Banreservas</option>
                      <option value="Pago por WhatsApp">Coordinar por WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Calle y Número de Casa / Referencia:
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Calle Primera #12, frente al colmado"
                    value={exactAddress}
                    onChange={(e) => setExactAddress(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Notas Especiales (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Poco hielo, enviar hielo por separado"
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {cartItems.length > 0 && (
          <div className="bg-slate-50 border-t border-slate-200 p-5 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Subtotal Jugos:</span>
                <span className="font-bold">RD$ {subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Envío estimado ({selectedZone}):</span>
                <span className="font-bold">{currentZoneObj.fee}</span>
              </div>
              <div className="flex justify-between text-slate-900 font-black text-lg pt-1 border-t border-slate-200">
                <span>Total a Pagar:</span>
                <span className="text-[#166534]">RD$ {grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsapp}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform transform active:scale-98"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Pedido a WhatsApp (+1 829-726-9955)</span>
            </button>

            <p className="text-[10px] text-center font-bold text-slate-400">
              ⚡ Te responderemos de inmediato en WhatsApp para confirmar tu entrega.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
