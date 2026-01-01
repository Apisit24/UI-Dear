'use client';

import { motion } from 'framer-motion';

export default function LoaderShowcase() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Loader Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Spinners, skeletons, and progress indicators</p>
            </header>

            {/* Spinners */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Spinners
                </h2>
                <div className="flex flex-wrap items-center gap-8">
                    {/* Basic Spinner */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="w-10 h-10 border-4 border-[var(--border)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto" />
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Basic</p>
                    </div>

                    {/* Dual Ring */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="relative w-10 h-10 mx-auto">
                            <div className="absolute inset-0 border-4 border-transparent border-t-[var(--color-primary)] border-b-[var(--color-accent)] rounded-full animate-spin" />
                        </div>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Dual Ring</p>
                    </div>

                    {/* Gradient Spinner */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <motion.div
                            className="w-10 h-10 rounded-full mx-auto"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent, var(--color-primary))',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Gradient</p>
                    </div>

                    {/* Dots */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="flex gap-1 justify-center h-10 items-center">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-[var(--color-primary)] rounded-full"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </div>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Dots</p>
                    </div>

                    {/* Bars */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="flex items-end gap-1 h-10 justify-center">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 bg-[var(--color-primary)] rounded"
                                    animate={{ height: ['40%', '100%', '40%'] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                                />
                            ))}
                        </div>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Bars</p>
                    </div>

                    {/* Pulse */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <motion.div
                            className="w-10 h-10 bg-[var(--color-primary)] rounded-full mx-auto"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Pulse</p>
                    </div>

                    {/* Ring Pulse */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="relative w-10 h-10 mx-auto">
                            <motion.div
                                className="absolute inset-0 border-4 border-[var(--color-primary)] rounded-full"
                                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <div className="absolute inset-0 border-4 border-[var(--color-primary)] rounded-full" />
                        </div>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Ring Pulse</p>
                    </div>
                </div>
            </section>

            {/* Progress Bars */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Progress Bars
                </h2>
                <div className="space-y-6">
                    {/* Basic Progress */}
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-[var(--text)]">Uploading...</span>
                            <span className="text-sm text-[var(--text-muted)]">60%</span>
                        </div>
                        <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[var(--color-primary)] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>

                    {/* Gradient Progress */}
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-[var(--text)]">Processing...</span>
                            <span className="text-sm text-[var(--text-muted)]">75%</span>
                        </div>
                        <div className="h-3 bg-[var(--border)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '75%' }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>

                    {/* Striped Progress */}
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-[var(--text)]">Downloading...</span>
                            <span className="text-sm text-[var(--text-muted)]">45%</span>
                        </div>
                        <div className="h-4 bg-[var(--border)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full relative overflow-hidden"
                                style={{ width: '45%', background: '#10b981' }}
                                initial={{ width: 0 }}
                                animate={{ width: '45%' }}
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
                        </div>
                    </div>

                    {/* Indeterminate */}
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <p className="text-sm text-[var(--text)] mb-2">Loading...</p>
                        <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full w-1/3 bg-[var(--color-primary)] rounded-full"
                                animate={{ x: ['-100%', '400%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skeleton Loaders */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Skeleton Loaders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card Skeleton */}
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <motion.div
                            className="h-32 bg-[var(--border)] rounded-lg mb-4"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.div
                            className="h-4 bg-[var(--border)] rounded w-3/4 mb-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.div
                            className="h-4 bg-[var(--border)] rounded w-1/2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                    </div>

                    {/* List Skeleton */}
                    <div className="space-y-4 p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <motion.div
                                    className="w-12 h-12 bg-[var(--border)] rounded-full flex-shrink-0"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                />
                                <div className="flex-1">
                                    <motion.div
                                        className="h-4 bg-[var(--border)] rounded w-3/4 mb-2"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    />
                                    <motion.div
                                        className="h-3 bg-[var(--border)] rounded w-1/2"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 + 0.1 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Circular Progress */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Circular Progress
                </h2>
                <div className="flex flex-wrap items-center gap-8">
                    {/* Basic Circle */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
                            <circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="8"
                            />
                            <motion.circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 62.8 }}
                                transition={{ duration: 1.5 }}
                                transform="rotate(-90 50 50)"
                            />
                            <text x="50" y="55" textAnchor="middle" className="text-sm font-bold fill-[var(--text)]">75%</text>
                        </svg>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Basic</p>
                    </div>

                    {/* Gradient Circle */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-accent)" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="8"
                            />
                            <motion.circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 125.6 }}
                                transition={{ duration: 1.5 }}
                                transform="rotate(-90 50 50)"
                            />
                            <text x="50" y="55" textAnchor="middle" className="text-sm font-bold fill-[var(--text)]">50%</text>
                        </svg>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Gradient</p>
                    </div>

                    {/* Spinning Circle */}
                    <div className="text-center p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <motion.svg
                            className="w-16 h-16 mx-auto"
                            viewBox="0 0 100 100"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        >
                            <circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="50" cy="50" r="40"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="60 191.2"
                                transform="rotate(-90 50 50)"
                            />
                        </motion.svg>
                        <p className="mt-3 text-xs text-[var(--text-muted)]">Spinning</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
