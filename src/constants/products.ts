import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Cimento e Argamassa
  { id: 'cim-1', name: 'Cimento CP-II 50kg', description: 'Para estruturas e alvenaria em geral', category: 'cimento', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Cimento CP-II 50kg' },
  { id: 'cim-2', name: 'Argamassa AC-III', description: 'Para assentamento de cerâmicas e porcelanatos', category: 'cimento', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Argamassa AC-III' },
  { id: 'cim-3', name: 'Rejunte Colorido', description: 'Acabamento de pisos e revestimentos', category: 'cimento', image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Rejunte Colorido' },
  { id: 'cim-4', name: 'Cal Hidratada CH-III', description: 'Para reboco e massa grossa', category: 'cimento', image: 'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Cal Hidratada CH-III' },

  // Tintas
  { id: 'tin-1', name: 'Tinta Acrílica Premium', description: 'Alto rendimento, lavável e durável', category: 'tintas', image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Tinta Acrílica Premium' },
  { id: 'tin-2', name: 'Esmalte Sintético Brilhante', description: 'Para madeiras e metais', category: 'tintas', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Esmalte Sintético Brilhante' },
  { id: 'tin-3', name: 'Textura Acrílica', description: 'Acabamento rústico para fachadas', category: 'tintas', image: 'https://images.unsplash.com/photo-1595348020949-87cdfbbaf1da?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Textura Acrílica' },
  { id: 'tin-4', name: 'Selador Acrílico', description: 'Preparação de superfícies antes da pintura', category: 'tintas', image: 'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Selador Acrílico' },

  // Ferragens
  { id: 'fer-1', name: 'Kit Parafusos e Buchas', description: 'Sortido para uso geral em obra', category: 'ferragens', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Kit Parafusos e Buchas' },
  { id: 'fer-2', name: 'Dobradiças Inox 3"', description: 'Para portas e janelas', category: 'ferragens', image: 'https://images.unsplash.com/photo-1586942551468-b7654eddcbd3?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Dobradiças Inox 3"' },
  { id: 'fer-3', name: 'Cadeado Reforçado 40mm', description: 'Alta resistência', category: 'ferragens', image: 'https://images.unsplash.com/photo-1522066848123-64edff99b009?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Cadeado Reforçado 40mm' },

  // Hidráulico
  { id: 'hid-1', name: 'Cano PVC 100mm', description: 'Para esgoto e drenagem', category: 'hidraulico', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Cano PVC 100mm' },
  { id: 'hid-2', name: 'Joelho 90° PVC 50mm', description: 'Conexão para tubulações', category: 'hidraulico', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Joelho 90° PVC 50mm' },
  { id: 'hid-3', name: 'Registro de Gaveta 3/4"', description: 'Controle de fluxo de água', category: 'hidraulico', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Registro de Gaveta 3/4"' },

  // Elétrico
  { id: 'ele-1', name: 'Cabo Flexível 2,5mm', description: '750V, rolo 100m', category: 'eletrico', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Cabo Flexível 2,5mm' },
  { id: 'ele-2', name: 'Disjuntor Bipolar 20A', description: 'Proteção de circuitos residenciais', category: 'eletrico', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Disjuntor Bipolar 20A' },
  { id: 'ele-3', name: 'Tomada 20A NBR', description: 'Padrão brasileiro de segurança', category: 'eletrico', image: 'https://images.unsplash.com/photo-1558235299-813c9e3dfcc9?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Tomada 20A NBR' },

  // Acabamento
  { id: 'aca-1', name: 'Porcelanato 60x60cm', description: 'Alta resistência, vários modelos disponíveis', category: 'acabamento', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Porcelanato 60x60cm' },
  { id: 'aca-2', name: 'Massa Corrida PVA', description: 'Para paredes internas, alto rendimento', category: 'acabamento', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Massa Corrida PVA' },

  // Ferramentas
  { id: 'frm-1', name: 'Furadeira de Impacto 750W', description: 'Com maleta e acessórios', category: 'ferramentas', image: 'https://images.unsplash.com/photo-1581147036324-c157ca0d8fb8?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Furadeira de Impacto 750W' },
  { id: 'frm-2', name: 'Trena 5m', description: 'Com trava e gancho magnético', category: 'ferramentas', image: 'https://images.unsplash.com/photo-1541888009130-101f11e96720?auto=format&fit=crop&q=80&w=600&h=400', whatsappMessage: 'Trena 5m' },
];
