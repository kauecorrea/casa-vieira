import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { buildContactUrl } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-pattern">
      {/* Decorative red accent element */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-brand-red"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-green-light shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-sm font-medium text-brand-green-dark">Sua obra no lugar certo</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6">
            Seu material de construção em Belém, com <span className="text-brand-green relative inline-block">
              qualidade
              <svg className="absolute -bottom-2 w-full left-0 text-brand-red" viewBox="0 0 100 20" preserveAspectRatio="none" fill="currentColor">
                <path d="M0 10 C 20 15, 80 15, 100 10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span> e preço justo.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
            Visite a Casa Vieira no Tenoné e encontre tudo o que sua obra precisa, do alicerce ao acabamento.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos">
              <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Ver Produtos
              </Button>
            </a>
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="w-full sm:w-auto"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open(buildContactUrl(), '_blank')}
            >
              Chamar no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="mt-12 flex flex-col items-center gap-2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Rolar para baixo</span>
        <div className="w-px h-8 bg-brand-green/30"></div>
      </motion.div>
    </section>
  );
};
