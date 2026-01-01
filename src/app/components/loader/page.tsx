'use client';

import { motion } from 'framer-motion';
import {
    Spinner,
    ProgressBar,
    Skeleton,
    CircularProgress,
} from '@/components/Loader';

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
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="basic" label="Basic" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="dual" label="Dual Ring" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="gradient" label="Gradient" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="dots" label="Dots" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="bars" label="Bars" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="pulse" label="Pulse" />
                    </div>
                    <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
                        <Spinner variant="ring" label="Ring Pulse" />
                    </div>
                </div>
            </section>

            {/* Progress Bars */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Progress Bars
                </h2>
                <div className="space-y-4">
                    <ProgressBar
                        value={60}
                        label="Uploading..."
                    />
                    <ProgressBar
                        value={75}
                        variant="gradient"
                        label="Processing..."
                        height={12}
                    />
                    <ProgressBar
                        value={45}
                        variant="striped"
                        label="Downloading..."
                        height={16}
                    />
                    <ProgressBar
                        variant="indeterminate"
                        label="Loading..."
                    />
                </div>
            </section>

            {/* Skeleton Loaders */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Skeleton Loaders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Skeleton variant="card" />
                    <Skeleton variant="list" count={3} />
                </div>
            </section>

            {/* Circular Progress */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Circular Progress
                </h2>
                <div className="flex flex-wrap items-center gap-8">
                    <CircularProgress value={75} variant="basic" />
                    <CircularProgress value={50} variant="gradient" />
                    <CircularProgress variant="spinning" />
                </div>
            </section>
        </div>
    );
}
