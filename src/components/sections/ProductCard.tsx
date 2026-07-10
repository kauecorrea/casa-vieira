import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../../types';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Product Image Area */}
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-green-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
          {product.category}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-brand-black mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{product.description}</p>
        
        <Button 
          variant="outline-green" 
          className="w-full mt-auto"
          leftIcon={<ShoppingCart className="w-4 h-4" />}
          onClick={() => addToCart(product)}
        >
          Adicionar ao Orçamento
        </Button>
      </div>
    </motion.div>
  );
};
