import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, className, ...props }) => {
  return (
    <div className={cn('mb-10', centered && 'text-center', className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg" style={centered ? { margin: '0 auto' } : {}}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-1.5 w-20 bg-brand-green rounded-full mt-6", centered && "mx-auto")} />
    </div>
  );
};
