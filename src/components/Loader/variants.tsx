'use client';

import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

// ============================================
// Spinner
// ============================================
export type SpinnerVariant = 'basic' | 'dual' | 'gradient' | 'dots' | 'bars' | 'pulse' | 'ring';

export interface SpinnerProps {
    variant?: SpinnerVariant;
    size?: number;
    color?: string;
    label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
    ({ variant = 'basic', size = 40, color = 'var(--color-primary)', label }, ref) => {
        const renderSpinner = () => {
            switch (variant) {
                case 'basic':
                    return (
                        <div
                            className="border-4 border-[var(--border)] rounded-full animate-spin"
                            style={{
                                width: size,
                                height: size,
                                borderTopColor: color
                            }}
                        />
                    );
                case 'dual':
                    return (
                        <div className="relative" style={{ width: size, height: size }}>
                            <div
                                className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
                                style={{ borderTopColor: color, borderBottomColor: 'var(--color-accent)' }}
                            />
                        </div>
                    );
                case 'gradient':
                    return (
                        <motion.div
                            className="rounded-full"
                            style={{
                                width: size,
                                height: size,
                                background: `conic-gradient(from 0deg, transparent, ${color})`,
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                    );
                case 'dots':
                    return (
                        <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: color }}
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </div>
                    );
                case 'bars':
                    return (
                        <div className="flex items-end gap-1" style={{ height: size }}>
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 rounded"
                                    style={{ backgroundColor: color }}
                                    animate={{ height: ['40%', '100%', '40%'] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                                />
                            ))}
                        </div>
                    );
                case 'pulse':
                    return (
                        <motion.div
                            className="rounded-full"
                            style={{ width: size, height: size, backgroundColor: color }}
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    );
                case 'ring':
                    return (
                        <div className="relative" style={{ width: size, height: size }}>
                            <motion.div
                                className="absolute inset-0 border-4 rounded-full"
                                style={{ borderColor: color }}
                                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <div
                                className="absolute inset-0 border-4 rounded-full"
                                style={{ borderColor: color }}
                            />
                        </div>
                    );
                default:
                    return null;
            }
        };

        return (
            <div ref={ref} className="text-center">
                <div className="flex justify-center">{renderSpinner()}</div>
                {label && <p className="mt-3 text-xs text-[var(--text-muted)]">{label}</p>}
            </div>
        );
    }
);
Spinner.displayName = 'Spinner';

// ============================================
// Progress Bar
// ============================================
export type ProgressVariant = 'basic' | 'gradient' | 'striped' | 'indeterminate';

export interface ProgressBarProps {
    value?: number;
    variant?: ProgressVariant;
    label?: string;
    showValue?: boolean;
    height?: number;
    color?: string;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
    ({
        value = 0,
        variant = 'basic',
        label,
        showValue = true,
        height = 8,
        color = 'var(--color-primary)',
    }, ref) => {
        const renderProgress = () => {
            switch (variant) {
                case 'gradient':
                    return (
                        <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1 }}
                        />
                    );
                case 'striped':
                    return (
                        <motion.div
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ width: `${value}%`, backgroundColor: '#10b981' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)',
                                }}
                                animate={{ backgroundPosition: ['0px 0px', '40px 0px'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.div>
                    );
                case 'indeterminate':
                    return (
                        <motion.div
                            className="h-full w-1/3 rounded-full"
                            style={{ backgroundColor: color }}
                            animate={{ x: ['-100%', '400%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    );
                default:
                    return (
                        <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1 }}
                        />
                    );
            }
        };

        return (
            <div ref={ref} className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                {(label || showValue) && variant !== 'indeterminate' && (
                    <div className="flex justify-between mb-2">
                        {label && <span className="text-sm text-[var(--text)]">{label}</span>}
                        {showValue && <span className="text-sm text-[var(--text-muted)]">{value}%</span>}
                    </div>
                )}
                {variant === 'indeterminate' && label && (
                    <p className="text-sm text-[var(--text)] mb-2">{label}</p>
                )}
                <div
                    className="bg-[var(--border)] rounded-full overflow-hidden"
                    style={{ height }}
                >
                    {renderProgress()}
                </div>
            </div>
        );
    }
);
ProgressBar.displayName = 'ProgressBar';

// ============================================
// Skeleton
// ============================================
export type SkeletonVariant = 'card' | 'list' | 'text' | 'avatar' | 'custom';

export interface SkeletonProps {
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
    count?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
    ({ variant = 'text', width = '100%', height = 16, rounded = false, count = 1 }, ref) => {
        const pulseAnimation = {
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { duration: 1.5, repeat: Infinity }
        };

        if (variant === 'card') {
            return (
                <div ref={ref} className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                    <motion.div
                        className="h-32 bg-[var(--border)] rounded-lg mb-4"
                        {...pulseAnimation}
                    />
                    <motion.div
                        className="h-4 bg-[var(--border)] rounded w-3/4 mb-2"
                        {...pulseAnimation}
                        transition={{ ...pulseAnimation.transition, delay: 0.1 }}
                    />
                    <motion.div
                        className="h-4 bg-[var(--border)] rounded w-1/2"
                        {...pulseAnimation}
                        transition={{ ...pulseAnimation.transition, delay: 0.2 }}
                    />
                </div>
            );
        }

        if (variant === 'list') {
            return (
                <div ref={ref} className="space-y-4 p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                    {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <motion.div
                                className="w-12 h-12 bg-[var(--border)] rounded-full flex-shrink-0"
                                {...pulseAnimation}
                                transition={{ ...pulseAnimation.transition, delay: i * 0.1 }}
                            />
                            <div className="flex-1">
                                <motion.div
                                    className="h-4 bg-[var(--border)] rounded w-3/4 mb-2"
                                    {...pulseAnimation}
                                    transition={{ ...pulseAnimation.transition, delay: i * 0.1 }}
                                />
                                <motion.div
                                    className="h-3 bg-[var(--border)] rounded w-1/2"
                                    {...pulseAnimation}
                                    transition={{ ...pulseAnimation.transition, delay: i * 0.1 + 0.1 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        if (variant === 'avatar') {
            return (
                <motion.div
                    ref={ref}
                    className="bg-[var(--border)] rounded-full"
                    style={{ width, height: width }}
                    {...pulseAnimation}
                />
            );
        }

        // Text or custom variant
        return (
            <motion.div
                ref={ref}
                className={`bg-[var(--border)] ${rounded ? 'rounded-full' : 'rounded'}`}
                style={{ width, height }}
                {...pulseAnimation}
            />
        );
    }
);
Skeleton.displayName = 'Skeleton';

// ============================================
// Circular Progress
// ============================================
export interface CircularProgressProps {
    value?: number;
    size?: number;
    strokeWidth?: number;
    variant?: 'basic' | 'gradient' | 'spinning';
    color?: string;
    showValue?: boolean;
}

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
    ({
        value = 75,
        size = 64,
        strokeWidth = 8,
        variant = 'basic',
        color = 'var(--color-primary)',
        showValue = true,
    }, ref) => {
        const radius = 40;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (value / 100) * circumference;

        if (variant === 'spinning') {
            return (
                <div ref={ref} className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                    <motion.svg
                        className="mx-auto"
                        width={size}
                        height={size}
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                        <circle
                            cx="50" cy="50" r={radius}
                            fill="none"
                            stroke="var(--border)"
                            strokeWidth={strokeWidth}
                        />
                        <circle
                            cx="50" cy="50" r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeDasharray="60 191.2"
                            transform="rotate(-90 50 50)"
                        />
                    </motion.svg>
                </div>
            );
        }

        return (
            <div ref={ref} className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                <svg className="mx-auto" width={size} height={size} viewBox="0 0 100 100">
                    {variant === 'gradient' && (
                        <defs>
                            <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-primary)" />
                                <stop offset="100%" stopColor="var(--color-accent)" />
                            </linearGradient>
                        </defs>
                    )}
                    <circle
                        cx="50" cy="50" r={radius}
                        fill="none"
                        stroke="var(--border)"
                        strokeWidth={strokeWidth}
                    />
                    <motion.circle
                        cx="50" cy="50" r={radius}
                        fill="none"
                        stroke={variant === 'gradient' ? 'url(#circularGradient)' : color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5 }}
                        transform="rotate(-90 50 50)"
                    />
                    {showValue && (
                        <text x="50" y="55" textAnchor="middle" className="text-sm font-bold fill-[var(--text)]">
                            {value}%
                        </text>
                    )}
                </svg>
            </div>
        );
    }
);
CircularProgress.displayName = 'CircularProgress';
