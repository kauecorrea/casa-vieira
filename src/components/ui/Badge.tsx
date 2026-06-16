import React from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant = 'green' | 'red' | 'gray' | 'outline-green';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'gray', className, children, ...props }) => {
  const variants: Record<BadgeVariant, string> = {
    green: 'bg-brand-green-light/30 text-brand-green-dark',
    red: 'bg-red-100 text-brand-red',
    gray: 'bg-gray-100 text-gray-800',
    'outline-green': 'border border-brand-green text-brand-green bg-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
