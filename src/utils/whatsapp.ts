import { COMPANY_INFO } from '../constants/company';
import type { CartItem } from '../context/CartContext';

export function buildWhatsAppUrl(productName: string): string {
  const message = `Olá! Tenho interesse no produto ${productName}. Poderia me passar mais informações e o preço?`;
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(message)}`;
}

export function buildContactUrl(message?: string): string {
  const text = message || 'Olá! Gostaria de mais informações sobre os produtos da Casa Vieira.';
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`;
}

export function buildCartWhatsAppUrl(items: CartItem[]): string {
  let message = `Olá! Gostaria de solicitar um orçamento para os seguintes itens:\n\n`;
  
  items.forEach(item => {
    message += `- ${item.quantity}x ${item.product.name}\n`;
  });
  
  message += `\nFico no aguardo!`;
  
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(message)}`;
}
