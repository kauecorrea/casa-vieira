/**
 * Categorias disponíveis na loja
 */
export type CategorySlug = 'cimento' | 'tintas' | 'ferragens' | 'hidraulico' | 'eletrico' | 'acabamento' | 'ferramentas';

/**
 * Interface representing a Product
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  category: CategorySlug;
  image: string;
  whatsappMessage: string;
}

/**
 * Interface representing a Category
 */
export interface Category {
  slug: CategorySlug;
  label: string;
  icon: string;
}

/**
 * Interface representing business hours for a specific day
 */
export interface BusinessSchedule {
  day: string;
  dayIndex: number;
  periods: { open: string; close: string }[];
}

/**
 * Interface representing a navigation item
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Interface representing a statistic for the About section
 */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
