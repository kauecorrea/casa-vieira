import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import type { Stat } from '../../types';

const STATS: Stat[] = [
  { value: 15, suffix: '+', label: 'Anos no mercado' },
  { value: 500, suffix: '+', label: 'Produtos disponíveis' },
  { value: 8000, suffix: '+', label: 'Clientes atendidos' },
  { value: 100, suffix: '%', label: 'Compromisso com você' }
];

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const { count, ref } = useAnimatedCounter({ target: stat.value });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 font-mono">
        {count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-brand-green-dark">
        {stat.label}
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle 
              title="Nossa História" 
              subtitle="Construindo sonhos junto com a comunidade do Tenoné."
            />
            
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Fundada com o objetivo de facilitar o acesso a materiais de qualidade para os moradores de Belém e região, a <strong className="text-brand-green">Casa Vieira</strong> tornou-se referência em confiança e bom atendimento no bairro do Tenoné.
              </p>
              <p>
                Sabemos que construir ou reformar é a realização de um sonho, muitas vezes construído com muito suor. Por isso, nossa missão vai além de vender produtos: queremos ser seus parceiros nessa jornada, oferecendo orientação técnica, preços justos e a variedade que sua obra exige.
              </p>
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-brand-green">
                <p className="italic text-brand-green-dark font-medium">
                  "Nossa maior recompensa é ver a obra do nosso cliente finalizada com sucesso."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
