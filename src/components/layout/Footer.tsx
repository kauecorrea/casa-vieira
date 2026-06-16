import React from 'react';
import { Home, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green text-white">
                <Home className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-white">Casa Vieira</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Materiais de Construção</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-green"></span>
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 hover:text-brand-green transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-green"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.displayPhone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Maps Preview */}
          <div className="rounded-xl overflow-hidden h-48 lg:h-full border border-gray-800 relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Casa%20Vieira%20Materiais%20de%20Constru%C3%A7%C3%A3o%2C%20Tenon%C3%A9&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              title="Localização Casa Vieira"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span className="text-brand-red">♥</span> para o {COMPANY_INFO.neighborhood}
          </p>
        </div>
      </div>
    </footer>
  );
};
