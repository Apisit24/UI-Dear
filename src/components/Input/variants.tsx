'use client';

import { forwardRef, ReactNode, useState } from 'react';
import { Search, Mail, Lock, User, Eye, EyeOff, Check, X, AlertCircle, LucideIcon } from 'lucide-react';

// ============================================
// Base Input Props
// ============================================
export interface BaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    hint?: string;
}

// ============================================
// Basic Input
// ============================================
export interface BasicInputProps extends BaseInputProps {
    variant?: 'default' | 'filled';
}

export const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
    ({ variant = 'default', className = '', disabled, ...props }, ref) => {
        const variants = {
            default: 'bg-[var(--bg)] border border-[var(--border)]',
            filled: 'bg-[var(--bg-tertiary)] border border-[var(--border)]',
        };

        const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : '';

        return (
            <input
                ref={ref}
                disabled={disabled}
                className={`w-full px-4 py-3 rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all ${variants[variant]} ${disabledStyles} ${className}`}
                {...props}
            />
        );
    }
);
BasicInput.displayName = 'BasicInput';

// ============================================
// Icon Input
// ============================================
export interface IconInputProps extends BaseInputProps {
    icon: ReactNode;
    iconPosition?: 'left' | 'right';
    showPasswordToggle?: boolean;
}

export const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
    ({ icon, iconPosition = 'left', showPasswordToggle = false, type, className = '', ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

        return (
            <div className="relative">
                {iconPosition === 'left' && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    type={inputType}
                    className={`w-full ${iconPosition === 'left' ? 'pl-12 pr-4' : 'pl-4 pr-12'} py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all ${className}`}
                    {...props}
                />
                {iconPosition === 'right' && !showPasswordToggle && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                        {icon}
                    </span>
                )}
                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
        );
    }
);
IconInput.displayName = 'IconInput';

// ============================================
// Floating Label Input
// ============================================
export interface FloatingLabelInputProps extends BaseInputProps {
    label: string;
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
    ({ label, id, className = '', ...props }, ref) => {
        const inputId = id || label.toLowerCase().replace(/\s/g, '-');

        return (
            <div className="relative">
                <input
                    ref={ref}
                    id={inputId}
                    placeholder=" "
                    className={`peer w-full px-4 pt-6 pb-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all ${className}`}
                    {...props}
                />
                <label
                    htmlFor={inputId}
                    className="absolute left-4 top-4 text-[var(--text-muted)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    {label}
                </label>
            </div>
        );
    }
);
FloatingLabelInput.displayName = 'FloatingLabelInput';

// ============================================
// Validation Input
// ============================================
export type ValidationState = 'success' | 'error' | 'warning';

export interface ValidationInputProps extends BaseInputProps {
    state: ValidationState;
    message?: string;
}

const validationStyles: Record<ValidationState, { border: string; icon: ReactNode; iconColor: string }> = {
    success: {
        border: 'border-2 border-[#10b981]',
        icon: <Check size={20} />,
        iconColor: 'text-[#10b981]'
    },
    error: {
        border: 'border-2 border-[#ef4444]',
        icon: <X size={20} />,
        iconColor: 'text-[#ef4444]'
    },
    warning: {
        border: 'border-2 border-[#f59e0b]',
        icon: <AlertCircle size={20} />,
        iconColor: 'text-[#f59e0b]'
    },
};

export const ValidationInput = forwardRef<HTMLInputElement, ValidationInputProps>(
    ({ state, message, className = '', ...props }, ref) => {
        const styles = validationStyles[state];

        return (
            <div>
                <div className="relative">
                    <input
                        ref={ref}
                        className={`w-full px-4 py-3 pr-12 bg-[var(--bg)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-opacity-20 ${styles.border} ${className}`}
                        {...props}
                    />
                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 ${styles.iconColor}`}>
                        {styles.icon}
                    </span>
                </div>
                {message && (
                    <p className={`mt-2 text-sm ${styles.iconColor}`}>{message}</p>
                )}
            </div>
        );
    }
);
ValidationInput.displayName = 'ValidationInput';

// ============================================
// Pill Input
// ============================================
export interface PillInputProps extends BaseInputProps {
    buttonText?: string;
    onButtonClick?: () => void;
    icon?: ReactNode;
}

export const PillInput = forwardRef<HTMLInputElement, PillInputProps>(
    ({ buttonText, onButtonClick, icon, className = '', ...props }, ref) => {
        return (
            <div className="relative">
                {icon && (
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    className={`w-full ${icon ? 'pl-14' : 'pl-6'} ${buttonText ? 'pr-28' : 'pr-6'} py-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all ${className}`}
                    {...props}
                />
                {buttonText && (
                    <button
                        onClick={onButtonClick}
                        className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:opacity-90 transition-opacity"
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        );
    }
);
PillInput.displayName = 'PillInput';

// ============================================
// Text Area
// ============================================
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'default' | 'filled';
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ variant = 'default', className = '', rows = 4, ...props }, ref) => {
        const variants = {
            default: 'bg-[var(--bg)] border border-[var(--border)] rounded-lg',
            filled: 'bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl',
        };

        return (
            <textarea
                ref={ref}
                rows={rows}
                className={`w-full px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none ${variants[variant]} ${className}`}
                {...props}
            />
        );
    }
);
TextArea.displayName = 'TextArea';
