'use client';

import { motion } from 'framer-motion';
import { Heart, Bookmark, Share2, MoreHorizontal, Star, ArrowRight, Check, User } from 'lucide-react';

export default function CardShowcase() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Card Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Various card designs for different purposes</p>
            </header>

            {/* Basic Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Basic
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Simple Card */}
                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[#FF3838]/50 transition-colors"
                        whileHover={{ y: -4 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Simple Card</h3>
                        <p className="text-sm text-[var(--text-muted)]">A basic card with minimal styling. Good for simple content display.</p>
                    </motion.div>

                    {/* Shadow Card */}
                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-lg"
                        whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Shadow Card</h3>
                        <p className="text-sm text-[var(--text-muted)]">Card with drop shadow effect. Creates depth and elevation.</p>
                    </motion.div>

                    {/* Gradient Border */}
                    <motion.div
                        className="p-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl"
                        whileHover={{ y: -4 }}
                    >
                        <div className="p-6 bg-[var(--bg)] rounded-xl h-full">
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Gradient Border</h3>
                            <p className="text-sm text-[var(--text-muted)]">Card with gradient border effect using padding trick.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Product
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        className="group bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden"
                        whileHover={{ y: -4 }}
                    >
                        <div className="h-40 bg-gradient-to-br from-[#799EFF]/20 to-[#FFDE63]/20 flex items-center justify-center">
                            <span className="text-4xl">📱</span>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-[var(--color-primary)] font-medium">Electronics</span>
                                <div className="flex items-center gap-1 text-[#f59e0b]">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm">4.9</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-[var(--text)] mb-1">iPhone 16 Pro</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-3">Latest Apple smartphone with A18 chip</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-[var(--text)]">$999</span>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden"
                        whileHover={{ y: -4 }}
                    >
                        <div className="h-40 bg-gradient-to-br from-[#10b981]/20 to-[#06b6d4]/20 flex items-center justify-center">
                            <span className="text-4xl">🎧</span>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-[#10b981] font-medium">Audio</span>
                                <div className="flex items-center gap-1 text-[#f59e0b]">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm">4.8</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-[var(--text)] mb-1">AirPods Pro</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-3">Active noise cancellation wireless</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-[var(--text)]">$249</span>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-[#10b981] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden"
                        whileHover={{ y: -4 }}
                    >
                        <div className="h-40 bg-gradient-to-br from-[#ec4899]/20 to-[#f59e0b]/20 flex items-center justify-center">
                            <span className="text-4xl">⌚</span>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-[#ec4899] font-medium">Wearables</span>
                                <div className="flex items-center gap-1 text-[#f59e0b]">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm">4.7</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-[var(--text)] mb-1">Apple Watch Ultra</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-3">Rugged titanium smartwatch</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-[var(--text)]">$799</span>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-[#ec4899] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Profile Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Profile
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Simple Profile */}
                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-center"
                        whileHover={{ y: -4 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            JD
                        </div>
                        <h3 className="font-semibold text-[var(--text)]">Jane Doe</h3>
                        <p className="text-sm text-[var(--text-muted)] mb-4">Product Designer</p>
                        <div className="flex justify-center gap-4 text-sm text-[var(--text-secondary)]">
                            <span><strong>128</strong> Posts</span>
                            <span><strong>1.2k</strong> Followers</span>
                        </div>
                    </motion.div>

                    {/* Banner Profile */}
                    <motion.div
                        className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden"
                        whileHover={{ y: -4 }}
                    >
                        <div className="h-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)]" />
                        <div className="px-6 pb-6">
                            <div className="w-16 h-16 -mt-8 mb-3 bg-[var(--bg)] border-4 border-[var(--bg)] rounded-full flex items-center justify-center text-lg font-bold text-[var(--color-primary)]">
                                MS
                            </div>
                            <h3 className="font-semibold text-[var(--text)]">Mike Smith</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-3">Senior Developer</p>
                            <button className="w-full py-2 text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                Follow
                            </button>
                        </div>
                    </motion.div>

                    {/* Stats Profile */}
                    <motion.div
                        className="p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl text-white"
                        whileHover={{ y: -4 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-full flex items-center justify-center text-lg font-bold">
                                AK
                            </div>
                            <div>
                                <h3 className="font-semibold">Alex Kim</h3>
                                <p className="text-sm text-white/60">Full Stack Dev</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-xl font-bold">256</p>
                                <p className="text-xs text-white/60">Projects</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">4.9</p>
                                <p className="text-xs text-white/60">Rating</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">98%</p>
                                <p className="text-xs text-white/60">Success</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Pricing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl"
                        whileHover={{ y: -4 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-1">Starter</h3>
                        <p className="text-sm text-[var(--text-muted)] mb-4">For individuals</p>
                        <p className="mb-6">
                            <span className="text-4xl font-bold text-[var(--text)]">$9</span>
                            <span className="text-[var(--text-muted)]">/month</span>
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> 5 Projects
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> Basic Analytics
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> Email Support
                            </li>
                        </ul>
                        <button className="w-full py-3 text-sm font-medium text-[var(--text)] border border-[var(--border)] rounded-lg hover:border-[var(--color-primary)] transition-colors">
                            Get Started
                        </button>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-gradient-to-br from-[var(--color-primary)] to-[#a78bfa] rounded-xl text-white relative"
                        whileHover={{ y: -4, scale: 1.02 }}
                    >
                        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-white/20 rounded-full">
                            Popular
                        </span>
                        <h3 className="text-lg font-semibold mb-1">Pro</h3>
                        <p className="text-sm text-white/70 mb-4">For teams</p>
                        <p className="mb-6">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-white/70">/month</span>
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm">
                                <Check size={16} /> Unlimited Projects
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Check size={16} /> Advanced Analytics
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Check size={16} /> Priority Support
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Check size={16} /> Team Features
                            </li>
                        </ul>
                        <button className="w-full py-3 text-sm font-medium text-[var(--color-primary)] bg-white rounded-lg hover:bg-white/90 transition-colors">
                            Upgrade Now
                        </button>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl"
                        whileHover={{ y: -4 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-1">Enterprise</h3>
                        <p className="text-sm text-[var(--text-muted)] mb-4">For large orgs</p>
                        <p className="mb-6">
                            <span className="text-4xl font-bold text-[var(--text)]">$99</span>
                            <span className="text-[var(--text-muted)]">/month</span>
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> Everything in Pro
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> Custom Integrations
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> Dedicated Support
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <Check size={16} className="text-[#10b981]" /> SLA Guarantee
                            </li>
                        </ul>
                        <button className="w-full py-3 text-sm font-medium text-white bg-[#0f172a] rounded-lg hover:bg-[#1e293b] transition-colors">
                            Contact Sales
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
