// File: src/components/ui/spinner.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        default: 'w-4 h-4',
        sm: 'w-3 h-3',
        lg: 'w-8 h-8',
        xl: 'w-16 h-16',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner = ({ size, className }: SpinnerProps) => {
  return (
    <Loader2 className={cn(spinnerVariants({ size, className }))} />
  );
};

export { Spinner };
