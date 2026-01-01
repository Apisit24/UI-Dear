'use client';

import { motion } from 'framer-motion';

export default function ContainerShowcase() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Container Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Boxes, panels, and container patterns</p>
            </header>

            {/* Basic Containers */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Basic Containers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Border Container */}
                    <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[#FF3838]/50 transition-colors">
                        <h3 className="font-medium text-[var(--text)] mb-2">Border Container</h3>
                        <p className="text-sm text-[var(--text-muted)]">Simple container with border and rounded corners.</p>
                    </div>

                    {/* Shadow Container */}
                    <div className="p-6 bg-[var(--bg)] rounded-xl shadow-lg border border-[var(--border)]">
                        <h3 className="font-medium text-[var(--text)] mb-2">Shadow Container</h3>
                        <p className="text-sm text-[var(--text-muted)]">Elevated container with drop shadow.</p>
                    </div>

                    {/* Filled Container */}
                    <div className="p-6 bg-[var(--bg-tertiary)] rounded-xl">
                        <h3 className="font-medium text-[var(--text)] mb-2">Filled Container</h3>
                        <p className="text-sm text-[var(--text-muted)]">Container with subtle background fill.</p>
                    </div>

                    {/* Accent Border */}
                    <div className="p-6 bg-[var(--bg)] border-l-4 border-l-[#FF3838] border border-[var(--border)] rounded-xl">
                        <h3 className="font-medium text-[var(--text)] mb-2">Accent Border</h3>
                        <p className="text-sm text-[var(--text-muted)]">Container with colored left border.</p>
                    </div>
                </div>
            </section>

            {/* Alert / Notice Containers */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Alert / Notice
                </h2>
                <div className="space-y-4">
                    {/* Info */}
                    <div className="p-4 bg-[#002455]/10 border border-[#002455]/20 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-[#002455] text-xl">ℹ️</span>
                            <div>
                                <h4 className="font-medium text-[var(--text)]">Information</h4>
                                <p className="text-sm text-[var(--text-muted)]">This is an informational message for the user.</p>
                            </div>
                        </div>
                    </div>

                    {/* Success */}
                    <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">✅</span>
                            <div>
                                <h4 className="font-medium text-[#047857]">Success</h4>
                                <p className="text-sm text-[var(--text-muted)]">Your action was completed successfully.</p>
                            </div>
                        </div>
                    </div>

                    {/* Warning */}
                    <div className="p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">⚠️</span>
                            <div>
                                <h4 className="font-medium text-[#b45309]">Warning</h4>
                                <p className="text-sm text-[var(--text-muted)]">Please review before proceeding.</p>
                            </div>
                        </div>
                    </div>

                    {/* Error */}
                    <div className="p-4 bg-[#DC0000]/10 border border-[#DC0000]/20 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">❌</span>
                            <div>
                                <h4 className="font-medium text-[#DC0000]">Error</h4>
                                <p className="text-sm text-[var(--text-muted)]">Something went wrong. Please try again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Boxes */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Feature Boxes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-center cursor-pointer"
                        whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(255,56,56,0.2)' }}
                    >
                        <div className="w-14 h-14 mx-auto mb-4 bg-[#FF3838]/10 text-[#FF3838] rounded-xl flex items-center justify-center text-2xl">
                            🚀
                        </div>
                        <h3 className="font-semibold text-[var(--text)] mb-2">Fast</h3>
                        <p className="text-sm text-[var(--text-muted)]">Lightning fast performance</p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-center cursor-pointer"
                        whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(0,36,85,0.2)' }}
                    >
                        <div className="w-14 h-14 mx-auto mb-4 bg-[#002455]/10 text-[#002455] rounded-xl flex items-center justify-center text-2xl">
                            🔒
                        </div>
                        <h3 className="font-semibold text-[var(--text)] mb-2">Secure</h3>
                        <p className="text-sm text-[var(--text-muted)]">Enterprise-grade security</p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-center cursor-pointer"
                        whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(16,185,129,0.2)' }}
                    >
                        <div className="w-14 h-14 mx-auto mb-4 bg-[#10b981]/10 text-[#10b981] rounded-xl flex items-center justify-center text-2xl">
                            ⚡
                        </div>
                        <h3 className="font-semibold text-[var(--text)] mb-2">Reliable</h3>
                        <p className="text-sm text-[var(--text-muted)]">99.9% uptime guaranteed</p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Boxes */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#DC0000] rounded-full"></span>
                    Stats Boxes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <motion.div
                        className="p-6 bg-gradient-to-br from-[#050E3C] to-[#0a1a5c] rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-3xl font-bold text-white mb-1">10K+</p>
                        <p className="text-sm text-white/60">Users</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-gradient-to-br from-[#002455] to-[#003d8f] rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-3xl font-bold text-white mb-1">50K+</p>
                        <p className="text-sm text-white/60">Downloads</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-3xl font-bold text-white mb-1">99%</p>
                        <p className="text-sm text-white/60">Satisfaction</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-3xl font-bold text-white mb-1">24/7</p>
                        <p className="text-sm text-white/60">Support</p>
                    </motion.div>
                </div>
            </section>

            {/* Callout Boxes */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    Callout Boxes
                </h2>
                <div className="space-y-4">
                    <motion.div
                        className="p-6 bg-gradient-to-r from-[#050E3C] to-[#002455] rounded-2xl"
                        whileHover={{ scale: 1.01 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
                        <p className="text-white/70 mb-4">Join thousands of users who trust our platform.</p>
                        <button className="px-6 py-2.5 text-sm font-medium text-[#050E3C] bg-white rounded-lg hover:bg-white/90 transition-colors">
                            Get Started Free
                        </button>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-gradient-to-r from-[#DC0000] to-[#FF3838] rounded-2xl"
                        whileHover={{ scale: 1.01 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer</h3>
                        <p className="text-white/80 mb-4">Get 50% off your first month. Don't miss out!</p>
                        <button className="px-6 py-2.5 text-sm font-medium text-[#DC0000] bg-white rounded-lg hover:bg-white/90 transition-colors">
                            Claim Offer
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
