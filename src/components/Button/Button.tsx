'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]',
    secondary: 'bg-[var(--bg-secondary)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--bg-tertiary)]',
    outline: 'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]',
    danger: 'bg-[var(--color-danger)] text-white hover:bg-[var(--color-accent-hover)]',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            isLoading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            disabled,
            className = '',
            ...props
        },
        ref
    ) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
        const widthStyles = fullWidth ? 'w-full' : '';
        const disabledStyles = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : '';

        return (
            <motion.button
                ref={ref}
                className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
                disabled={disabled || isLoading}
                whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
                whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
                transition={{ duration: 0.15 }}
                {...props}
            >
                {isLoading && (
                    <span className="animate-spin">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="31.416"
                                strokeDashoffset="10"
                            />
                        </svg>
                    </span>
                )}
                {!isLoading && leftIcon && <span>{leftIcon}</span>}
                <span>{children as React.ReactNode}</span>
                {!isLoading && rightIcon && <span>{rightIcon}</span>}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
