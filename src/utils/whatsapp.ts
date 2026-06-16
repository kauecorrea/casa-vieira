import { COMPANY_INFO } from '../constants/company';

export function buildWhatsAppUrl(productName: string): string {
  const message = `Olá! Tenho interesse no produto ${productName}. Poderia me passar mais informações e o preço?`;
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(message)}`;
}

export function buildContactUrl(message?: string): string {
  const text = message || 'Olá! Gostaria de mais informações sobre os produtos da Casa Vieira.';
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`;
}
