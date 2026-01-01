'use client';

import { motion } from 'framer-motion';
import {
    SimpleCard,
    ShadowCard,
    ProductCard,
    ProfileCard,
    PricingCard,
} from '@/components/Card';

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
                    <SimpleCard
                        title="Simple Card"
                        description="A basic card with minimal styling. Good for simple content display."
                        variant="bordered"
                    />
                    <ShadowCard
                        title="Shadow Card"
                        description="Card with drop shadow effect. Creates depth and elevation."
                    />
                    <SimpleCard
                        title="Gradient Border"
                        description="Card with gradient border effect using padding trick."
                        variant="gradient-border"
                    />
                </div>
            </section>

            {/* Product Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#002455] rounded-full"></span>
                    Product
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProductCard
                        emoji="📱"
                        category="Electronics"
                        categoryColor="var(--color-primary)"
                        title="iPhone 16 Pro"
                        description="Latest Apple smartphone with A18 chip"
                        price="$999"
                        rating={4.9}
                        buttonColor="var(--color-primary)"
                        gradientFrom="#799EFF"
                        gradientTo="#FFDE63"
                    />
                    <ProductCard
                        emoji="🎧"
                        category="Audio"
                        categoryColor="#10b981"
                        title="AirPods Pro"
                        description="Active noise cancellation wireless"
                        price="$249"
                        rating={4.8}
                        buttonColor="#10b981"
                        gradientFrom="#10b981"
                        gradientTo="#06b6d4"
                    />
                    <ProductCard
                        emoji="⌚"
                        category="Wearables"
                        categoryColor="#ec4899"
                        title="Apple Watch Ultra"
                        description="Rugged titanium smartwatch"
                        price="$799"
                        rating={4.7}
                        buttonColor="#ec4899"
                        gradientFrom="#ec4899"
                        gradientTo="#f59e0b"
                    />
                </div>
            </section>

            {/* Profile Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    Profile
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProfileCard
                        initials="JD"
                        name="Jane Doe"
                        role="Product Designer"
                        variant="simple"
                        stats={[
                            { value: '128', label: 'Posts' },
                            { value: '1.2k', label: 'Followers' },
                        ]}
                    />
                    <ProfileCard
                        initials="MS"
                        name="Mike Smith"
                        role="Senior Developer"
                        variant="banner"
                        gradientFrom="var(--color-primary)"
                        gradientTo="var(--color-highlight)"
                    />
                    <ProfileCard
                        initials="AK"
                        name="Alex Kim"
                        role="Full Stack Dev"
                        variant="stats"
                        gradientFrom="#f59e0b"
                        gradientTo="#ef4444"
                        stats={[
                            { value: '256', label: 'Projects' },
                            { value: '4.9', label: 'Rating' },
                            { value: '98%', label: 'Success' },
                        ]}
                    />
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full"></span>
                    Pricing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PricingCard
                        name="Starter"
                        description="For individuals"
                        price="$9"
                        features={['5 Projects', 'Basic Analytics', 'Email Support']}
                    />
                    <PricingCard
                        name="Pro"
                        description="For teams"
                        price="$29"
                        features={['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Team Features']}
                        variant="highlighted"
                        isPopular
                        buttonText="Upgrade Now"
                    />
                    <PricingCard
                        name="Enterprise"
                        description="For large orgs"
                        price="$99"
                        features={['Everything in Pro', 'Custom Integrations', 'Dedicated Support', 'SLA Guarantee']}
                        variant="dark"
                        buttonText="Contact Sales"
                    />
                </div>
            </section>
        </div>
    );
}
