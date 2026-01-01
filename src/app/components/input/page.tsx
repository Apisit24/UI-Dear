'use client';

import { motion } from 'framer-motion';
import { Search, Mail, Lock, User } from 'lucide-react';
import {
    BasicInput,
    IconInput,
    FloatingLabelInput,
    ValidationInput,
    PillInput,
    TextArea,
} from '@/components/Input';

export default function InputShowcase() {
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
                    <BasicInput placeholder="Default input" />
                    <BasicInput placeholder="Disabled input" disabled />
                </div>
            </section>

            {/* With Icons */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    With Icons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <IconInput
                        icon={<Search size={20} />}
                        placeholder="Search..."
                    />
                    <IconInput
                        icon={<Mail size={20} />}
                        placeholder="Email address"
                        type="email"
                    />
                    <IconInput
                        icon={<Lock size={20} />}
                        placeholder="Password"
                        showPasswordToggle
                    />
                    <IconInput
                        icon={<User size={20} />}
                        placeholder="Username"
                    />
                </div>
            </section>

            {/* Floating Label */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Floating Label
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FloatingLabelInput label="Full Name" />
                    <FloatingLabelInput label="Email Address" type="email" />
                </div>
            </section>

            {/* Validation States */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ef4444] rounded-full"></span>
                    Validation States
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ValidationInput
                        state="success"
                        value="Valid input"
                        message="Looks good!"
                        readOnly
                    />
                    <ValidationInput
                        state="error"
                        value="Invalid input"
                        message="This field is required"
                        readOnly
                    />
                    <ValidationInput
                        state="warning"
                        placeholder="Warning state"
                        message="Check your input"
                    />
                </div>
            </section>

            {/* Rounded / Pill */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Rounded / Pill
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PillInput
                        icon={<Search size={20} />}
                        placeholder="Search anything..."
                    />
                    <PillInput
                        placeholder="Enter your email"
                        buttonText="Subscribe"
                    />
                </div>
            </section>

            {/* Textarea */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    Textarea
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextArea placeholder="Write your message..." />
                    <TextArea placeholder="Auto-resize disabled" variant="filled" />
                </div>
            </section>
        </div>
    );
}
