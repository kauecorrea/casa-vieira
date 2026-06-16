import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { buildContactUrl } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 right-0 md:right-10 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 md:left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 md:py-24 text-center flex flex-col items-center flex-1 justify-center">
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 border border-brand-green/20 shadow-sm">
            <span className="text-sm font-bold text-brand-green uppercase tracking-wider">
              Qualidade e Preço Justo
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-black tracking-tight leading-tight mb-6">
            Construa seus sonhos com a <span className="text-brand-green relative inline-block">
              Casa Vieira
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-red/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Sua loja completa de material de construção no Tenoné. Tudo o que você precisa, 
            do alicerce ao acabamento, com as melhores marcas e atendimento especializado.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]" onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Produtos
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px]"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open(buildContactUrl(), '_blank')}
            >
              Falar Conosco
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="relative z-10 flex flex-col items-center mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Role para ver mais</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-brand-green" />
        </motion.div>
      </motion.div>
    </section>
  );
};
