import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildContactUrl } from '../../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={buildContactUrl()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Pulse effect */}
          <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30"></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
