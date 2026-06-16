import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl md:hidden flex flex-col"
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-gray-100">
              <span className="font-bold text-brand-green">Menu</span>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-brand-red transition-colors rounded-md focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="flex flex-col space-y-2">
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        isActive 
                          ? 'bg-brand-green-light/20 text-brand-green' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green'
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
            
            <div className="p-6 border-t border-gray-100">
              <a 
                href="#contato"
                onClick={onClose}
                className="w-full flex items-center justify-center h-12 rounded-md bg-brand-green text-white font-medium hover:bg-brand-green-dark transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
