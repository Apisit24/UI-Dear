'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Types
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastVariant = 'solid' | 'light' | 'minimal';

export interface ToastProps {
    id: number;
    type: ToastType;
    title: string;
    message?: string;
    variant?: ToastVariant;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}

// Toast Context
interface ToastContextType {
    toasts: ToastProps[];
    addToast: (toast: Omit<ToastProps, 'id'>) => void;
    removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

// Toast Provider
interface ToastProviderProps {
    children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [toastId, setToastId] = useState(0);

    const addToast = useCallback((toast: Omit<ToastProps, 'id'>) => {
        const id = toastId;
        const newToast = { ...toast, id };
        setToasts(prev => [...prev, newToast]);
        setToastId(prev => prev + 1);

        // Auto remove after duration (default 3s)
        const duration = toast.duration ?? 3000;
        if (duration > 0) {
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== id));
            }, duration);
        }
    }, [toastId]);

    const removeToast = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
}

// Toast Item Component
function ToastItem({ toast, onClose }: { toast: ToastProps; onClose: () => void }) {
    const variant = toast.variant ?? 'solid';

    const icons = {
        success: <Check size={20} />,
        error: <AlertCircle size={20} />,
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
        success: 'bg-[#10b981]/10 border border-[#10b981]/30 text-[#047857]',
        error: 'bg-[#DC0000]/10 border border-[#DC0000]/30 text-[#DC0000]',
        warning: 'bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#92400e]',
        info: 'bg-[#002455]/10 border border-[#002455]/30 text-[#002455]',
    };

    const minimalColors = {
        success: 'bg-[#10b981]',
        error: 'bg-[#DC0000]',
        warning: 'bg-[#f59e0b]',
        info: 'bg-[#002455]',
    };

    if (variant === 'minimal') {
        return (
            <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.9 }}
                className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-lg shadow-lg"
            >
                <div className={`w-1 h-8 ${minimalColors[toast.type]} rounded-full`} />
                <p className="text-sm text-[#050E3C] flex-1">{toast.title}</p>
                {toast.action && (
                    <button
                        onClick={toast.action.onClick}
                        className="px-3 py-1 text-sm font-medium text-[#FF3838] hover:bg-[#FF3838]/10 rounded-lg"
                    >
                        {toast.action.label}
                    </button>
                )}
                <button onClick={onClose} className="p-1 hover:bg-black/5 rounded">
                    <X size={16} className="text-gray-500" />
                </button>
            </motion.div>
        );
    }

    const baseStyles = variant === 'light' ? lightStyles[toast.type] : solidStyles[toast.type];
    const textMuted = variant === 'light' ? 'opacity-70' : 'text-white/80';

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className={`p-4 rounded-xl shadow-lg ${baseStyles}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
                <div className="flex-1">
                    <h4 className="font-semibold">{toast.title}</h4>
                    {toast.message && <p className={`text-sm ${textMuted}`}>{toast.message}</p>}
                </div>
                {toast.action && (
                    <button
                        onClick={toast.action.onClick}
                        className={`px-3 py-1 text-sm font-medium rounded-lg ${variant === 'light' ? 'hover:bg-black/10' : 'bg-white/20 hover:bg-white/30'
                            }`}
                    >
                        {toast.action.label}
                    </button>
                )}
                <button
                    onClick={onClose}
                    className={`flex-shrink-0 p-1 rounded ${variant === 'light' ? 'hover:bg-black/10' : 'hover:bg-white/20'
                        }`}
                >
                    <X size={16} />
                </button>
            </div>
        </motion.div>
    );
}

// Toast Container
function ToastContainer() {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2 w-80">
            <AnimatePresence>
                {toasts.map(toast => (
                    <ToastItem
                        key={toast.id}
                        toast={toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

// Simple Toast Component (standalone)
export function Toast({
    type,
    title,
    message,
    variant = 'solid',
    onClose
}: {
    type: ToastType;
    title: string;
    message?: string;
    variant?: ToastVariant;
    onClose?: () => void;
}) {
    const icons = {
        success: <Check size={20} />,
        error: <AlertCircle size={20} />,
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
        success: 'bg-[#10b981]/10 border border-[#10b981]/30 text-[#047857]',
        error: 'bg-[#DC0000]/10 border border-[#DC0000]/30 text-[#DC0000]',
        warning: 'bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#92400e]',
        info: 'bg-[#002455]/10 border border-[#002455]/30 text-[#002455]',
    };

    const baseStyles = variant === 'light' ? lightStyles[type] : solidStyles[type];
    const textMuted = variant === 'light' ? 'opacity-70' : 'text-white/80';

    return (
        <div className={`p-4 rounded-xl ${baseStyles}`}>
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
                <div className="flex-1">
                    <h4 className="font-semibold">{title}</h4>
                    {message && <p className={`text-sm ${textMuted}`}>{message}</p>}
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className={`flex-shrink-0 p-1 rounded ${variant === 'light' ? 'hover:bg-black/10' : 'hover:bg-white/20'
                            }`}
                    >
                        <X size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
