'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight, Download, Sparkles, Zap, Send, Plus, Check, Star } from 'lucide-react';
import {
  GradientButton,
  GlassButton,
  NeonButton,
  MinimalButton,
  PillButton,
  ThreeDButton,
  IconButton,
} from '@/components/Button';

export default function ButtonShowcase() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="text-center mb-8">
        <motion.h1
          className="text-4xl font-extrabold text-[var(--text)] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Button Styles
        </motion.h1>
        <p className="text-lg text-[var(--text-muted)]">Design ideas for your next project</p>
      </header>

      {/* Gradient Buttons */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF3838] rounded-full"></span>
          Gradient
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <GradientButton variant="primary" leftIcon={<Sparkles size={18} />}>
            Get Started
          </GradientButton>

          <GradientButton variant="warning" leftIcon={<Zap size={18} />}>
            Upgrade Pro
          </GradientButton>

          <GradientButton variant="success" leftIcon={<Star size={18} />}>
            Premium
          </GradientButton>

          <GradientButton variant="outline">
            Learn More
          </GradientButton>
        </div>
      </section>

      {/* Glassmorphism */}
      <section className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-white/80 rounded-full"></span>
          Glassmorphism
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <GlassButton variant="light" leftIcon={<Send size={18} />}>
            Send Message
          </GlassButton>

          <GlassButton variant="dark" leftIcon={<Download size={18} />}>
            Download
          </GlassButton>

          <GlassButton variant="outline">
            View Demo
          </GlassButton>
        </div>
      </section>

      {/* Neon / Glow */}
      <section className="p-6 bg-[#0f172a] rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c084fc] rounded-full shadow-[0_0_8px_#c084fc]"></span>
          Neon Glow
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <NeonButton color="purple">Explore</NeonButton>
          <NeonButton color="cyan">Connect</NeonButton>
          <NeonButton color="pink">Subscribe</NeonButton>
        </div>
      </section>

      {/* Minimal */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#64748b] rounded-full"></span>
          Minimal
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <MinimalButton variant="solid" rightIcon={<ArrowRight size={16} />}>
            Continue
          </MinimalButton>

          <MinimalButton variant="outline">
            Cancel
          </MinimalButton>

          <MinimalButton variant="ghost">
            Skip for now
          </MinimalButton>

          <MinimalButton variant="link">
            Learn more →
          </MinimalButton>
        </div>
      </section>

      {/* Pill / Rounded */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ec4899] rounded-full"></span>
          Rounded / Pill
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <PillButton variant="solid" color="red" leftIcon={<Heart size={16} />}>
            Like
          </PillButton>

          <PillButton variant="outline" color="red">
            Follow
          </PillButton>

          <PillButton variant="gradient" color="red" leftIcon={<Plus size={16} />}>
            Add Friend
          </PillButton>

          <PillButton variant="solid" color="green" leftIcon={<Check size={16} />}>
            Done
          </PillButton>
        </div>
      </section>

      {/* 3D / Shadow */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
          3D / Shadow
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ThreeDButton color="blue">Save Changes</ThreeDButton>
          <ThreeDButton color="green">Confirm</ThreeDButton>
          <ThreeDButton color="red">Delete</ThreeDButton>
          <ThreeDButton color="gray">Submit</ThreeDButton>
        </div>
      </section>

      {/* Icon Only */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#fbbf24] rounded-full"></span>
          Icon Only
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton variant="gradient" icon={<Plus size={20} />} />
          <IconButton variant="soft" icon={<Heart size={20} />} />
          <IconButton variant="outline" icon={<Star size={20} />} />
          <IconButton variant="glow" icon={<Zap size={20} />} />
        </div>
      </section>
    </div>
  );
}
