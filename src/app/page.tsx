'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Square, Type, Layers, ToggleLeft, Layout, Loader, Box, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Buttons',
    href: '/components/button',
    icon: <Square size={28} />,
    description: 'Gradient, Neon, Glass, 3D styles',
    color: '#FF3838'
  },
  {
    title: 'Inputs',
    href: '/components/input',
    icon: <Type size={28} />,
    description: 'Text fields, Search, Forms',
    color: '#002455'
  },
  {
    title: 'Cards',
    href: '/components/card',
    icon: <Layers size={28} />,
    description: 'Product, Profile, Feature cards',
    color: '#10b981'
  },
  {
    title: 'Toggles',
    href: '/components/toggle',
    icon: <ToggleLeft size={28} />,
    description: 'Switches, Checkboxes, Radios',
    color: '#f59e0b'
  },
  {
    title: 'Layouts',
    href: '/components/layout',
    icon: <Layout size={28} />,
    description: 'Headers, Sidebars, Grids',
    color: '#8b5cf6'
  },
  {
    title: 'Loaders',
    href: '/components/loader',
    icon: <Loader size={28} />,
    description: 'Spinners, Skeletons, Progress',
    color: '#ec4899'
  },
  {
    title: 'Containers',
    href: '/components/container',
    icon: <Box size={28} />,
    description: 'Boxes, Panels, Alerts',
    color: '#06b6d4'
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="text-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#FF3838]/10 border border-[#FF3838]/20 rounded-full"
        >
          <span className="w-2 h-2 bg-[#FF3838] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-[#FF3838]">Design Showcase</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-var(--text) mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          UI Dear
        </motion.h1>
        <motion.p
          className="text-xl text-var(--text-secondary) max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your personal design showcase for UI inspiration
        </motion.p>
      </header>

      {/* Category Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={category.href}
                className="group relative flex flex-col p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--border)]"
                style={{
                  '--hover-color': category.color
                } as React.CSSProperties}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 70%)`
                  }}
                />

                <motion.div
                  className="relative w-14 h-14 flex items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: `${category.color}15`, color: category.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {category.icon}
                </motion.div>

                <h3 className="relative text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--text)] transition-colors">
                  {category.title}
                </h3>
                <p className="relative text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                  {category.description}
                </p>

                <div
                  className="relative mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                  style={{ color: category.color }}
                >
                  Explore <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info */}
      <motion.section
        className="text-center p-8 bg-gradient-to-r from-(--bg-secondary) to-(--bg-tertiary) border border-[var(--border)] rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-lg text-[var(--text-secondary)]">
          Browse different UI styles and get inspired for your next project
        </p>
      </motion.section>
    </div>
  );
}
