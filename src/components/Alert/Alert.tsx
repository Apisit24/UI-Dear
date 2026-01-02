'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Info, AlertTriangle, XCircle } from 'lucide-react';

export type AlertType = 'success' | 'error' | 'warning' | 'info';
export type AlertVariant = 'solid' | 'light' | 'outline' | 'minimal';

export interface AlertProps {
    type: AlertType;
    title?: string;
    children?: ReactNode;
    variant?: AlertVariant;
    icon?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}

const icons = {
    success: <Check size={20} />,
    error: <XCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
};

const solidStyles = {
    success: 'bg-[#10b981] text-white',
    error: 'bg-[#DC0000] text-white',
    warning: 'bg-[#f59e0b] text-white',
    info: 'bg-[#002455] text-white',
};

const lightStyles = {
    success: 'bg-[#10b981]/10 text-[#047857] border border-[#10b981]/30',
    error: 'bg-[#DC0000]/10 text-[#DC0000] border border-[#DC0000]/30',
    warning: 'bg-[#f59e0b]/10 text-[#92400e] border border-[#f59e0b]/30',
    info: 'bg-[#002455]/10 text-[#002455] border border-[#002455]/30',
};

const outlineStyles = {
    success: 'bg-transparent text-[#10b981] border-2 border-[#10b981]',
    error: 'bg-transparent text-[#DC0000] border-2 border-[#DC0000]',
    warning: 'bg-transparent text-[#f59e0b] border-2 border-[#f59e0b]',
    info: 'bg-transparent text-[#002455] border-2 border-[#002455]',
};

const minimalColors = {
    success: 'border-l-[#10b981]',
    error: 'border-l-[#DC0000]',
    warning: 'border-l-[#f59e0b]',
    info: 'border-l-[#002455]',
};

export function Alert({
    type,
    title,
    children,
    variant = 'light',
    icon,
    dismissible = false,
    onDismiss,
    className = '',
}: AlertProps) {
    const displayIcon = icon ?? icons[type];

    if (variant === 'minimal') {
        return (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 bg-[var(--bg)] border border-[var(--border)] border-l-4 ${minimalColors[type]} rounded-lg ${className}`}
            >
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5" style={{ color: minimalColors[type].replace('border-l-', '').replace('[', '').replace(']', '') }}>
                        {displayIcon}
                    </div>
                    <div className="flex-1">
                        {title && <h4 className="font-semibold text-[var(--text)]">{title}</h4>}
                        {children && <div className="text-sm text-[var(--text-muted)]">{children}</div>}
                    </div>
                    {dismissible && onDismiss && (
                        <button onClick={onDismiss} className="p-1 rounded hover:bg-black/5">
                            <X size={16} className="text-[var(--text-muted)]" />
                        </button>
                    )}
                </div>
            </motion.div>
        );
    }

    const getStyles = () => {
        switch (variant) {
            case 'solid': return solidStyles[type];
            case 'outline': return outlineStyles[type];
            default: return lightStyles[type];
        }
    };

    const textMuted = variant === 'solid' ? 'text-white/80' : 'opacity-80';
    const dismissBg = variant === 'solid' ? 'hover:bg-white/20' : 'hover:bg-black/10';

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl ${getStyles()} ${className}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{displayIcon}</div>
                <div className="flex-1">
                    {title && <h4 className="font-semibold">{title}</h4>}
                    {children && <div className={`text-sm ${textMuted}`}>{children}</div>}
                </div>
                {dismissible && onDismiss && (
                    <button onClick={onDismiss} className={`p-1 rounded ${dismissBg}`}>
                        <X size={16} />
                    </button>
                )}
            </div>
        </motion.div>
    );
}
