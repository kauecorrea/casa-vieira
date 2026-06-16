import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'danger' | 'outline-green' | 'outline-red' | 'whatsapp' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-brand-green text-white hover:bg-brand-green-dark focus:ring-brand-green',
      danger: 'bg-brand-red text-white hover:bg-red-800 focus:ring-brand-red',
      'outline-green': 'border border-brand-green text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green',
      'outline-red': 'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white focus:ring-brand-red',
      whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]',
      ghost: 'bg-transparent text-brand-green hover:bg-brand-green-light/20 focus:ring-brand-green',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-5 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        
        {children}

        {!isLoading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
