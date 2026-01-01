'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

// ============================================
// Base Button Props
// ============================================
export interface BaseButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

// ============================================
// Gradient Button
// ============================================
export type GradientVariant = 'primary' | 'warning' | 'success' | 'outline';

export interface GradientButtonProps extends BaseButtonProps {
    variant?: GradientVariant;
}

const gradientStyles: Record<GradientVariant, string> = {
    primary: 'bg-gradient-to-r from-[#FF3838] to-[#a78bfa] shadow-lg shadow-[#FF3838]/30',
    warning: 'bg-gradient-to-r from-[#f59e0b] to-[#ef4444] shadow-lg shadow-[#f59e0b]/30',
    success: 'bg-gradient-to-r from-[#10b981] to-[#06b6d4] shadow-lg shadow-[#10b981]/30',
    outline: 'bg-transparent border-2 border-[#FF3838] text-[#FF3838] hover:bg-[#FF3838] hover:text-white',
};

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
    ({ children, variant = 'primary', leftIcon, rightIcon, className = '', ...props }, ref) => {
        const isOutline = variant === 'outline';
        return (
            <motion.button
                ref={ref}
                className={`group inline-flex items-center gap-2 px-6 py-3 ${isOutline ? '' : 'text-white'} font-medium rounded-lg transition-colors ${gradientStyles[variant]} ${className}`}
                whileHover={{ scale: 1.05, y: isOutline ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {leftIcon && (
                    <span className="transition-transform duration-300 group-hover:rotate-16">
                        {leftIcon}
                    </span>
                )}
                {children}
                {rightIcon && (
                    <span className="transition-transform duration-300 group-hover:rotate-16">
                        {rightIcon}
                    </span>
                )}
            </motion.button>
        );
    }
);
GradientButton.displayName = 'GradientButton';

// ============================================
// Glass Button
// ============================================
export type GlassVariant = 'light' | 'dark' | 'outline';

export interface GlassButtonProps extends BaseButtonProps {
    variant?: GlassVariant;
}

const glassStyles: Record<GlassVariant, string> = {
    light: 'bg-white/20 backdrop-blur-xl border border-white/30',
    dark: 'bg-black/30 backdrop-blur-xl border border-white/10',
    outline: 'bg-transparent border-2 border-white/50 hover:bg-white/10',
};

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ children, variant = 'light', leftIcon, rightIcon, className = '', ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                className={`inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-lg transition-colors ${glassStyles[variant]} ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </motion.button>
        );
    }
);
GlassButton.displayName = 'GlassButton';

// ============================================
// Neon Button
// ============================================
export type NeonColor = 'purple' | 'cyan' | 'pink';

export interface NeonButtonProps extends BaseButtonProps {
    color?: NeonColor;
}

const neonColors: Record<NeonColor, { text: string; border: string; shadow: string }> = {
    purple: {
        text: 'text-[#c084fc]',
        border: 'border-[#c084fc]',
        shadow: 'hover:shadow-[0_0_15px_rgba(192,132,252,0.5),inset_0_0_15px_rgba(192,132,252,0.1)] hover:[text-shadow:0_0_10px_rgba(192,132,252,0.8)]',
    },
    cyan: {
        text: 'text-[#22d3ee]',
        border: 'border-[#22d3ee]',
        shadow: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.1)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)]',
    },
    pink: {
        text: 'text-[#f472b6]',
        border: 'border-[#f472b6]',
        shadow: 'hover:shadow-[0_0_15px_rgba(244,114,182,0.5),inset_0_0_15px_rgba(244,114,182,0.1)] hover:[text-shadow:0_0_10px_rgba(244,114,182,0.8)]',
    },
};

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ children, color = 'purple', className = '', ...props }, ref) => {
        const colorStyle = neonColors[color];
        return (
            <motion.button
                ref={ref}
                className={`px-8 py-3 font-medium bg-transparent border-2 rounded-lg ${colorStyle.text} ${colorStyle.border} ${colorStyle.shadow} ${className}`}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
NeonButton.displayName = 'NeonButton';

// ============================================
// Minimal Button
// ============================================
export type MinimalVariant = 'solid' | 'outline' | 'ghost' | 'link';

export interface MinimalButtonProps extends BaseButtonProps {
    variant?: MinimalVariant;
}

export const MinimalButton = forwardRef<HTMLButtonElement, MinimalButtonProps>(
    ({ children, variant = 'solid', leftIcon, rightIcon, className = '', ...props }, ref) => {
        const baseStyles = {
            solid: 'px-6 py-3 text-white font-medium bg-[#0f172a] rounded-lg',
            outline: 'px-6 py-3 text-[var(--text)] font-medium bg-transparent border border-[var(--border)] rounded-lg hover:border-[#FF3838]/50 transition-colors',
            ghost: 'px-6 py-3 text-[var(--text-muted)] font-medium bg-transparent rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors',
            link: 'px-0 py-2 text-[#FF3838] font-medium bg-transparent hover:underline',
        };

        const hoverScale = variant === 'link' ? {} : { scale: 1.02 };
        const hoverX = variant === 'link' ? { x: 3 } : {};

        return (
            <motion.button
                ref={ref}
                className={`inline-flex items-center gap-2 ${baseStyles[variant]} ${className}`}
                whileHover={{ ...hoverScale, ...hoverX }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </motion.button>
        );
    }
);
MinimalButton.displayName = 'MinimalButton';

// ============================================
// Pill Button
// ============================================
export type PillVariant = 'solid' | 'outline' | 'gradient';
export type PillColor = 'red' | 'green' | 'pink';

export interface PillButtonProps extends BaseButtonProps {
    variant?: PillVariant;
    color?: PillColor;
}

const pillColors: Record<PillColor, { solid: string; outline: string; gradient: string }> = {
    red: {
        solid: 'bg-[#ef4444] shadow-md shadow-[#ef4444]/30',
        outline: 'bg-transparent border-2 border-[#FF3838] text-[#FF3838] hover:bg-[#FF3838] hover:text-white',
        gradient: 'bg-gradient-to-r from-[#FF3838] to-[#ec4899]',
    },
    green: {
        solid: 'bg-[#10b981] shadow-md shadow-[#10b981]/30',
        outline: 'bg-transparent border-2 border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white',
        gradient: 'bg-gradient-to-r from-[#10b981] to-[#06b6d4]',
    },
    pink: {
        solid: 'bg-[#ec4899] shadow-md shadow-[#ec4899]/30',
        outline: 'bg-transparent border-2 border-[#ec4899] text-[#ec4899] hover:bg-[#ec4899] hover:text-white',
        gradient: 'bg-gradient-to-r from-[#ec4899] to-[#a855f7]',
    },
};

export const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
    ({ children, variant = 'solid', color = 'red', leftIcon, rightIcon, className = '', ...props }, ref) => {
        const colorStyle = pillColors[color][variant];
        const textColor = variant === 'outline' ? '' : 'text-white';

        return (
            <motion.button
                ref={ref}
                className={`inline-flex items-center gap-2 px-6 py-2.5 ${textColor} font-medium text-sm rounded-full transition-colors ${colorStyle} ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </motion.button>
        );
    }
);
PillButton.displayName = 'PillButton';

// ============================================
// 3D Button
// ============================================
export type ThreeDColor = 'blue' | 'green' | 'red' | 'gray';

export interface ThreeDButtonProps extends BaseButtonProps {
    color?: ThreeDColor;
}

const threeDColors: Record<ThreeDColor, { bg: string; shadow: string; activeShadow: string }> = {
    blue: { bg: 'bg-[#3b82f6]', shadow: 'shadow-[0_6px_0_0_#1d4ed8]', activeShadow: '0 2px 0 0 #1d4ed8' },
    green: { bg: 'bg-[#10b981]', shadow: 'shadow-[0_6px_0_0_#047857]', activeShadow: '0 2px 0 0 #047857' },
    red: { bg: 'bg-[#ef4444]', shadow: 'shadow-[0_6px_0_0_#b91c1c]', activeShadow: '0 2px 0 0 #b91c1c' },
    gray: { bg: 'bg-[#374151]', shadow: 'shadow-[0_6px_0_0_#1f2937]', activeShadow: '0 2px 0 0 #1f2937' },
};

export const ThreeDButton = forwardRef<HTMLButtonElement, ThreeDButtonProps>(
    ({ children, color = 'blue', className = '', ...props }, ref) => {
        const colorStyle = threeDColors[color];
        return (
            <motion.button
                ref={ref}
                className={`px-6 py-3 text-white font-medium rounded-lg ${colorStyle.bg} ${colorStyle.shadow} ${className}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 2, boxShadow: colorStyle.activeShadow }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
ThreeDButton.displayName = 'ThreeDButton';

// ============================================
// Icon Button
// ============================================
export type IconButtonVariant = 'gradient' | 'soft' | 'outline' | 'glow';

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
    icon: ReactNode;
    variant?: IconButtonVariant;
    color?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'gradient', color = '#FF3838', className = '', ...props }, ref) => {
        const baseStyles = {
            gradient: `text-white bg-gradient-to-r from-[${color}] to-[#a78bfa] rounded-full shadow-lg shadow-[${color}]/30`,
            soft: `text-[${color}] bg-[${color}]/10 rounded-xl border border-[${color}]/20`,
            outline: `text-[${color}] bg-transparent border border-[var(--border)] rounded-lg hover:bg-[${color}]/10 transition-colors`,
            glow: `text-[${color}] bg-[#0f172a] rounded-xl shadow-[0_0_20px_${color}40]`,
        };

        // Pre-defined color sets for common cases
        const getStyle = () => {
            switch (variant) {
                case 'gradient':
                    return 'text-white bg-gradient-to-r from-[#FF3838] to-[#a78bfa] rounded-full shadow-lg shadow-[#FF3838]/30';
                case 'soft':
                    return 'text-[#ef4444] bg-[#fef2f2] rounded-xl border border-[#fecaca]';
                case 'outline':
                    return 'text-[#FF3838] bg-transparent border border-[var(--border)] rounded-lg hover:bg-[#FF3838]/10 transition-colors';
                case 'glow':
                    return 'text-[#fbbf24] bg-[#0f172a] rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)]';
                default:
                    return '';
            }
        };

        const hoverRotate = variant === 'gradient' ? { rotate: 5 } : {};

        return (
            <motion.button
                ref={ref}
                className={`w-12 h-12 flex items-center justify-center ${getStyle()} ${className}`}
                whileHover={{ scale: 1.1, ...hoverRotate }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {icon}
            </motion.button>
        );
    }
);
IconButton.displayName = 'IconButton';
