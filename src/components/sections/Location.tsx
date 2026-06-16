import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useBusinessHours } from '../../hooks/useBusinessHours';
import { BUSINESS_SCHEDULE } from '../../constants/company';
import { Badge } from '../ui/Badge';
import { cn } from '../../utils/cn';

export const Location: React.FC = () => {
  const { isOpen, nextOpenInfo } = useBusinessHours();
  const currentDayIndex = new Date().getDay();

  return (
    <section id="localizacao" className="py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Onde Estamos & Horários" 
          subtitle="Venha nos visitar! Estamos localizados estrategicamente para melhor atender você."
          centered
        />

        <div className="grid lg:grid-cols-3 gap-8 items-start mt-12">
          
          {/* Horários */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-50 text-brand-green rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Horário de Funcionamento</h3>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant={isOpen ? 'green' : 'red'}>
                    {isOpen ? 'Aberto Agora' : 'Fechado'}
                  </Badge>
                  <span className="text-sm text-gray-500 font-medium">
                    {nextOpenInfo}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {BUSINESS_SCHEDULE.map((schedule) => {
                const isToday = schedule.dayIndex === currentDayIndex;
                return (
                  <div 
                    key={schedule.dayIndex}
                    className={cn(
                      "flex justify-between items-center p-3 rounded-lg transition-colors",
                      isToday ? "bg-brand-green-light/20 border border-brand-green/20" : "hover:bg-gray-50"
                    )}
                  >
                    <span className={cn("font-medium", isToday ? "text-brand-green-dark" : "text-gray-700")}>
                      {schedule.day}
                    </span>
                    <div className="text-right">
                      {schedule.periods.length > 0 ? (
                        schedule.periods.map((period, idx) => (
                          <div key={idx} className={cn("text-sm", isToday ? "text-brand-green font-semibold" : "text-gray-600")}>
                            {period.open} - {period.close}
                          </div>
                        ))
                      ) : (
                        <span className="text-sm text-brand-red font-medium">Fechado</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 h-[500px] bg-white p-2 rounded-2xl shadow-sm border border-gray-100"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Casa%20Vieira%20Materiais%20de%20Constru%C3%A7%C3%A3o%2C%20Tenon%C3%A9&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Casa Vieira"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
