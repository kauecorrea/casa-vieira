import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Layers, MapPin } from 'lucide-react';
import { Card } from '../ui/Card';

const benefitsData = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Trabalhamos apenas com produtos de marcas confiáveis e duráveis para a sua obra.'
  },
  {
    icon: Users,
    title: 'Atendimento Próximo',
    description: 'Nossa equipe local está sempre pronta para orientar sua obra com o melhor atendimento.'
  },
  {
    icon: Layers,
    title: 'Variedade Completa',
    description: 'Encontre tudo em um só lugar: do alicerce bruto aos mínimos detalhes de acabamento.'
  },
  {
    icon: MapPin,
    title: 'No coração do Tenoné',
    description: 'Fácil acesso em Belém, garantindo mais agilidade e conveniência para você.'
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white relative z-20 -mt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full group hover:-translate-y-1 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-brand-green before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
