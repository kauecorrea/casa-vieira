import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
};
