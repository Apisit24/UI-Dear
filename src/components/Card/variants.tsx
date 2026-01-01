'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';
import { Star, Check } from 'lucide-react';

// ============================================
// Base Card Props
// ============================================
export interface BaseCardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children?: ReactNode;
}

// ============================================
// Simple Card
// ============================================
export interface SimpleCardProps extends BaseCardProps {
    title: string;
    description?: string;
    variant?: 'default' | 'bordered' | 'gradient-border';
}

export const SimpleCard = forwardRef<HTMLDivElement, SimpleCardProps>(
    ({ title, description, variant = 'default', className = '', children, ...props }, ref) => {
        const variants = {
            default: 'p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl',
            bordered: 'p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[#FF3838]/50 transition-colors',
            'gradient-border': '',
        };

        if (variant === 'gradient-border') {
            return (
                <motion.div
                    ref={ref}
                    className={`p-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl ${className}`}
                    whileHover={{ y: -4 }}
                    {...props}
                >
                    <div className="p-6 bg-[var(--bg)] rounded-xl h-full">
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{title}</h3>
                        {description && <p className="text-sm text-[var(--text-muted)]">{description}</p>}
                        {children}
                    </div>
                </motion.div>
            );
        }

        return (
            <motion.div
                ref={ref}
                className={`${variants[variant]} ${className}`}
                whileHover={{ y: -4 }}
                {...props}
            >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{title}</h3>
                {description && <p className="text-sm text-[var(--text-muted)]">{description}</p>}
                {children}
            </motion.div>
        );
    }
);
SimpleCard.displayName = 'SimpleCard';

// ============================================
// Shadow Card
// ============================================
export const ShadowCard = forwardRef<HTMLDivElement, SimpleCardProps>(
    ({ title, description, className = '', children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={`p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-lg ${className}`}
                whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
                {...props}
            >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{title}</h3>
                {description && <p className="text-sm text-[var(--text-muted)]">{description}</p>}
                {children}
            </motion.div>
        );
    }
);
ShadowCard.displayName = 'ShadowCard';

// ============================================
// Product Card
// ============================================
export interface ProductCardProps extends BaseCardProps {
    emoji: ReactNode;
    category: string;
    categoryColor?: string;
    title: string;
    description: string;
    price: string;
    rating?: number;
    buttonText?: string;
    buttonColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    onAddToCart?: () => void;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
    ({
        emoji,
        category,
        categoryColor = 'var(--color-primary)',
        title,
        description,
        price,
        rating = 4.9,
        buttonText = 'Add to Cart',
        buttonColor = 'var(--color-primary)',
        gradientFrom = '#799EFF',
        gradientTo = '#FFDE63',
        onAddToCart,
        className = '',
        ...props
    }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={`group bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden ${className}`}
                whileHover={{ y: -4 }}
                {...props}
            >
                <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: `linear-gradient(to bottom right, ${gradientFrom}20, ${gradientTo}20)` }}
                >
                    <span className="text-4xl">{emoji}</span>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium" style={{ color: categoryColor }}>{category}</span>
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                            <Star size={14} fill="currentColor" />
                            <span className="text-sm">{rating}</span>
                        </div>
                    </div>
                    <h3 className="font-semibold text-[var(--text)] mb-1">{title}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-3">{description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-[var(--text)]">{price}</span>
                        <button
                            onClick={onAddToCart}
                            className="px-4 py-2 text-sm font-medium text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: buttonColor }}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }
);
ProductCard.displayName = 'ProductCard';

// ============================================
// Profile Card
// ============================================
export interface ProfileCardProps extends BaseCardProps {
    initials: string;
    name: string;
    role: string;
    variant?: 'simple' | 'banner' | 'stats';
    stats?: { label: string; value: string }[];
    gradientFrom?: string;
    gradientTo?: string;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
    ({
        initials,
        name,
        role,
        variant = 'simple',
        stats = [],
        gradientFrom = 'var(--color-primary)',
        gradientTo = 'var(--color-accent)',
        className = '',
        ...props
    }, ref) => {
        if (variant === 'banner') {
            return (
                <motion.div
                    ref={ref}
                    className={`bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden ${className}`}
                    whileHover={{ y: -4 }}
                    {...props}
                >
                    <div
                        className="h-20"
                        style={{ background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
                    />
                    <div className="px-6 pb-6">
                        <div className="w-16 h-16 -mt-8 mb-3 bg-[var(--bg)] border-4 border-[var(--bg)] rounded-full flex items-center justify-center text-lg font-bold text-[var(--color-primary)]">
                            {initials}
                        </div>
                        <h3 className="font-semibold text-[var(--text)]">{name}</h3>
                        <p className="text-sm text-[var(--text-muted)] mb-3">{role}</p>
                        <button className="w-full py-2 text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                            Follow
                        </button>
                    </div>
                </motion.div>
            );
        }

        if (variant === 'stats') {
            return (
                <motion.div
                    ref={ref}
                    className={`p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl text-white ${className}`}
                    whileHover={{ y: -4 }}
                    {...props}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                            style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}
                        >
                            {initials}
                        </div>
                        <div>
                            <h3 className="font-semibold">{name}</h3>
                            <p className="text-sm text-white/60">{role}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <p className="text-xl font-bold">{stat.value}</p>
                                <p className="text-xs text-white/60">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            );
        }

        // Simple variant
        return (
            <motion.div
                ref={ref}
                className={`p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-center ${className}`}
                whileHover={{ y: -4 }}
                {...props}
            >
                <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}
                >
                    {initials}
                </div>
                <h3 className="font-semibold text-[var(--text)]">{name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{role}</p>
                {stats.length > 0 && (
                    <div className="flex justify-center gap-4 text-sm text-[var(--text-secondary)]">
                        {stats.map((stat, i) => (
                            <span key={i}><strong>{stat.value}</strong> {stat.label}</span>
                        ))}
                    </div>
                )}
            </motion.div>
        );
    }
);
ProfileCard.displayName = 'ProfileCard';

// ============================================
// Pricing Card
// ============================================
export interface PricingCardProps extends BaseCardProps {
    name: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    buttonText?: string;
    isPopular?: boolean;
    variant?: 'default' | 'highlighted' | 'dark';
}

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
    ({
        name,
        description,
        price,
        period = '/month',
        features,
        buttonText = 'Get Started',
        isPopular = false,
        variant = 'default',
        className = '',
        ...props
    }, ref) => {
        if (variant === 'highlighted') {
            return (
                <motion.div
                    ref={ref}
                    className={`p-6 bg-gradient-to-br from-[var(--color-primary)] to-[#a78bfa] rounded-xl text-white relative ${className}`}
                    whileHover={{ y: -4, scale: 1.02 }}
                    {...props}
                >
                    {isPopular && (
                        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-white/20 rounded-full">
                            Popular
                        </span>
                    )}
                    <h3 className="text-lg font-semibold mb-1">{name}</h3>
                    <p className="text-sm text-white/70 mb-4">{description}</p>
                    <p className="mb-6">
                        <span className="text-4xl font-bold">{price}</span>
                        <span className="text-white/70">{period}</span>
                    </p>
                    <ul className="space-y-3 mb-6">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                                <Check size={16} /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 text-sm font-medium text-[var(--color-primary)] bg-white rounded-lg hover:bg-white/90 transition-colors">
                        {buttonText}
                    </button>
                </motion.div>
            );
        }

        if (variant === 'dark') {
            return (
                <motion.div
                    ref={ref}
                    className={`p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl ${className}`}
                    whileHover={{ y: -4 }}
                    {...props}
                >
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-1">{name}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4">{description}</p>
                    <p className="mb-6">
                        <span className="text-4xl font-bold text-[var(--text)]">{price}</span>
                        <span className="text-[var(--text-muted)]">{period}</span>
                    </p>
                    <ul className="space-y-3 mb-6">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 text-sm font-medium text-white bg-[#0f172a] rounded-lg hover:bg-[#1e293b] transition-colors">
                        {buttonText}
                    </button>
                </motion.div>
            );
        }

        // Default variant
        return (
            <motion.div
                ref={ref}
                className={`p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl ${className}`}
                whileHover={{ y: -4 }}
                {...props}
            >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-1">{name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{description}</p>
                <p className="mb-6">
                    <span className="text-4xl font-bold text-[var(--text)]">{price}</span>
                    <span className="text-[var(--text-muted)]">{period}</span>
                </p>
                <ul className="space-y-3 mb-6">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                            <Check size={16} className="text-[#10b981]" /> {feature}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 text-sm font-medium text-[var(--text)] border border-[var(--border)] rounded-lg hover:border-[var(--color-primary)] transition-colors">
                    {buttonText}
                </button>
            </motion.div>
        );
    }
);
PricingCard.displayName = 'PricingCard';
