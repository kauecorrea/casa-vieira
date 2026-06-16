import React from 'react';

import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company';
import { buildContactUrl } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-brand-green-dark/20 blur-3xl transform rotate-12"></div>
            <div className="absolute -bottom-[50%] -left-[10%] w-[50%] h-[150%] rounded-full bg-white/5 blur-3xl transform -rotate-12"></div>
          </div>

          <div className="grid lg:grid-cols-2 relative z-10">
            {/* CTA */}
            <div className="p-10 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Pronto para dar o próximo passo na sua obra?
              </h2>
              <p className="text-green-100 text-lg mb-10 max-w-md">
                Nossa equipe está pronta para tirar suas dúvidas, fazer orçamentos e ajudar você a encontrar exatamente o que precisa.
              </p>
              
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="w-full sm:w-fit text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20"
                leftIcon={<MessageCircle className="w-6 h-6" />}
                onClick={() => window.open(buildContactUrl(), '_blank')}
              >
                Falar com um Vendedor
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="bg-brand-black/95 p-10 md:p-16 text-gray-300 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-8">Outros Canais</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-brand-green">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Ligue para nós</h4>
                    <p className="text-gray-400">{COMPANY_INFO.displayPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-brand-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visite a Loja</h4>
                    <p className="text-gray-400">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-brand-green">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Envie um E-mail</h4>
                    <p className="text-gray-400">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
