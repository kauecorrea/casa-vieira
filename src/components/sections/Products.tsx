import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PRODUCTS } from '../../constants/products';
import { SectionTitle } from '../ui/SectionTitle';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';

// Extract categories dynamically
const ALL_CATEGORIES = [
  { slug: 'all', label: 'Todos os Produtos' },
  { slug: 'cimento', label: 'Cimento & Argamassa' },
  { slug: 'tintas', label: 'Tintas & Acessórios' },
  { slug: 'ferragens', label: 'Ferragens' },
  { slug: 'hidraulico', label: 'Hidráulica' },
  { slug: 'eletrico', label: 'Elétrica' },
  { slug: 'acabamento', label: 'Acabamentos' },
  { slug: 'ferramentas', label: 'Ferramentas' },
];

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Calculate counts
  const categoriesWithCounts = useMemo(() => {
    return ALL_CATEGORIES.map(cat => ({
      ...cat,
      count: cat.slug === 'all' 
        ? PRODUCTS.length 
        : PRODUCTS.filter(p => p.category === cat.slug).length
    })).filter(cat => cat.count > 0); // Hide empty categories
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nossos Produtos" 
          subtitle="Explore nosso catálogo. Do bruto ao acabamento, oferecemos qualidade e as melhores marcas do mercado."
          centered
        />

        <ProductFilter 
          categories={categoriesWithCounts} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  );
};
