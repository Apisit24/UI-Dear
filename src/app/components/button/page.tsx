'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight, Download, Sparkles, Zap, Send, Plus, Check, Star } from 'lucide-react';

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
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-[#FF3838] to-[#a78bfa] rounded-lg shadow-lg shadow-[#FF3838]/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={18} />
            Get Started
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-lg shadow-lg shadow-[#f59e0b]/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={18} />
            Upgrade Pro
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-[#10b981] to-[#06b6d4] rounded-lg shadow-lg shadow-[#10b981]/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Star size={18} />
            Premium
          </motion.button>

          <motion.button
            className="px-6 py-3 text-[#FF3838] font-medium bg-transparent border-2 border-[#FF3838] rounded-lg hover:bg-[#FF3838] hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* Glassmorphism */}
      <section className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-white/80 rounded-full"></span>
          Glassmorphism
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={18} />
            Send Message
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-black/30 backdrop-blur-xl border border-white/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download
          </motion.button>

          <motion.button
            className="px-6 py-3 text-white font-medium bg-transparent border-2 border-white/50 rounded-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Demo
          </motion.button>
        </div>
      </section>

      {/* Neon / Glow */}
      <section className="p-6 bg-[#0f172a] rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c084fc] rounded-full shadow-[0_0_8px_#c084fc]"></span>
          Neon Glow
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="px-8 py-3 text-[#c084fc] font-medium bg-transparent border-2 border-[#c084fc] rounded-lg shadow-[0_0_15px_rgba(192,132,252,0.5),inset_0_0_15px_rgba(192,132,252,0.1)] [text-shadow:0_0_10px_rgba(192,132,252,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore
          </motion.button>

          <motion.button
            className="px-8 py-3 text-[#22d3ee] font-medium bg-transparent border-2 border-[#22d3ee] rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.1)] [text-shadow:0_0_10px_rgba(34,211,238,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Connect
          </motion.button>

          <motion.button
            className="px-8 py-3 text-[#f472b6] font-medium bg-transparent border-2 border-[#f472b6] rounded-lg shadow-[0_0_15px_rgba(244,114,182,0.5),inset_0_0_15px_rgba(244,114,182,0.1)] [text-shadow:0_0_10px_rgba(244,114,182,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </div>
      </section>

      {/* Minimal */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#64748b] rounded-full"></span>
          Minimal
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-[#0f172a] rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            className="px-6 py-3 text-[var(--text)] font-medium bg-transparent border border-[var(--border)] rounded-lg hover:border-[#FF3838]/50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>

          <motion.button
            className="px-6 py-3 text-[var(--text-muted)] font-medium bg-transparent rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            whileTap={{ scale: 0.98 }}
          >
            Skip for now
          </motion.button>

          <motion.button
            className="px-0 py-2 text-[#FF3838] font-medium bg-transparent hover:underline"
            whileHover={{ x: 3 }}
          >
            Learn more →
          </motion.button>
        </div>
      </section>

      {/* Pill / Rounded */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ec4899] rounded-full"></span>
          Rounded / Pill
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-medium text-sm bg-[#ef4444] rounded-full shadow-md shadow-[#ef4444]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart size={16} />
            Like
          </motion.button>

          <motion.button
            className="px-6 py-2.5 text-[#FF3838] font-medium text-sm bg-transparent border-2 border-[#FF3838] rounded-full hover:bg-[#FF3838] hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Follow
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-medium text-sm bg-gradient-to-r from-[#FF3838] to-[#ec4899] rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={16} />
            Add Friend
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-medium text-sm bg-[#10b981] rounded-full shadow-md shadow-[#10b981]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Check size={16} />
            Done
          </motion.button>
        </div>
      </section>

      {/* 3D / Shadow */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
          3D / Shadow
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="px-6 py-3 text-white font-medium bg-[#3b82f6] rounded-lg shadow-[0_6px_0_0_#1d4ed8]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2, boxShadow: '0 2px 0 0 #1d4ed8' }}
          >
            Save Changes
          </motion.button>

          <motion.button
            className="px-6 py-3 text-white font-medium bg-[#10b981] rounded-lg shadow-[0_6px_0_0_#047857]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2, boxShadow: '0 2px 0 0 #047857' }}
          >
            Confirm
          </motion.button>

          <motion.button
            className="px-6 py-3 text-white font-medium bg-[#ef4444] rounded-lg shadow-[0_6px_0_0_#b91c1c]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2, boxShadow: '0 2px 0 0 #b91c1c' }}
          >
            Delete
          </motion.button>

          <motion.button
            className="px-6 py-3 text-white font-medium bg-[#374151] rounded-lg shadow-[0_6px_0_0_#1f2937]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2, boxShadow: '0 2px 0 0 #1f2937' }}
          >
            Submit
          </motion.button>
        </div>
      </section>

      {/* Icon Only */}
      <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#fbbf24] rounded-full"></span>
          Icon Only
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            className="w-12 h-12 flex items-center justify-center text-white bg-gradient-to-r from-[#FF3838] to-[#a78bfa] rounded-full shadow-lg shadow-[#FF3838]/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} />
          </motion.button>

          <motion.button
            className="w-12 h-12 flex items-center justify-center text-[#ef4444] bg-[#fef2f2] rounded-xl border border-[#fecaca]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={20} />
          </motion.button>

          <motion.button
            className="w-12 h-12 flex items-center justify-center text-[#FF3838] bg-transparent border border-[var(--border)] rounded-lg hover:bg-[#FF3838]/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star size={20} />
          </motion.button>

          <motion.button
            className="w-12 h-12 flex items-center justify-center text-[#fbbf24] bg-[#0f172a] rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
