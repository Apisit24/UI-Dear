'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Moon, Sun, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';

export default function ToggleShowcase() {
    const [toggles, setToggles] = useState({
        basic: false,
        labeled: true,
        dark: false,
        wifi: true,
        sound: true,
        checkbox1: true,
        checkbox2: false,
        checkbox3: true,
        radio: 'option1',
    });

    const toggle = (key: keyof typeof toggles) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-10">
            {/* Header */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-extrabold text-[var(--text)] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Toggle Styles
                </motion.h1>
                <p className="text-lg text-[var(--text-muted)]">Switches, checkboxes, and radio buttons</p>
            </header>

            {/* Switches */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
                    Switches
                </h2>
                <div className="space-y-6">
                    {/* Basic Switch */}
                    <div className="flex items-center justify-between p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <span className="text-[var(--text)]">Basic Switch</span>
                        <motion.button
                            className={`relative w-14 h-8 rounded-full transition-colors ${toggles.basic ? 'bg-[var(--color-primary)]' : 'bg-[var(--border)]'}`}
                            onClick={() => toggle('basic')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: toggles.basic ? 24 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        </motion.button>
                    </div>

                    {/* Labeled Switch */}
                    <div className="flex items-center justify-between p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <span className="text-[var(--text)]">Labeled Switch</span>
                        <motion.button
                            className={`relative w-20 h-8 rounded-full transition-colors ${toggles.labeled ? 'bg-[#10b981]' : 'bg-[#ef4444]'}`}
                            onClick={() => toggle('labeled')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={`absolute text-xs font-medium text-white transition-opacity ${toggles.labeled ? 'left-2 opacity-100' : 'left-2 opacity-0'}`}>ON</span>
                            <span className={`absolute text-xs font-medium text-white transition-opacity ${!toggles.labeled ? 'right-2 opacity-100' : 'right-2 opacity-0'}`}>OFF</span>
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: toggles.labeled ? 48 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        </motion.button>
                    </div>

                    {/* Icon Switch - Dark Mode */}
                    <div className="flex items-center justify-between p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <span className="text-[var(--text)]">Dark Mode</span>
                        <motion.button
                            className={`relative w-16 h-8 rounded-full transition-colors ${toggles.dark ? 'bg-[#1e293b]' : 'bg-[#fbbf24]'}`}
                            onClick={() => toggle('dark')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${toggles.dark ? 'bg-[#334155]' : 'bg-white'}`}
                                animate={{ x: toggles.dark ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                                {toggles.dark ? <Moon size={14} className="text-white" /> : <Sun size={14} className="text-[#f59e0b]" />}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Icon Switch - WiFi */}
                    <div className="flex items-center justify-between p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <span className="text-[var(--text)]">WiFi</span>
                        <motion.button
                            className={`relative w-16 h-8 rounded-full transition-colors ${toggles.wifi ? 'bg-[var(--color-primary)]' : 'bg-[var(--border)]'}`}
                            onClick={() => toggle('wifi')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                                animate={{ x: toggles.wifi ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                                {toggles.wifi ? <Wifi size={14} className="text-[var(--color-primary)]" /> : <WifiOff size={14} className="text-[var(--text-muted)]" />}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Icon Switch - Sound */}
                    <div className="flex items-center justify-between p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <span className="text-[var(--text)]">Sound</span>
                        <motion.button
                            className={`relative w-16 h-8 rounded-full transition-colors ${toggles.sound ? 'bg-[#10b981]' : 'bg-[var(--border)]'}`}
                            onClick={() => toggle('sound')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                                animate={{ x: toggles.sound ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                                {toggles.sound ? <Volume2 size={14} className="text-[#10b981]" /> : <VolumeX size={14} className="text-[var(--text-muted)]" />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Checkboxes */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Checkboxes
                </h2>
                <div className="space-y-4">
                    {/* Basic Checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors">
                        <motion.div
                            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${toggles.checkbox1 ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'border-[var(--border)]'}`}
                            onClick={() => toggle('checkbox1')}
                            whileTap={{ scale: 0.9 }}
                        >
                            {toggles.checkbox1 && <Check size={16} className="text-white" />}
                        </motion.div>
                        <span className="text-[var(--text)]">Accept terms and conditions</span>
                    </label>

                    {/* Rounded Checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[#10b981]/50 transition-colors">
                        <motion.div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${toggles.checkbox2 ? 'bg-[#10b981] border-[#10b981]' : 'border-[var(--border)]'}`}
                            onClick={() => toggle('checkbox2')}
                            whileTap={{ scale: 0.9 }}
                        >
                            {toggles.checkbox2 && <Check size={16} className="text-white" />}
                        </motion.div>
                        <span className="text-[var(--text)]">Subscribe to newsletter</span>
                    </label>

                    {/* Gradient Checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[var(--color-accent)]/50 transition-colors">
                        <motion.div
                            className={`w-6 h-6 rounded-md flex items-center justify-center ${toggles.checkbox3 ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]' : 'border-2 border-[var(--border)]'}`}
                            onClick={() => toggle('checkbox3')}
                            whileTap={{ scale: 0.9 }}
                        >
                            {toggles.checkbox3 && <Check size={16} className="text-white" />}
                        </motion.div>
                        <span className="text-[var(--text)]">Remember me</span>
                    </label>
                </div>
            </section>

            {/* Radio Buttons */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Radio Buttons
                </h2>
                <div className="space-y-4">
                    <p className="text-sm text-[var(--text-muted)] mb-2">Select an option:</p>
                    {['option1', 'option2', 'option3'].map((option, i) => (
                        <label
                            key={option}
                            className={`flex items-center gap-3 cursor-pointer p-4 bg-[var(--bg)] border rounded-xl transition-colors ${toggles.radio === option ? 'border-[var(--color-primary)]' : 'border-[var(--border)] hover:border-[var(--color-primary)]/50'}`}
                        >
                            <motion.div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${toggles.radio === option ? 'border-[var(--color-primary)]' : 'border-[var(--border)]'}`}
                                onClick={() => setToggles(prev => ({ ...prev, radio: option }))}
                                whileTap={{ scale: 0.9 }}
                            >
                                {toggles.radio === option && (
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-[var(--color-primary)]"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                            <span className="text-[var(--text)]">Option {i + 1}</span>
                        </label>
                    ))}
                </div>
            </section>

            {/* Card Select */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    Card Select
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { id: 'option1', label: 'Starter', price: '$9/mo' },
                        { id: 'option2', label: 'Pro', price: '$29/mo' },
                        { id: 'option3', label: 'Enterprise', price: '$99/mo' },
                    ].map((item) => (
                        <motion.div
                            key={item.id}
                            className={`p-4 bg-[var(--bg)] rounded-xl border-2 cursor-pointer transition-colors ${toggles.radio === item.id ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--border)] hover:border-[var(--color-primary)]/50'}`}
                            onClick={() => setToggles(prev => ({ ...prev, radio: item.id }))}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-[var(--text)]">{item.label}</span>
                                <motion.div
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${toggles.radio === item.id ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-[var(--border)]'}`}
                                >
                                    {toggles.radio === item.id && <Check size={12} className="text-white" />}
                                </motion.div>
                            </div>
                            <p className="text-sm text-[var(--text-muted)]">{item.price}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
