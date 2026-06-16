import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useBusinessHours } from '../../hooks/useBusinessHours';
import { buildContactUrl } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = NAVIGATION_ITEMS.map(item => item.href.substring(1));
  const activeSection = useScrollSpy(sectionIds, 100);
  const { isOpen } = useBusinessHours();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 relative z-10 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green group-hover:scale-105 transition-transform">
                <img src="/logo.svg" alt="Casa Vieira" className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-brand-black">Casa Vieira</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Materiais de Construção</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-brand-green relative',
                      isActive ? 'text-brand-green' : 'text-gray-600'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-green rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Badge variant={isOpen ? 'green' : 'red'} className="hidden lg:inline-flex">
                {isOpen ? 'Aberto agora' : 'Fechado'}
              </Badge>
              <Button 
                variant="whatsapp" 
                size="sm" 
                leftIcon={<MessageCircle className="w-4 h-4" />}
                onClick={() => window.open(buildContactUrl(), '_blank')}
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-brand-green focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        activeSection={activeSection} 
      />
    </>
  );
};
