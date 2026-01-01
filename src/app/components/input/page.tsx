'use client';

import { motion } from 'framer-motion';
import { Search, Mail, Lock, User, Eye, EyeOff, Check, X, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function InputShowcase() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Input Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Text fields and form inputs</p>
            </header>

            {/* Basic Inputs */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Basic
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Default input"
                        className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Disabled input"
                        disabled
                        className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-muted)] cursor-not-allowed opacity-60"
                    />
                </div>
            </section>

            {/* With Icons */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    With Icons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-12 pr-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full pl-12 pr-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full pl-12 pr-12 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full pl-12 pr-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Floating Label */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Floating Label
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            id="float1"
                            placeholder=" "
                            className="peer w-full px-4 pt-6 pb-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                        <label
                            htmlFor="float1"
                            className="absolute left-4 top-4 text-[var(--text-muted)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="float2"
                            placeholder=" "
                            className="peer w-full px-4 pt-6 pb-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                        <label
                            htmlFor="float2"
                            className="absolute left-4 top-4 text-[var(--text-muted)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                        >
                            Email Address
                        </label>
                    </div>
                </div>
            </section>

            {/* Validation States */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ef4444] rounded-full"></span>
                    Validation States
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                value="Valid input"
                                readOnly
                                className="w-full px-4 py-3 pr-12 bg-[var(--bg)] border-2 border-[#10b981] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20"
                            />
                            <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" />
                        </div>
                        <p className="mt-2 text-sm text-[#10b981]">Looks good!</p>
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                value="Invalid input"
                                readOnly
                                className="w-full px-4 py-3 pr-12 bg-[var(--bg)] border-2 border-[#ef4444] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20"
                            />
                            <X className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ef4444]" />
                        </div>
                        <p className="mt-2 text-sm text-[#ef4444]">This field is required</p>
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Warning state"
                                className="w-full px-4 py-3 pr-12 bg-[var(--bg)] border-2 border-[#f59e0b] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
                            />
                            <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f59e0b]" />
                        </div>
                        <p className="mt-2 text-sm text-[#f59e0b]">Check your input</p>
                    </div>
                </div>
            </section>

            {/* Rounded / Pill */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Rounded / Pill
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="w-full pl-14 pr-6 py-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full pl-6 pr-28 py-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Textarea */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    Textarea
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <textarea
                        placeholder="Write your message..."
                        rows={4}
                        className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                    />
                    <textarea
                        placeholder="Auto-resize disabled"
                        rows={4}
                        className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                    />
                </div>
            </section>
        </div>
    );
}
