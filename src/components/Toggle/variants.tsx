'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode, useState } from 'react';
import { Check, Moon, Sun, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';

// ============================================
// Switch
// ============================================
export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    variant?: 'default' | 'labeled' | 'icon';
    icon?: { on: ReactNode; off: ReactNode };
    onColor?: string;
    offColor?: string;
    disabled?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
    ({
        checked = false,
        onChange,
        label,
        variant = 'default',
        icon,
        onColor = 'var(--color-primary)',
        offColor = 'var(--border)',
        disabled = false,
    }, ref) => {
        const width = variant === 'labeled' ? 'w-20' : variant === 'icon' ? 'w-16' : 'w-14';
        const thumbPosition = variant === 'labeled' ? 48 : variant === 'icon' ? 32 : 24;

        return (
            <div className="flex items-center justify-between">
                {label && <span className="text-[var(--text)]">{label}</span>}
                <motion.button
                    ref={ref}
                    type="button"
                    disabled={disabled}
                    className={`relative ${width} h-8 rounded-full transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: checked ? onColor : offColor }}
                    onClick={() => !disabled && onChange?.(!checked)}
                    whileTap={{ scale: disabled ? 1 : 0.95 }}
                >
                    {variant === 'labeled' && (
                        <>
                            <span className={`absolute text-xs font-medium text-white transition-opacity ${checked ? 'left-2 opacity-100' : 'left-2 opacity-0'}`}>ON</span>
                            <span className={`absolute text-xs font-medium text-white transition-opacity ${!checked ? 'right-2 opacity-100' : 'right-2 opacity-0'}`}>OFF</span>
                        </>
                    )}
                    <motion.div
                        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${variant === 'icon' && checked ? 'bg-[#334155]' : 'bg-white'}`}
                        animate={{ x: checked ? thumbPosition : 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                        {variant === 'icon' && icon && (
                            <span className="text-sm">
                                {checked ? icon.on : icon.off}
                            </span>
                        )}
                    </motion.div>
                </motion.button>
            </div>
        );
    }
);
Switch.displayName = 'Switch';

// ============================================
// Checkbox
// ============================================
export interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    variant?: 'square' | 'rounded' | 'gradient';
    color?: string;
    disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
    ({
        checked = false,
        onChange,
        label,
        variant = 'square',
        color = 'var(--color-primary)',
        disabled = false,
    }, ref) => {
        const shapes = {
            square: 'rounded-md',
            rounded: 'rounded-full',
            gradient: 'rounded-md',
        };

        const getStyles = () => {
            if (variant === 'gradient' && checked) {
                return 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]';
            }
            if (checked) {
                return '';
            }
            return 'border-2 border-[var(--border)]';
        };

        return (
            <label
                ref={ref}
                className={`flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <motion.div
                    className={`w-6 h-6 flex items-center justify-center ${shapes[variant]} ${getStyles()}`}
                    style={checked && variant !== 'gradient' ? { backgroundColor: color, borderColor: color } : undefined}
                    onClick={() => !disabled && onChange?.(!checked)}
                    whileTap={{ scale: disabled ? 1 : 0.9 }}
                >
                    {checked && <Check size={16} className="text-white" />}
                </motion.div>
                {label && <span className="text-[var(--text)]">{label}</span>}
            </label>
        );
    }
);
Checkbox.displayName = 'Checkbox';

// ============================================
// Radio Button
// ============================================
export interface RadioButtonProps {
    selected?: boolean;
    onChange?: () => void;
    label?: string;
    color?: string;
    disabled?: boolean;
}

export const RadioButton = forwardRef<HTMLLabelElement, RadioButtonProps>(
    ({
        selected = false,
        onChange,
        label,
        color = 'var(--color-primary)',
        disabled = false,
    }, ref) => {
        return (
            <label
                ref={ref}
                className={`flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border rounded-xl transition-colors ${selected ? 'border-[var(--color-primary)]' : 'border-[var(--border)] hover:border-[var(--color-primary)]/50'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <motion.div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors`}
                    style={{ borderColor: selected ? color : 'var(--border)' }}
                    onClick={() => !disabled && onChange?.()}
                    whileTap={{ scale: disabled ? 1 : 0.9 }}
                >
                    {selected && (
                        <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    )}
                </motion.div>
                {label && <span className="text-[var(--text)]">{label}</span>}
            </label>
        );
    }
);
RadioButton.displayName = 'RadioButton';

// ============================================
// Card Select
// ============================================
export interface CardSelectProps {
    selected?: boolean;
    onChange?: () => void;
    title: string;
    description?: string;
    disabled?: boolean;
}

export const CardSelect = forwardRef<HTMLDivElement, CardSelectProps>(
    ({
        selected = false,
        onChange,
        title,
        description,
        disabled = false,
    }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={`p-4 bg-[var(--bg)] rounded-xl border-2 cursor-pointer transition-colors ${selected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--border)] hover:border-[var(--color-primary)]/50'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !disabled && onChange?.()}
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[var(--text)]">{title}</span>
                    <motion.div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-[var(--border)]'}`}
                    >
                        {selected && <Check size={12} className="text-white" />}
                    </motion.div>
                </div>
                {description && <p className="text-sm text-[var(--text-muted)]">{description}</p>}
            </motion.div>
        );
    }
);
CardSelect.displayName = 'CardSelect';
