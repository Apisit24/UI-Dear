'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';
import {
    Switch,
    Checkbox,
    RadioButton,
    CardSelect,
} from '@/components/Toggle';

export default function ToggleShowcase() {
    const [switches, setSwitches] = useState({
        basic: false,
        labeled: true,
        dark: false,
        wifi: true,
        sound: true,
    });
    const [checkboxes, setCheckboxes] = useState({
        terms: true,
        newsletter: false,
        remember: true,
    });
    const [selectedRadio, setSelectedRadio] = useState('option1');
    const [selectedPlan, setSelectedPlan] = useState('option1');

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
                <div className="space-y-4">
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Switch
                            label="Basic Switch"
                            checked={switches.basic}
                            onChange={(checked) => setSwitches(s => ({ ...s, basic: checked }))}
                        />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Switch
                            label="Labeled Switch"
                            variant="labeled"
                            checked={switches.labeled}
                            onChange={(checked) => setSwitches(s => ({ ...s, labeled: checked }))}
                            onColor="#10b981"
                            offColor="#ef4444"
                        />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Switch
                            label="Dark Mode"
                            variant="icon"
                            checked={switches.dark}
                            onChange={(checked) => setSwitches(s => ({ ...s, dark: checked }))}
                            onColor="#1e293b"
                            offColor="#fbbf24"
                            icon={{
                                on: <Moon size={14} className="text-white" />,
                                off: <Sun size={14} className="text-[#f59e0b]" />,
                            }}
                        />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Switch
                            label="WiFi"
                            variant="icon"
                            checked={switches.wifi}
                            onChange={(checked) => setSwitches(s => ({ ...s, wifi: checked }))}
                            icon={{
                                on: <Wifi size={14} className="text-[var(--color-primary)]" />,
                                off: <WifiOff size={14} className="text-[var(--text-muted)]" />,
                            }}
                        />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Switch
                            label="Sound"
                            variant="icon"
                            checked={switches.sound}
                            onChange={(checked) => setSwitches(s => ({ ...s, sound: checked }))}
                            onColor="#10b981"
                            icon={{
                                on: <Volume2 size={14} className="text-[#10b981]" />,
                                off: <VolumeX size={14} className="text-[var(--text-muted)]" />,
                            }}
                        />
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
                    <Checkbox
                        label="Accept terms and conditions"
                        variant="square"
                        checked={checkboxes.terms}
                        onChange={(checked) => setCheckboxes(c => ({ ...c, terms: checked }))}
                    />
                    <Checkbox
                        label="Subscribe to newsletter"
                        variant="rounded"
                        color="#10b981"
                        checked={checkboxes.newsletter}
                        onChange={(checked) => setCheckboxes(c => ({ ...c, newsletter: checked }))}
                    />
                    <Checkbox
                        label="Remember me"
                        variant="gradient"
                        checked={checkboxes.remember}
                        onChange={(checked) => setCheckboxes(c => ({ ...c, remember: checked }))}
                    />
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
                        <RadioButton
                            key={option}
                            label={`Option ${i + 1}`}
                            selected={selectedRadio === option}
                            onChange={() => setSelectedRadio(option)}
                        />
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
                    <CardSelect
                        title="Starter"
                        description="$9/mo"
                        selected={selectedPlan === 'option1'}
                        onChange={() => setSelectedPlan('option1')}
                    />
                    <CardSelect
                        title="Pro"
                        description="$29/mo"
                        selected={selectedPlan === 'option2'}
                        onChange={() => setSelectedPlan('option2')}
                    />
                    <CardSelect
                        title="Enterprise"
                        description="$99/mo"
                        selected={selectedPlan === 'option3'}
                        onChange={() => setSelectedPlan('option3')}
                    />
                </div>
            </section>
        </div>
    );
}
