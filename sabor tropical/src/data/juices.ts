export interface Juice {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'citricos' | 'dulces' | 'nutritivos' | 'especiales';
  emoji: string;
  colorBg: string;
  colorText: string;
  borderColor: string;
  badgeBg: string;
  benefits: string[];
  ingredients: string[];
  origin: string;
  featured?: boolean;
  prices: {
    size16oz: number; // 16 oz
    size32oz: number; // 32 oz / 1 Litro
    gallon: number;   // Galón
  };
}

export const JUICES: Juice[] = [
  {
    id: 'chinola',
    name: 'Jugo de Chinola',
    tagline: 'Sabor intenso, acidez perfecta y aroma caribeño',
    description: 'Elaborado con chinolas frescas recolectadas en campos dominicanos. Un concentrado puro lleno de sabor y vitalidad.',
    category: 'citricos',
    emoji: '🥤',
    colorBg: 'bg-[#FEF3C7]',
    colorText: 'text-[#92400E]',
    borderColor: 'border-[#F59E0B]',
    badgeBg: 'bg-[#F59E0B]',
    benefits: ['Rico en Vitamina A y C', 'Propiedades relajantes naturales', 'Excelente para la digestión'],
    ingredients: ['100% Chinola dominicana', 'Agua purificada', 'Copa de dulzura natural opcional'],
    origin: 'Monte Plata y Hato Mayor, RD',
    featured: true,
    prices: { size16oz: 120, size32oz: 200, gallon: 650 }
  },
  {
    id: 'cereza',
    name: 'Jugo de Cereza',
    tagline: 'Vitamina C pura con un toque silvestre inolvidable',
    description: 'Hecho con cerezas criollas recién cosechadas. Sabor intenso, color rojo vibrante y una frescura imbatible.',
    category: 'citricos',
    emoji: '🍒',
    colorBg: 'bg-[#FEE2E2]',
    colorText: 'text-[#991B1B]',
    borderColor: 'border-[#EF4444]',
    badgeBg: 'bg-[#DC2626]',
    benefits: ['Bomba natural de Vitamina C', 'Fortalece el sistema inmune', 'Poderoso antioxidante'],
    ingredients: ['Cereza silvestre dominicana', 'Agua de manantial purificada'],
    origin: 'Cibao Central, RD',
    featured: true,
    prices: { size16oz: 110, size32oz: 190, gallon: 600 }
  },
  {
    id: 'pina',
    name: 'Jugo de Piña',
    tagline: 'Piña Pan de Azúcar dulcita y refrescante',
    description: 'Extraído de piñas maduradas bajo el sol del Caribe. Un jugo dorado, diurético y sumamente refrescante.',
    category: 'dulces',
    emoji: '🍍',
    colorBg: 'bg-[#FEF08A]',
    colorText: 'text-[#713F12]',
    borderColor: 'border-[#EAB308]',
    badgeBg: 'bg-[#CA8A04]',
    benefits: ['Contiene Bromelina (digestiva)', 'Acción antiinflamatoria natural', 'Súper hidratante'],
    ingredients: ['100% Piña Pan de Azúcar de Cotuí'],
    origin: 'Sánchez Ramírez (Cotuí), RD',
    featured: true,
    prices: { size16oz: 100, size32oz: 180, gallon: 580 }
  },
  {
    id: 'remolacha',
    name: 'Jugo de Remolacha',
    tagline: 'Energía pura de la tierra para revitalizar tu día',
    description: 'Nutrición directa del campo a tu vaso. Suave al paladar, lleno de hierro y minerales esenciales.',
    category: 'nutritivos',
    emoji: '🍷',
    colorBg: 'bg-[#FCE7F3]',
    colorText: 'text-[#831843]',
    borderColor: 'border-[#EC4899]',
    badgeBg: 'bg-[#BE185D]',
    benefits: ['Rico en hierro y folatos', 'Mejora la circulación sanguínea', 'Aumenta la energía física'],
    ingredients: ['Remolacha fresca de Constanza', 'Toque opcional de limón o naranja'],
    origin: 'Valle de Constanza, RD',
    featured: true,
    prices: { size16oz: 110, size32oz: 190, gallon: 620 }
  },
  {
    id: 'tamarindo',
    name: 'Jugo de Tamarindo',
    tagline: 'El clásico caribeño entre dulce y agridulce',
    description: 'Tamarindo natural despulpado artesanalmente. El remedio perfecto para combatir el calor del verano caribeño.',
    category: 'citricos',
    emoji: '🤎',
    colorBg: 'bg-[#FED7AA]',
    colorText: 'text-[#7C2D12]',
    borderColor: 'border-[#F97316]',
    badgeBg: 'bg-[#EA580C]',
    benefits: ['Ayuda a regular la digestión', 'Refrescante y bajo en calorías', 'Minerales y potasio natural'],
    ingredients: ['Pulpa de Tamarindo dominicano', 'Agua purificada'],
    origin: 'Región Sur, RD',
    featured: false,
    prices: { size16oz: 100, size32oz: 180, gallon: 580 }
  },
  {
    id: 'fruit-punch',
    name: 'Fruit Punch Tropical',
    tagline: 'El ponche de frutas preferido de las familias',
    description: 'Una explosión de piña, chinola, lechosa y guayaba. El balance perfecto de frutas autóctonas.',
    category: 'especiales',
    emoji: '🍹',
    colorBg: 'bg-[#FBCFE8]',
    colorText: 'text-[#831843]',
    borderColor: 'border-[#F43F5E]',
    badgeBg: 'bg-[#E11D48]',
    benefits: ['Multivitamínico 100% natural', 'Sabor divertido para toda la familia', 'Excelente para reuniones'],
    ingredients: ['Piña, Chinola, Guayaba, Lechosa y Manzana local'],
    origin: 'Mezcla de Cosechas Nacionales, RD',
    featured: true,
    prices: { size16oz: 120, size32oz: 210, gallon: 680 }
  },
  {
    id: 'limon',
    name: 'Limonada Criolla',
    tagline: 'Limón agrio agustino con hojas de menta fresca',
    description: 'Zumo de limones verdes exprimidos al momento. La limonada dominicana auténtica para apagar la sed al instante.',
    category: 'citricos',
    emoji: '🍋',
    colorBg: 'bg-[#D1FAE5]',
    colorText: 'text-[#065F46]',
    borderColor: 'border-[#10B981]',
    badgeBg: 'bg-[#059669]',
    benefits: ['Alcaliniza el organismo', 'Cero aditivos artificiales', 'Efecto desintoxicante'],
    ingredients: ['Limón agrio criollo', 'Hojas de menta fresca', 'Agua helada purificada'],
    origin: 'San Cristóbal, RD',
    featured: false,
    prices: { size16oz: 90, size32oz: 160, gallon: 500 }
  },
  {
    id: 'mango',
    name: 'Jugo de Mango Criollo',
    tagline: 'Cremoso, dulce y elaborado con mangos de Baní',
    description: 'Textura suave y aroma inconfundible. La joya de la fruta dominicana servida bien fría en su mejor punto.',
    category: 'dulces',
    emoji: '🥭',
    colorBg: 'bg-[#FEF08A]',
    colorText: 'text-[#854D0E]',
    borderColor: 'border-[#EAB308]',
    badgeBg: 'bg-[#D97706]',
    benefits: ['Rico en fibra digestiva', 'Alto contenido de Vitamina A', 'Antioxidante y reconfortante'],
    ingredients: ['Mango Banilejo cosechado en temporada'],
    origin: 'Baní (Peravia), RD',
    featured: true,
    prices: { size16oz: 110, size32oz: 190, gallon: 600 }
  },
  {
    id: '3-golpes-nutritivo',
    name: 'Tres Golpes Nutritivo (Zanahoria + Remolacha + Naranja)',
    tagline: 'El batido de salud definitivo con sabor de la patria',
    description: 'La combinación estrella dominicana. Zanahoria dulce, remolacha de Constanza y naranja agridulce exprimida al momento.',
    category: 'nutritivos',
    emoji: '🥕',
    colorBg: 'bg-[#FFEDD5]',
    colorText: 'text-[#9A3412]',
    borderColor: 'border-[#F97316]',
    badgeBg: 'bg-[#C2410C]',
    benefits: ['Energizante 100% natural', 'Excelente para la piel y la vista', 'Potenciador inmunológico'],
    ingredients: ['Zanahoria, Remolacha y Naranja agustina'],
    origin: 'Constanza y San José de Ocoa, RD',
    featured: false,
    prices: { size16oz: 130, size32oz: 220, gallon: 700 }
  }
];

export const DELIVERY_ZONES = [
  { name: 'Las Caobas', zone: 'Santo Domingo Oeste', estimate: '15-25 min', fee: 'RD$ 50' },
  { name: 'Herrera (Zona Industrial y Residencial)', zone: 'Santo Domingo Oeste', estimate: '20-30 min', fee: 'RD$ 60' },
  { name: 'Manoguayabo & San Miguel', zone: 'Santo Domingo Oeste', estimate: '20-35 min', fee: 'RD$ 70' },
  { name: 'Alameda & Prolongación 27 de Febrero', zone: 'Santo Domingo Oeste', estimate: '15-25 min', fee: 'RD$ 50' },
  { name: 'Bayona & El Café', zone: 'Santo Domingo Oeste', estimate: '20-30 min', fee: 'RD$ 60' },
  { name: 'KM 12 de Luperón / Independencia', zone: 'Santo Domingo Oeste', estimate: '25-35 min', fee: 'RD$ 80' },
  { name: 'Otras zonas cercanas en SDO', zone: 'Santo Domingo Oeste', estimate: '30-45 min', fee: 'A consultar' },
];

export const COMPANY_INFO = {
  name: 'Sabor Tropical',
  whatsappNumber: '+18297269955',
  rawPhone: '18297269955',
  location: 'Santo Domingo Oeste, República Dominicana',
  address: 'Av. Prolongación 27 de Febrero / Las Caobas, Santo Domingo Oeste',
  hours: 'Lunes a Domingo: 7:00 AM - 7:00 PM',
  originTag: '100% Cosechado en República Dominicana 🇩🇴',
  deliveryText: 'Entregas a domicilio disponibles en todo Santo Domingo Oeste',
  social: {
    instagram: '@sabortropical.rd',
    facebook: 'SaborTropicalRD'
  }
};
