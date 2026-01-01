'use client';

import { motion } from 'framer-motion';
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function LayoutShowcase() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Layout Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Headers, navigation, and layout patterns</p>
            </header>

            {/* Simple Header */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Simple Header
                </h2>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
                        <div className="flex items-center gap-2 font-bold text-lg text-[var(--text)]">
                            <span className="text-[#FF3838]">●</span> Brand
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Home</a>
                            <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Products</a>
                            <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">About</a>
                            <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Contact</a>
                        </nav>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-[#050E3C] rounded-lg hover:bg-[#0a1a5c] transition-colors">
                            Sign In
                        </button>
                    </header>
                </div>
            </section>

            {/* Dark Header */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#050E3C] rounded-full"></span>
                    Dark Header
                </h2>
                <div className="bg-[#050E3C] rounded-xl overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 font-bold text-lg text-white">
                                <span className="text-[#FF3838]">❤</span> UI Dear
                            </div>
                            <nav className="hidden md:flex items-center gap-6">
                                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Dashboard</a>
                                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Projects</a>
                                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Team</a>
                                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Settings</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-white/70 hover:text-white transition-colors">
                                <Search size={20} />
                            </button>
                            <button className="p-2 text-white/70 hover:text-white relative transition-colors">
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF3838] rounded-full" />
                            </button>
                            <div className="w-8 h-8 bg-[#FF3838] rounded-full flex items-center justify-center text-white text-sm font-medium">
                                U
                            </div>
                        </div>
                    </header>
                </div>
            </section>

            {/* Header with Dropdown */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Header with Dropdown
                </h2>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-8">
                            <div className="font-bold text-lg text-[var(--text)]">Logo</div>
                            <nav className="hidden md:flex items-center gap-1">
                                <a href="#" className="px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">Home</a>
                                <button className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">
                                    Products <ChevronDown size={16} />
                                </button>
                                <button className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">
                                    Resources <ChevronDown size={16} />
                                </button>
                                <a href="#" className="px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">Pricing</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Log in</button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-[#FF3838] rounded-lg hover:bg-[#e62e2e] transition-colors">
                                Get Started
                            </button>
                        </div>
                    </header>
                </div>
            </section>

            {/* Mobile Menu */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Mobile Menu
                </h2>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden max-w-[400px]">
                    <header className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
                        <div className="font-bold text-[var(--text)]">Brand</div>
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 text-[var(--text)]"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </header>
                    <motion.nav
                        initial={false}
                        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            <a href="#" className="block px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">Home</a>
                            <a href="#" className="block px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">Products</a>
                            <a href="#" className="block px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">About</a>
                            <a href="#" className="block px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">Contact</a>
                            <hr className="my-2 border-[var(--border)]" />
                            <button className="w-full px-4 py-3 text-white bg-[#050E3C] rounded-lg font-medium hover:bg-[#0a1a5c] transition-colors">
                                Sign In
                            </button>
                        </div>
                    </motion.nav>
                </div>
            </section>

            {/* Footer */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    Footer
                </h2>
                <div className="bg-[#050E3C] rounded-xl overflow-hidden">
                    <footer className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-2 font-bold text-lg text-white mb-4">
                                    <span className="text-[#FF3838]">❤</span> UI Dear
                                </div>
                                <p className="text-sm text-white/60">Your personal design showcase for UI inspiration.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Product</h4>
                                <ul className="space-y-2 text-sm text-white/60">
                                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Company</h4>
                                <ul className="space-y-2 text-sm text-white/60">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Legal</h4>
                                <ul className="space-y-2 text-sm text-white/60">
                                    <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
                            © 2026 UI Dear. All rights reserved.
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
}
