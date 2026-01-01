'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Heart,
    Square,
    Type,
    ToggleLeft,
    Layout,
    Layers,
    Loader,
    Home,
    Box
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const designItems: NavItem[] = [
    { label: 'Buttons', href: '/components/button', icon: <Square size={18} /> },
    { label: 'Inputs', href: '/components/input', icon: <Type size={18} /> },
    { label: 'Cards', href: '/components/card', icon: <Layers size={18} /> },
    { label: 'Toggles', href: '/components/toggle', icon: <ToggleLeft size={18} /> },
    { label: 'Layouts', href: '/components/layout', icon: <Layout size={18} /> },
    { label: 'Loaders', href: '/components/loader', icon: <Loader size={18} /> },
    { label: 'Containers', href: '/components/container', icon: <Box size={18} /> },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 w-[280px] h-screen bg-[var(--sidebar-bg)] flex flex-col z-50">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white no-underline">
                    {/* <img src="icon.png" width={40} height={40} alt="" /> */}
                    <Heart size={28} className="text-[#FF3838]" />
                    <span>UI Dear</span>
                </Link>
                <p className="mt-1 text-xs text-[var(--sidebar-text-muted)] tracking-wide">Design Showcase</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
                <div className="mb-6">
                    <Link
                        href="/"
                        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all
              ${pathname === '/'
                                ? 'text-white bg-[#FF3838]/20'
                                : 'text-[var(--sidebar-text-muted)] hover:text-[var(--sidebar-text)] hover:bg-white/5'
                            }`}
                    >
                        <Home size={18} />
                        <span>Overview</span>
                    </Link>
                </div>

                <div className="mb-6">
                    <h3 className="px-2 py-2 text-xs font-semibold text-[var(--sidebar-text-muted)] uppercase tracking-wider">
                        UI Elements
                    </h3>
                    <ul className="space-y-1">
                        {designItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`relative flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all
                      ${isActive
                                                ? 'text-white bg-[#FF3838]/20'
                                                : 'text-[var(--sidebar-text-muted)] hover:text-[var(--sidebar-text)] hover:bg-white/5'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[#FF3838] rounded-full"
                                                layoutId="activeIndicator"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
                <ThemeToggle />
            </div>
        </aside>
    );
}
