import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300',
          {
            'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl':
              variant === 'primary',
            'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white':
              variant === 'secondary',
            'bg-whatsapp text-white hover:bg-green-600 shadow-lg hover:shadow-xl':
              variant === 'whatsapp',
            'border border-gray-300 text-gray-700 hover:bg-gray-50':
              variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
